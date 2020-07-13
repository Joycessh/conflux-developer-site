(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),i=a(9),r=(a(0),a(199)),o={},c={id:"conflux-rust/CHANGELOG",title:"CHANGELOG",description:"0.6.0",source:"@site/docs/conflux-rust/CHANGELOG.md",permalink:"/docs/conflux-rust/CHANGELOG",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/CHANGELOG.md",lastUpdatedAt:1594632782},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Incompatible Changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Improvements",id:"improvements-1",children:[]},{value:"Bug Fixes",id:"bug-fixes-1",children:[]},{value:"Improvements",id:"improvements-2",children:[]},{value:"Bug Fixes",id:"bug-fixes-2",children:[]},{value:"Improvements",id:"improvements-3",children:[]},{value:"EVM Updates",id:"evm-updates",children:[]},{value:"Bug Fixes",id:"bug-fixes-3",children:[]},{value:"Blockchain Core Updates (Not Backward Compatible)",id:"blockchain-core-updates-not-backward-compatible",children:[]},{value:"EVM Updates",id:"evm-updates-1",children:[]},{value:"RPC/CLI Updates",id:"rpccli-updates",children:[]},{value:"Bug Fixes",id:"bug-fixes-4",children:[]},{value:"Improvements",id:"improvements-4",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"060"},"0.6.0"),Object(r.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix inconsistent logics for TrackTouched.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make sure all internal account exists at genesis block, otherwise some\nreadonly operation may crash.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix incorrect usages of require() in vm operations. In most cases creation of\nbasic account in its absense is undesired, especially when the address is a\ncontract. When a user account is to be created, the address space is checked.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix issue in processing snapshot chunk boundary which caused crash. The bug\nwas caused by a wrong assumption of the uniqueness of the trie proof key.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix incorrect receipt in refunding code collateral when contract suicides.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix crash when a contract suicides during creation.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix db error handling for EVM create / call.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Prevent crashes due to unchecked address space."))),Object(r.b)("h2",{id:"incompatible-changes"},"Incompatible Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change StorageValue serialization to reduce space.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Changed COMMISSION_PRIVILEGE_STORAGE_VALUE.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Remove address from Account rlp format, which was included unexpectedly\nbefore.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Changed RewardInfo struct to add author info.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Invalid address in transaction execution will trigger an error. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The SELFDECONSTRUCT operation will fail if refund to invalid address."))),Object(r.b)("h2",{id:"improvements"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Unify all public rpc with hex number, the following fields from RPC will be changed from decimal to hexadecimal:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"BlameInfo.blame"),Object(r.b)("li",{parentName:"ul"},"Block.blame"),Object(r.b)("li",{parentName:"ul"},"CallRequest.storageLimit"),Object(r.b)("li",{parentName:"ul"},"ConsensusGraphBlockState.blockStatus"),Object(r.b)("li",{parentName:"ul"},"EpochNumber::Num"),Object(r.b)("li",{parentName:"ul"},"Receipt.index"),Object(r.b)("li",{parentName:"ul"},"Receipt.epochNumber"),Object(r.b)("li",{parentName:"ul"},"Receipt.outcomeStatus"),Object(r.b)("li",{parentName:"ul"},"Status.pendingTxNumber"),Object(r.b)("li",{parentName:"ul"},"SyncGraphBlockState.timestamp"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Rename local rpc send_transaction with cfx_sendTransaction.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Improve the performance of the consensus layer for unstable TreeGraph scenarios. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Complete the protocol version mechanism for node communications and bump\nthe protocol version to V2. The change is backwards-compatible except for\nmsgid::THROTTLE (0xfe).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add chain_id field into sync protocol and light protocol handshake message\nso that peers can disconnect peers from another Conflux chain, e.g. testnet,\nanother testnet.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Keep network_id the same as chain_id. Setting network_id is only for local\nexperimental purposes.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Improve the transaction replacement rule in tx-pool: now a transaction can\nreplace one with same sender and nonce by higher gas-price or by same gas-price\nand larger epoch height.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change the nonce to 256 bits from 64 bits")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Introduce nonce based lower bound in the PoW difficulty calculation. This\nwill help to defend against block withholding attack among mining pools in\nfuture. With this change and careful PoW design, a mining pool can withhold\nthe top 128 bits of the nonce as the server nonce and the participants of\nthe pool will not be able to tell whether they mined a block or not.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Improve the stratum protocol to make it more consistent with the convention.\nNow the stratum protocol can correctly work with an external miner.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Separate ",Object(r.b)("inlineCode",{parentName:"p"},"deposit_list")," and ",Object(r.b)("inlineCode",{parentName:"p"},"vote_stake_list")," from ",Object(r.b)("inlineCode",{parentName:"p"},"Account")," and adjust the gas cost for ",Object(r.b)("inlineCode",{parentName:"p"},"withdraw"),", ",Object(r.b)("inlineCode",{parentName:"p"},"deposit"),", ",Object(r.b)("inlineCode",{parentName:"p"},"vote_lock")," internal contract call. Now, the gas cost for there three functions is related with the length of ",Object(r.b)("inlineCode",{parentName:"p"},"deposit_list")," or ",Object(r.b)("inlineCode",{parentName:"p"},"vote_stake_list"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Disable transaction index persistence by default. This will reduce the disk usage\nfor miners. If you want to reliably serve transaction-related RPCs, you should\nset ",Object(r.b)("inlineCode",{parentName:"p"},"persist_tx_index=true")," in the configuration file manually.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A new RPC ctx_getBlockRewardInfo to query block reward information inside a\ngiven epoch.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Compute transaction root and receipts root by a simple MPT where the key is\nthe index in big endian bytes representation of fixed length with leading zero\nand the value is the bytes representation of the corresponding data, e.g.\ntransaction hash for transaction root, Receipt rlp for block receipts root.\nThe receipts root is the Merkle root of the simple MPT of block receipts roots.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use raw bytes in blame vec hash calculation instead of rlp because each\nelement of the vec is fixed length H256.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add support for CHAINID, SELFBALANCE, BEGINSUB, JUMPSUB, RETURNSUB opcodes.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"NUMBER opcode in call_virtual() now returns the correct block number.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"BLOCKHASH opcode now returns the last block hash (i.e., ",Object(r.b)("inlineCode",{parentName:"p"},"blockhash(block.number - 1)"),")\nor zero if not querying the last block hash.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Disable reentrancy of contract calling through other contracts. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change the default value of ",Object(r.b)("inlineCode",{parentName:"p"},"from_epoch")," in RPC ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_getLogs"),' from "earliest" to "latest_checkpoint".\nNow if no ',Object(r.b)("inlineCode",{parentName:"p"},"from_epoch")," is specified, it will only return logs after the latest checkpoint.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Improve archive and full node log filtering. Change ",Object(r.b)("inlineCode",{parentName:"p"},"filter.to_epoch")," default to ",Object(r.b)("inlineCode",{parentName:"p"},'"latest_state"'),". Limit ",Object(r.b)("inlineCode",{parentName:"p"},"filter.block_hashes")," to up to 128 items.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change internal contracts address to 0x088800...")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enable overflow-checks for release build, to make sure that underflow is\nimpossible.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Reduce the lock dependency between the transaction pool and the consensus engine to improve the performance.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Transaction pool will not start until the node finishes the catch-up. This\navoids inconsistent transaction pool issues during the catch up.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"New cfx_clientVersion() rpc call to return a string with versions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change CREATE/CREATE2 maximum code size from 24K to 48K"))),Object(r.b)("h1",{id:"050"},"0.5.0"),Object(r.b)("h2",{id:"improvements-1"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add fields in Receipt: gas_fee, gas_sponsored, storage_sponsored. Accumulate gas_used in Receipt, not gas_charged.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Delay block requests when we cannot process them to avoid wasting network bandwidth.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Set block gas limit for Genesis block to 30_000_000.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Define gas_used to be transaction gas limit for NotEnoughCash, the same as all other exceptions.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add support for WebSockets in RPC.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"cfx_gasPrice will return a price with at least 1000000000, i.e. 1GDrip.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Move getstatus RPC from test to common, and renamed with cfx_getStatus."))),Object(r.b)("h2",{id:"bug-fixes-1"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix UnexpectedResponse from honest peers that causes peer demotion.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Remove some untrue debug assert.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Forbidden CALLCODE and DELEGATECALL to internal contracts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"RPC now returns the correct rlp size of the block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix a race condition that may cause optimistic execution to panic.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fill in correct block gas limit value for mining.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix definitions and logics in transaction early execution error checking.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use block_count - 1 in target difficulty calculation because it's the unbiased estimation of exponential distribution parameter (past mining power)."))),Object(r.b)("h2",{id:"improvements-2"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add cfx_getConfirmationRiskByHash RPC to get confirmation risk by block hash.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add getTransactionsFromPool debug RPC to collect transactions in pool."))),Object(r.b)("h1",{id:"040"},"0.4.0"),Object(r.b)("h2",{id:"bug-fixes-2"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix a potential crash bug in the transaction pool compoenent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Stop marking OverlayAccount dirty on read access. This will influnce the state root. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Do not mark OverlayAccount dirty in sub_balance 0 for non-existence account.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add missing transaction verifications for invalid block."))),Object(r.b)("h2",{id:"improvements-3"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Improve the transaction address check at RPC")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change the test net PoW to use double keccak"))),Object(r.b)("h2",{id:"evm-updates"},"EVM Updates"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Decide the storage owner (who is responsible for storage collateral) at the beginning of the transaction. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Only check the storage limit and balance for storage collateral at the end of EVM execution. "))),Object(r.b)("h1",{id:"032"},"0.3.2"),Object(r.b)("h2",{id:"bug-fixes-3"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix an issue that GetBlockHashesByEpoch containing blocks before checkpoint may cause the node to crash.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Quick fix for possible duplicate block inserted into the consensus worker thread."))),Object(r.b)("h1",{id:"030"},"0.3.0"),Object(r.b)("h2",{id:"blockchain-core-updates-not-backward-compatible"},"Blockchain Core Updates (Not Backward Compatible)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Changes the address scheme of Conflux. All normal address now start with 0x1.\nAll smart contracts address now start with 0x8. Note that your private key will\nstill work as long as you replace the first character in your hex address with\n",Object(r.b)("inlineCode",{parentName:"p"},"0x1"),". For example, if your address is 0x7b5c..., after this update your\naddress will change to 0x1b5c...")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Changes the state Merkle root calculation method. Merkle is calculated based\non constructed raw keccak input byte string instead of serialized rlp; checks if\ncompressed_path starts on the second nibble of a byte; makes sure that with the\nconstructed keccak input string adversary cannot construct a compressed path to\ncreate a path Merkle of the same value as a node Merkle.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Each epoch now has a limit of executing 200 blocks. If there are more than\n200 blocks in an epoch. Only the last 200 blocks will be executed. This change\nis designed to battle DoS attacks about hiding and generating a lot of blocks\nsuddenly.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add storage_root support in Conflux MPT. Define storage root as the Merkle\nroot computed on the account's storage subtree root node, ignoring the\ncompressed path; 2) force the storage root node to existing by setting a\nStorageLayout value at the storage node. "))),Object(r.b)("p",null,"You need to use new SDK tools to connect with the main chain, otherwise your\ntransaction will be rejected as invalid. "),Object(r.b)("h2",{id:"evm-updates-1"},"EVM Updates"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Change the gas used in SSTORE operation to 5000 gas, no matter the zero-ness\nis changed or not. And we no longer refund gas in releasing storage entry. ")),Object(r.b)("h2",{id:"rpccli-updates"},"RPC/CLI Updates"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change the CLI interface subcommand from ",Object(r.b)("inlineCode",{parentName:"p"},"debug")," to ",Object(r.b)("inlineCode",{parentName:"p"},"local"),". Its\nfunctionality remains the same.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add a RPC cfx_getSkippedBlocksByEpoch to query skipped blocks of an epoch")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add a corresponding CLI interface to query skipped blocks via local RPC")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Refactor RPC interface now most RPC takes HEX parameters and returns HEX"))),Object(r.b)("h2",{id:"bug-fixes-4"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix an issue that may cause the P2P layer to not propagate out-of-era blocks properly")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix an issue that Conflux RPC may return incorrect estimate.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix an issue that virtual call RPC may fail if the caller does not have enough balance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix an issue that failing to send a pending request can make a block not received.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fix an issue that not-graph-ready compact blocks are not fully received."))),Object(r.b)("h2",{id:"improvements-4"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Make the consensus layer to prioritize meaningful blocks first. It will\nimprove the overall performance in facing of DoS attacks. It will also\nprioritize self-mined blocks as a desirable effect.")))}s.isMDXComponent=!0},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return a?i.a.createElement(d,c(c({ref:t},b),{},{components:a})):i.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);