(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),a=n(9),i=(n(0),n(203)),r={},s={id:"conflux-doc/docs/consensus",title:"consensus",description:"# The Conflux Consensus Layer Design and Implementation",source:"@site/docs/conflux-doc/docs/consensus.md",permalink:"/docs/conflux-doc/docs/consensus",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/consensus.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1587285086},c={};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"user-content-the-conflux-consensus-layer-design-and-implementation"},"The Conflux Consensus Layer Design and Implementation"),Object(i.b)("p",null,"The Conflux consensus layer processes all incoming blocks received from the\nsynchronization layer, produces the total order of blocks based on the Conflux\nGHAST consensus algorithm, and invokes the underlying ",Object(i.b)("strong",{parentName:"p"},"transaction execution\nengine")," to run transactions in the determined order. It provides the\ninformation necessary to assist ",Object(i.b)("strong",{parentName:"p"},"block generator")," to prepare the block skeleton of new\nblocks. It also notifies the ",Object(i.b)("strong",{parentName:"p"},"transaction pool")," about processed transactions\nso that the pool can make better transaction selection decisions. "),Object(i.b)("p",null,"This document is to provide a high-level overview for readers who want to\nunderstand the rust implementation of the Conflux consensus layer (in directory\ncore/src/consensus). For more implementation details, see inlined comments in\nthe code. For more information about the Conflux consensus algorithm, see\nConflux Protocol Specification and Conflux paper (",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://arxiv.org/abs/1805.03870"}),"https://arxiv.org/abs/1805.03870"),"). "),Object(i.b)("h2",{id:"user-content-design-goals"},"Design Goals"),Object(i.b)("p",null,"The consensus layer has the following design goals. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Process new blocks in the background following the consensus algorithm\nconsistently.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"We want to minimize the memory usage of each block in the consensus graph.\nEven with the checkpoint mechanism, the graph will contain 300K-500K blocks in\nthe normal case and more than 1M blocks when facing liveness attacks. This may\nstress the memory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"We want to process each block fast. Because full/archive nodes have to\nprocess every block from the ",Object(i.b)("em",{parentName:"p"},"original genesis")," when they catch up with the\nnetwork from scratch, fast block process is important to keep the catch up\nperiod short.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Robust against potential attacks. Malicious attackers may generate bad\nblocks at arbitrary positions in the TreeGraph."))),Object(i.b)("h2",{id:"user-content-structures-and-components"},"Structures and Components"),Object(i.b)("h3",{id:"user-content-consensusgraph"},"ConsensusGraph"),Object(i.b)("p",null,"ConsensusGraph"," (core/src/consensus/mod.rs) is the main struct of the\nconsensus layer. The synchronization layer constructs ","ConsensusGraph"," with a\n","BlockDataManager"," which stores all block metadata information on disk.\n","ConsensusGraph::on_new_block()"," is the key function to send new blocks to the\n","ConsensusGraph"," struct to process. It also provides a set of public functions\nto query the status of blocks/transactions. This should be the main interface\nwith which other components interact."),Object(i.b)("h3",{id:"user-content-consensusgraphinner"},"ConsensusGraphInner"),Object(i.b)("p",null,"ConsensusGraphInner"," (core/src/consensus/consensus_inner/mod.rs) is the inner\nstructure of ","ConsensusGraph",". ","ConsensusGraph::on_new_block()"," acquires the\nwrite lock of the inner struct at the start of the function. The rest are\nquery functions that only acquire read locks."),Object(i.b)("p",null,"The internal structure of ","ConsensusGraphInner"," is fairly complicated.\nGenerally speaking, it maintains two kinds of information. The first kind of\ninformation is the state of the whole TreeGraph, i.e., the current ",Object(i.b)("em",{parentName:"p"},"pivot\nchain"),", ",Object(i.b)("em",{parentName:"p"},"timer chain"),", ",Object(i.b)("em",{parentName:"p"},"difficulty"),", etc.. The second kind of information is\nthe state of each block (i.e., ","ConsensusGraphNode"," struct for each block).\nEach block corresponds to a ","ConsensusGraphNode"," struct for its information.\nWhen it first enters ","ConsensusGraphInner",", it will be inserted into\n","ConsensusGraphInner::arena : Slab<ConsensusGraphNode>",". The index in the\nslab will become the arena index of the block in ","ConsensusGraphInner",". We use\nthe arena index to represent a block internally instead of ","H256"," because it is\nmuch cheaper. We will refer back to the fields in ","ConsensusGraphInner"," and\n","ConsensusGraphNode"," when we talk about algorithm mechanism and their\nimplementations."),Object(i.b)("h3",{id:"user-content-consensusnewblockhandler"},"ConsensusNewBlockHandler"),Object(i.b)("p",null,"ConsensusNewBlockHandler","\n(core/src/consensus/consensus_inner/consensus_new_block_handler.rs) contains a\nset of routines for processing a new block. In theory, this code could be part\nof ","ConsensusGraphInner"," because it mostly manipulates the inner struct.\nHowever, these routines are all subroutine of the ","on_new_block()"," and the\nconsensus_inner/mod.rs is already very complicated. We therefore decided to put\nthem into a separate file."),Object(i.b)("h3",{id:"user-content-consensusexecutor"},"ConsensusExecutor"),Object(i.b)("p",null,"ConsensusExecutor"," (core/src/consensus/consensus_inner/consensus_executor.rs)\nis the interface struct for the standalone transaction execution thread.\n","ConsensusExecutor::enqueue_epoch()"," allows other threads to send an execution\ntask to execute the epoch of a given pivot chain block asynchronously. Once the\ncomputation finishes, the resulting state root will be stored into\n","BlockDataManager",". Other threads can call\n","ConsensusExecutor::wait_for_result()"," to wait for the execution of an epoch if\ndesired. In the current implementation, ","ConsensusExecutor"," also contains the\nroutines for the calculation for block rewards, including\n","get_reward_execution_info()"," and its subroutines."),Object(i.b)("h3",{id:"user-content-confirmationmeter"},"ConfirmationMeter"),Object(i.b)("p",null,"ConfirmationMeter"," (core/src/consensus/consensus_inner/confirmation_meter.rs)\nconservatively calculates the confirmation risk of each pivot chain block. Its\nresult will be useful for the storage layer to determine when it is ",Object(i.b)("em",{parentName:"p"},"safe")," to\ndiscard old snapshots. It can also be used to serve RPC queries about block\nconfirmation if we decide to provide such RPC."),Object(i.b)("h3",{id:"user-content-anticonecache-and-pastsetcache"},"AnticoneCache and PastsetCache"),Object(i.b)("p",null,"AnticoneCache"," (core/src/consensus/anticone_cache.rs) and ","PastsetCache","\n(core/src/consensus/pastset_cache.rs) are two structs that implement customized\ncaches for data structures in ","ConsensusGraphInner",". In the implementation of\nthe inner struct, we need to calculate and store the anticone set and the past\nset of each block. However, it is not possible to store all of these sets in\nmemory. We therefore implement cache style data structures to store sets for\nrecently inserted/accessed blocks. If an anticone/past set is not found in the\ncache, we will recalculate the set in the current inner struct implementation. "),Object(i.b)("h2",{id:"user-content-important-algorithmic-mechanisms"},"Important Algorithmic Mechanisms"),Object(i.b)("p",null,"There are several important algorithmic mechanisms in the Conflux Consensus\nLayer. Here we will talk about them from the implementation aspect. See XXX for\nthe algorithmic reasoning behind them."),Object(i.b)("h3",{id:"user-content-pivot-chain-and-total-order"},"Pivot Chain and Total Order"),Object(i.b)("p",null,"The basic idea of the Conflux consensus algorithm is to first make everyone\nagree on a pivot chain. It then expands the total order from the pivot chain to\ncover all blocks with a topological sort. As long as the pivot chain does not\nchange/reorg, the total order of blocks will stay the same, so does the derived\norder of transactions. "),Object(i.b)("p",null,"Comparing with Bitcoin/Ethereum, the consensus in Conflux has two key\ndifferences: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"almost every block")," will go into the total order, not just the agreed pivot\nchain.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The transaction validity and the block validity are ",Object(i.b)("em",{parentName:"p"},"independent"),". For example, a\ntransaction is invalid if it was included before or it cannot carry out due to\ninsufficient balance. Such invalid transactions will become noop during the\nexecution. However, ",Object(i.b)("em",{parentName:"p"},"unlike Bitcoin and Ethereum blocks containing such\ntransactions will not become invalid"),"."))),Object(i.b)("p",null,"In ","ConsensusGraphInner",", the arena index of the current pivot chain blocks are\nstored in order in the ","pivot_chain[]"," vector. To maintain it, we calculate the\nlowest common ancestor (LCA) between the newly inserted block and the current best\nblock following the GHAST rule. If the fork corresponding to the newly inserted\nblock for the LCA ended up to be heavier, we will update the ","pivot_chain[]"," from\nthe forked point."),Object(i.b)("h3",{id:"user-content-timer-chain"},"Timer Chain"),Object(i.b)("p",null,"Blocks whose PoW quality is ","timer_chain_difficulty_ratio"," times higher than the target\ndifficulty are ",Object(i.b)("em",{parentName:"p"},"timer blocks"),". The ","is_timer"," field of the block will be set to\nTrue. The consensus algorithm then finds the longest timer block chain (more\naccurately, with greatest accumulated difficulty) similar to the Bitcoin\nconsensus algorithm of finding the longest chain. The arena index of this\nlongest timer chain will be stored into ","timer_chain[]",". "),Object(i.b)("p",null,"The rationale of the timer chain is to provide a coarse-grained measurement of\ntime that cannot be influenced by a malicious attacker. Because timer blocks\nare rare and generated slowly (if ","timer_chain_difficulty_ratio"," is properly\nhigh), a malicious attacker cannot prevent the growth of the timer chain unless\nit has the majority of the computation power. Therefore how many timer chain\nblocks appear in the past set of a block is a good indication about the latest\npossible generation time of the block. We compute this value for each block and\nstore it in ","timer_chain_height"," field of the block."),Object(i.b)("h3",{id:"user-content-weight-maintenance-with-link-cut-tree"},"Weight Maintenance with Link-Cut Tree"),Object(i.b)("p",null,"To effectively maintain the pivot chain, we need to query the total weight of a\nsubtree. Conflux uses a Link-Cut Tree data structure to maintain the subtree\nweights in O(log n). The Link-Cut Tree can also calculate the LCA of any two nodes\nin the TreeGraph in O(log n). The ","weight_tree"," field in ","ConsensusGraphInner","\nis the link-cut tree that stores the subtree weight of every node. Note that\nthe implementation of the Link-Cut Tree is in the utils/link-cut-tree\ndirectory."),Object(i.b)("h3",{id:"user-content-adaptive-weight"},"Adaptive Weight"),Object(i.b)("p",null,"If the TreeGraph is under a liveness attack, it may fail to converge under one\nblock for a while. To handle this situation, the GHAST algorithm idea is to\nstart to generate adaptive blocks, i.e., blocks whose weights are redistributed\nsignificantly so that there will be many zero weight blocks with a rare set of\nvery heavy blocks. Specifically, if the PoW quality of an adaptive block is\n","adaptive_heavy_block_ratio"," times of the target difficulty, the block\nwill have a weight of ","adaptive_heavy_block_ratio","; otherwise, the block will\nhave a weight of zero. This effectively slows down the confirmation\ntemporarily but will ensure the consensus progress."),Object(i.b)("p",null,"Because adaptive weight is a mechanism to defend against rare liveness attacks,\nit should not be turned on during the normal scenario. A new block is adaptive\nonly if: 1) one of its ancestor blocks is still not the dominant subtree\ncomparing to its siblings, and 2) a significantly long period of time has passed\nbetween the generation of that ancestor block and the new block (i.e., the\ndifference of ","timer_chain_height"," is sufficiently large). ","ConsensusGraphInner::adaptive_weight()","\nand its subroutines implement the algorithm to determine whether a block is\nadaptive or not. Note that the implementation uses another link-cut-tree\n","adaptive_tree"," as a helper. Please see the inlined comments for the\nimplementation details. "),Object(i.b)("h3",{id:"user-content-partial-invalid"},"Partial Invalid"),Object(i.b)("p",null,"Note that the past set of a new block denotes all the blocks that the generator\nof the new block observes at the generation time. Therefore, from the past set\nof a new block, other full nodes could determine whether it chooses the correct\nparent block and whether it should be adaptive or not. "),Object(i.b)("p",null,"The Conflux consensus algorithm defines those blocks who choose incorrect\nparents or fill in incorrect adaptive status as ",Object(i.b)("em",{parentName:"p"},"partial invalid blocks"),". For a\npartial invalid block, the ","partial_invalid"," field will be set to True. The\nalgorithm requires the partial invalid blocks being treated differently from\nthe normal blocks in three ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"All honest nodes will not reference directly or indirectly partial invalid\nblocks until a significant period of time. This time period is measured with\nthe ","timer_chain_height"," and the difference has to be more than\n","timer_chain_beta",". Yes, it means that if another otherwise perfectly fine\nblock referencing the partial invalid block, both of these two blocks will not\nbe referenced for a while.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Partial invalid blocks will have no block reward. They are extremely\nunlikely to get any reward anyway because of their large anticone set due to\nthe first rule.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Partial invalid blocks are excluded from the timer chain consideration."))),Object(i.b)("p",null,"To implement the first rule, the ","on_new_block()"," routine in\n","ConsensusNewBlockHandler"," is separated into two subroutine\n","preactivate_block()"," and ","activate_block()",". ","preactivate_block()"," compute and\ndetermine whether a block is partial invalid or not, while ","activate_block()","\nfully integrate a block into the consensus graph inner data structures. For\nevery new block, the field ","active_cnt"," tracks how many inactive blocks it\nreferences. A block is inactive if it references directly or indirectly a\npartial invalid block. ","activate_block()"," will be called on a block only when\n","active_cnt"," of the block becomes zero. The field ","activated"," denotes whether a\nblock is active or not. For partially invalid blocks, their activation will be\ndelayed till the current timer chain height of the ledger is ","timer_chain_beta","\nhigher than the invalid block. Newly generated blocks will not reference any\ninactive blocks, i.e., these inactive blocks are treated as if they were not in\nthe TreeGraph."),Object(i.b)("h3",{id:"user-content-anticone-past-view-and-ledger-view"},"Anticone, Past View, and Ledger View"),Object(i.b)("p",null,"In order to check the partial invalid status of each block, we need to operate\nunder the ",Object(i.b)("em",{parentName:"p"},"past view")," of the block to determine its correct parent and its\nadaptivity. This is different from the current state of the TreeGraph or we\ncall it the ",Object(i.b)("em",{parentName:"p"},"ledger view"),", i.e., all blocks in the anticone and the future set\nof the block are excluded. Because we process blocks in topological order, the\nfuture set of a new block is empty. We therefore need to eliminate all anticone\nblocks only."),Object(i.b)("p",null,"compute_and_update_anticone()"," in ","ConsensusNewBlockHandler"," computes the\nanticone set of a new block. Note that because the anticone set may be very\nlarge, we have two implementation level optimizations. First, we represent the\nanticone set as a set of barrier nodes in the TreeGraph, i.e., a set of\nsubtrees where each block in the subtrees is in the anticone set. Second, we\nwill maintain the anticone set of the recently accessed/inserted blocks\nonly. When checking whether a block is valid in its past view or not (e.g., in\n","adaptive_weight()"," and in ","check_correct_parent()","), we first cut all barrier\nsubtrees from the link-cut weight trees accordingly to get the state of the\npast view. After the computation, we restore these anticone subtrees."),Object(i.b)("h3",{id:"user-content-check-correct-parent"},"Check Correct Parent"),Object(i.b)("p",null,"To check whether a new block chooses a correct parent block or not, we first\ncompute the set of blocks inside the epoch of the new block assuming that\nthe new block is on the pivot chain. We store this set to the field\n","blockset_in_own_view_of_epoch",". We then iterate over every candidate block in\nthis set to make sure that the chosen parent block is better than it.\nSpecifically, we find out the two fork blocks of the candidate block and the\nparent block from their LCA and make sure that the fork of the parent is\nheavier. This logic is implemented in ","check_correct_parent()"," in\n","ConsensusNewBlockHandler","."),Object(i.b)("p",null,"Note that ","blockset_in_own_view_of_epoch"," may become too large to hold\nconsistently in memory as well. Especially if a malicious attacker tries to\ngenerate invalid blocks to blow up this set. The current implementation will\nonly periodically clear the set and only keep the sets for pivot chain blocks.\nNote that for pivot chain blocks, this set will also be used during the\ntransaction execution."),Object(i.b)("h3",{id:"user-content-fallback-brute-force-methods"},"Fallback Brute Force Methods"),Object(i.b)("p",null,"There are situations where the anticone barrier set is too large if a malicious\nattacker tries to launch a performance attack on Conflux. This will make the\ndefault strategy worse than O(n) because there is a factor of O(log n) for each\nblock in the barrier set when we do the link-cut tree chopping. To this end, we\nimplemented a brute force routine ","compute_subtree_weights()"," to compute the\nsubtree weights of each block in a past view for O(n). We also implement\n","check_correct_parent_brutal()"," and ","adaptive_weight_impl_brutal()"," to use the\nbrute-force computed subtree weight to do the checking instead. "),Object(i.b)("h3",{id:"user-content-force-confirmation"},"Force Confirmation"),Object(i.b)("p",null,"The Conflux consensus algorithm will ",Object(i.b)("em",{parentName:"p"},"force confirm")," a block if 1) there are\n","timer_chain_beta"," consecutive timer chain blocks under the subtree of the\nblock and 2) afterward there are at least ","timer_chain_beta"," timer chain blocks\nfollowing (not required in the subtree though). Force confirmation means that\nnew blocks should follow this block as their ancestor no matter what, ignoring\nsubtree weights. Though extremely unlikely a force confirmed block will have\nlesser weights than its siblings."),Object(i.b)("p",null,"The force confirmation mechanism is to enable checkpoint, which we will\ndescribe later. It is based on the rationale that:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Reverting a ","timer_chain_beta"," length timer chain is impossible.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Therefore force confirmed block will always move along the pivot chain, not\ndrifting between its siblings."))),Object(i.b)("p",null,"We compute the accumulative LCA of the last ","timer_chain_beta"," timer chain\nblocks and store it at the ","timer_chain_accumulative_lca[]"," field. This vector\nis ","timer_chain_beta"," shorter than ","timer_chain[]"," because the force confirm\nneeds at least ","timer_chain_beta"," timer chain block trailing, so their LCAs do\nnot matter. ","check_correct_parent()"," and ","adaptive_weight()"," and their\nsubroutines also respect this force confirm point during their checking.\nSpecifically, any fork before the force confirm height is ignored."),Object(i.b)("p",null,"Note that this force confirm rule is also defined based on ",Object(i.b)("em",{parentName:"p"},"past view")," of each\nblock. With the computed anticone information, ","compute_timer_chain_tuple()"," in\n","ConsensusGraphInner"," computes the timer chain related information of each\nblock under its past view. The results of this function include the difference of\nthe ","timer_chain[]",", ","timer_chain_accumulative_lca[]",", and ","timer_chain_height","\nbetween the ledger view and the past view. We can use the diff and the current\nledger view values to get the past view values."),Object(i.b)("h3",{id:"user-content-era"},"Era"),Object(i.b)("p",null,"In order to implement the checkpoint mechanism, the Conflux consensus algorithm split the\ngraph into eras. Every era contains ","era_epoch_count"," epochs. For example, if the\n","era_epoch_count"," is 50000, then there is a new era every 50000 epochs. The\npivot chain block at the height 50000 will be the genesis of a new era.\nAt the era boundary, there are several differences from the normal case."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A block will enter the total order for execution only if 1) it is under the\nsubtree of the previous era genesis and 2) it is inside the past set of the next era genesis in\nthe pivot chain.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Anticone penalty calculation for the block reward does not go across the era\nboundary."))),Object(i.b)("h3",{id:"user-content-checkpoint"},"Checkpoint"),Object(i.b)("p",null,"Inside ","ConsensusGraphInner",", there are two key height pointers, the current\ncheckpoint era genesis block height (","cur_era_genesis_height",") and the current\nstable era genesis block height (","cur_era_stable_height","). These two height pointers\nwill always point to some era genesis (being a multiple of ","era_epoch_count",").\nInitially, both of these two pointers will point to the true genesis (height\n0)."),Object(i.b)("p",null,"A new era genesis block becomes stable (i.e., ","cur_era_stable_height"," moves) if\nthe block is ",Object(i.b)("em",{parentName:"p"},"force confirmed")," in the current TreeGraph. A stable era genesis\nblock becomes a new checkpoint (i.e., ","cur_era_genesis_height"," moves) if:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The block is ",Object(i.b)("em",{parentName:"p"},"force confirmed in the past view of the stable era genesis block"),". ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the anticone of this block, there is no timer chain block."))),Object(i.b)("p",null,"should_move_stable_height()"," and ","should_form_checkpoint_at()"," in\n","ConsensusNewBlockHandler"," are invoked after every newly inserted block to test\nthe above two conditions. Generally speaking, the stable era genesis block will never be\nreverted off the pivot chain. Any block in the past set of the checkpoint block\nis no longer required for the future computation of the consensus layer.\nTherefore, after a new checkpoint is formed, ","make_checkpoint_at()"," in\n","ConsensusNewBlockHandler"," is called to clean up those blocks that are not in\nthe future set of the new checkpoint."),Object(i.b)("p",null,"Note that the checkpoint mechanism also changes how we handle a new block. For\na new block:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the new block is outside the subtree of the current checkpoint, we only\nneed to insert a stub into our data structure (because a block under the\nsubtree may be indirectly referenced via this stub block). We do not need to\ncare about such a block because it is not going to change the timer chain and it\nis not going to be executed.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the past set of the new block does not contain the stable era genesis block, we\ndo not need to check the partial invalid status of this block. This is because\nthis block will not change the timer chain (recall our assumption that the timer\nchain will not reorg for more than ","timer_chain_beta"," blocks) and future blocks can reference\nthis block directly (since the timer chain difference is already more than ","timer_chain_beta",")."))),Object(i.b)("h3",{id:"user-content-deferred-execution"},"Deferred Execution"),Object(i.b)("p",null,"Because the TreeGraph pivot chain may oscillate temporarily, we defer the\ntransaction execution for ","DEFERRED_STATE_EPOCH_COUNT"," epochs (default 5).\nAfter a pivot chain update, ","activate_block()"," routine will enqueue the\nexecution task of the new pivot chain except for the last five epochs. It calls\n","enqueue_epoch()"," in ","ConsensusExecutor"," to enqueue each task."),Object(i.b)("h3",{id:"user-content-block-reward-calculation"},"Block Reward Calculation"),Object(i.b)("p",null,"Because there is no explicit coinbase transaction in Conflux, all block rewards\nare computed implicitly during the transaction execution. In Conflux, the block\nreward is determined by the base reward and the penalty ratio based on the total weight of\nits anticone blocks divided by its epoch pivot block's target difficulty. This anticone set only\nconsiders blocks appearing no later than the next ","REWARD_EPOCH_COUNT"," epochs.\nSpecifically, if there is a new era then the anticone set will not count across\nthe era boundary as well. ","get_pivot_reward_index()"," in ","ConsensusExecutor","\ncounts this reward anticone threshold.\n","get_reward_execution_info_from_index()"," in ","ConsensusExecutor"," and its\nsubroutines compute this anticone set given the threshold point in the pivot\nchain."),Object(i.b)("h3",{id:"user-content-blaming-mechanism"},"Blaming Mechanism"),Object(i.b)("p",null,"It is infeasible to validate the filled state root of a block because we\nwould need to execute all transactions in a different order in the past view of\nthat block. Instead, we will only ask full nodes to validate the state root\nresults on the current pivot chain. It then fills a blame number to indicate\nhow many levels ancestors from the parent who do not have correct state root.\nWhen this number is greater than zero, the filled deferred state root becomes a\nMerkel H256 vector that contains the corrected state roots of the ancestors\nalong with the correct one. ","get_blame_and_deferred_state_for_generation()"," in\n","ConsensusGraph"," computes the blame information for the block generation.\n","first_trusted_header_starting_from()"," in ","ConsensusGraph"," is a useful helper\nfunction to compute the first trustworthy header based on the subtree blame\ninformation."),Object(i.b)("h2",{id:"user-content-multi-thread-design"},"Multi-Thread Design"),Object(i.b)("p",null,"The consensus layer has one thread dedicated to processing new blocks from the\nsynchronization layer and one thread dedicated to executing transactions. It of\ncourse also has a set of interface APIs that RPC threads and synchronization\nthreads may call."),Object(i.b)("h3",{id:"user-content-consensus-worker"},"Consensus Worker"),Object(i.b)("p",null,"Consensus Worker"," is a thread created by the synchronization layer. During\nthe normal running phase, every new block will be sent to a channel connecting\nthe synchronization thread and the consensus worker thread. The consensus work\nthread consumes each block one by one and invokes ","consensus::on_new_block()","\nto process it. Note that the synchronization layer ensures the new block to be\n",Object(i.b)("em",{parentName:"p"},"header-ready")," when it is delivered to ","Consensus Worker",", i.e., all of its\nancestor/past blocks are already delivered to the consensus layer before itself.\nThis enables the consensus layer to always deal with a well-defined\ndirect acyclic graph without holes."),Object(i.b)("p",null,"One advantage of having a single thread to be dedicated to the consensus\nprotocol is that it simplifies the protocol implementation a lot. Because the\ndetails of the consensus protocol are complicated and the implementation involves\nmany sophisticated data structure manipulations, the single thread design makes\nsure that we do not need to worry about deadlocks or races. Upon the entrance\nof ","consensus::on_new_block()",", the thread acquires the write lock of the inner\nof the consensus struct (i.e., ConsensusGraphInner). During the normal phase,\nthis thread should be the only one modifying the inner struct of the consensus\nlayer."),Object(i.b)("h3",{id:"user-content-consensus-execution-worker"},"Consensus Execution Worker"),Object(i.b)("p",null,"Consensus Execution Worker"," is a thread created at the start of the consensus\nlayer. It is dedicated to transaction execution. There is a channel connecting\n","Consensus Worker"," with ","Consensus Execution Worker",". Once the consensus\nprotocol determines the order of the pivot chain, it will send an ","ExecutionTask","\nfor each epoch in the pivot chain to the channel. These tasks will be picked up\nby the ","Consensus Execution Worker"," thread one by one. The thread loads the\nprevious state before the executed epoch from the storage layer as the input,\nruns all transactions in the executed epoch (see\n","ConsensusExecutor::process_epoch_transactions()","), and produces the result\nstate as the output."),Object(i.b)("p",null,"The rationale of separating the transaction execution from the consensus\nprotocol implementation is for performance. With our ",Object(i.b)("em",{parentName:"p"},"blaming mechanism"),", the\nexecution result state is completely separated from the consensus protocol\nimplementation. The ",Object(i.b)("em",{parentName:"p"},"deferred execution mechanism")," gives us extra room to\npipeline the consensus protocol and the transaction execution. It is therefore\nnot wise to block the ","Consensus Worker"," thread to wait for the execution\nresults from coming back."),Object(i.b)("h2",{id:"user-content-key-assumptions-invariants-and-rules"},"Key Assumptions, Invariants, and Rules"),Object(i.b)("p",null,"If you want to write code to interact with the Conflux consensus layer, it is\nvery important to understand the following assumptions and rules."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The consensus layer assumes that the passed ","BlockDataManager"," is in a\nconsistent state. It means that the ","BlockDataManager"," contains the correct current\ncheckpoint/stable height. Blocks before the checkpoint and the stable height\nare properly checked during previous execution and they are persisted into the\n","BlockDataManager"," properly. The consensus layer ",Object(i.b)("strong",{parentName:"p"},"does not check")," the results\nit fetches from the block data manager. If it is inconsistent, the consensus\nlayer will execute incorrectly or crash!")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Besides the subroutines of ","on_new_block()",", ",Object(i.b)("strong",{parentName:"p"},"no one should hold the write\nlock of the inner struct"),"! Right now the only exception for this rule is\n","assemble_new_block_impl()"," because of computing the adaptive field and this is\nnot good we plan to change it. Acquiring the write lock of the inner struct\nis very likely to cause deadlock given the complexity of the Consensus layer\nand its dependency with many other components. Always try to avoid this!"))))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(n),d=o,p=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(p,s({ref:t},l,{components:n})):a.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);