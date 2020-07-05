(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),i=(a(0),a(197)),o={},c={id:"conflux-rust/CHANGELOG",title:"CHANGELOG",description:"0.6.0",source:"@site/docs/conflux-rust/CHANGELOG.md",permalink:"/docs/conflux-rust/CHANGELOG",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/CHANGELOG.md",lastUpdatedAt:1592338871},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Improvements",id:"improvements-1",children:[]},{value:"Bug Fixes",id:"bug-fixes-1",children:[]},{value:"Improvements",id:"improvements-2",children:[]},{value:"Bug Fixes",id:"bug-fixes-2",children:[]},{value:"Improvements",id:"improvements-3",children:[]},{value:"EVM Updates",id:"evm-updates",children:[]},{value:"Bug Fixes",id:"bug-fixes-3",children:[]},{value:"Blockchain Core Updates (Not Backward Compatible)",id:"blockchain-core-updates-not-backward-compatible",children:[]},{value:"EVM Updates",id:"evm-updates-1",children:[]},{value:"RPC/CLI Updates",id:"rpccli-updates",children:[]},{value:"Bug Fixes",id:"bug-fixes-4",children:[]},{value:"Improvements",id:"improvements-4",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"060"},"0.6.0"),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix inconsistent logics for TrackTouched.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure all internal account exists at genesis block, otherwise some\nreadonly operation may crash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix incorrect usages of require() in vm operations. In most cases creation of\nbasic account in its absense is undesired, especially when the address is a\ncontract. When a user account is to be created, the address space is checked.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix issue in processing snapshot chunk boundary which caused crash. The bug\nwas caused by a wrong assumption of the uniqueness of the trie proof key."))),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the performance of the consensus layer for unstable TreeGraph scenarios. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Complete the protocol version mechanism for node communications and bump\nthe protocol version to V2. The change is backwards-compatible except for\nmsgid::THROTTLE (0xfe).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add chain_id field into sync protocol and light protocol handshake message\nso that peers can disconnect peers from another Conflux chain, e.g. testnet,\nanother testnet.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Keep network_id the same as chain_id. Setting network_id is only for local\nexperimental purposes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the transaction replacement rule in tx-pool: now a transaction can\nreplace one with same sender and nonce by higher gas-price or by same gas-price\nand larger epoch height.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the nonce to 256 bits from 64 bits")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Introduce nonce based lower bound in the PoW difficulty calculation. This\nwill help to defend against block withholding attack among mining pools in\nfuture. With this change and careful PoW design, a mining pool can withhold\nthe top 128 bits of the nonce as the server nonce and the participants of\nthe pool will not be able to tell whether they mined a block or not.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the stratum protocol to make it more consistent with the convention.\nNow the stratum protocol can correctly work with an external miner.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Separate ",Object(i.b)("inlineCode",{parentName:"p"},"deposit_list")," and ",Object(i.b)("inlineCode",{parentName:"p"},"vote_stake_list")," from ",Object(i.b)("inlineCode",{parentName:"p"},"Account")," and adjust the gas cost for ",Object(i.b)("inlineCode",{parentName:"p"},"withdraw"),", ",Object(i.b)("inlineCode",{parentName:"p"},"deposit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"vote_lock")," internal contract call. Now, the gas cost for there three functions is related with the length of ",Object(i.b)("inlineCode",{parentName:"p"},"deposit_list")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vote_stake_list"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disable transaction index persistence by default. This will reduce the disk usage\nfor miners. If you want to reliably serve transaction-related RPCs, you should\nset ",Object(i.b)("inlineCode",{parentName:"p"},"persist_tx_index=true")," in the configuration file manually.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A new RPC ctx_getBlockRewardInfo to query block reward information inside a\ngiven epoch.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Compute transaction root and receipts root by a simple MPT where the key is\nthe index in big endian bytes representation of fixed length with leading zero\nand the value is the bytes representation of the corresponding data, e.g.\ntransaction hash for transaction root, Receipt rlp for block receipts root.\nThe receipts root is the Merkle root of the simple MPT of block receipts roots.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use raw bytes in blame vec hash calculation instead of rlp because each\nelement of the vec is fixed length H256.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add support for CHAINID, SELFBALANCE, BEGINSUB, JUMPSUB, RETURNSUB opcodes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NUMBER opcode in call_virtual() now returns the correct block number.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"BLOCKHASH opcode now returns the last block hash (i.e., ",Object(i.b)("inlineCode",{parentName:"p"},"blockhash(block.number - 1)"),")\nor zero if not querying the last block hash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disable reentrancy of contract calling through other contracts. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the default value of ",Object(i.b)("inlineCode",{parentName:"p"},"from_epoch")," in RPC ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getLogs"),' from "earliest" to "latest_checkpoint".\nNow if no ',Object(i.b)("inlineCode",{parentName:"p"},"from_epoch")," is specified, it will only return logs after the latest checkpoint."))),Object(i.b)("h1",{id:"050"},"0.5.0"),Object(i.b)("h2",{id:"improvements-1"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add fields in Receipt: gas_fee, gas_sponsored, storage_sponsored. Accumulate gas_used in Receipt, not gas_charged.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Delay block requests when we cannot process them to avoid wasting network bandwidth.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set block gas limit for Genesis block to 30_000_000.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Define gas_used to be transaction gas limit for NotEnoughCash, the same as all other exceptions.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add support for WebSockets in RPC.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"cfx_gasPrice will return a price with at least 1000000000, i.e. 1GDrip.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Move getstatus RPC from test to common, and renamed with cfx_getStatus."))),Object(i.b)("h2",{id:"bug-fixes-1"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix UnexpectedResponse from honest peers that causes peer demotion.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remove some untrue debug assert.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Forbidden CALLCODE and DELEGATECALL to internal contracts.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"RPC now returns the correct rlp size of the block")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix a race condition that may cause optimistic execution to panic.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fill in correct block gas limit value for mining.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix definitions and logics in transaction early execution error checking.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use block_count - 1 in target difficulty calculation because it's the unbiased estimation of exponential distribution parameter (past mining power)."))),Object(i.b)("h2",{id:"improvements-2"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add cfx_getConfirmationRiskByHash RPC to get confirmation risk by block hash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add getTransactionsFromPool debug RPC to collect transactions in pool."))),Object(i.b)("h1",{id:"040"},"0.4.0"),Object(i.b)("h2",{id:"bug-fixes-2"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix a potential crash bug in the transaction pool compoenent")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Stop marking OverlayAccount dirty on read access. This will influnce the state root. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Do not mark OverlayAccount dirty in sub_balance 0 for non-existence account.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add missing transaction verifications for invalid block."))),Object(i.b)("h2",{id:"improvements-3"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the transaction address check at RPC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the test net PoW to use double keccak"))),Object(i.b)("h2",{id:"evm-updates"},"EVM Updates"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Decide the storage owner (who is responsible for storage collateral) at the beginning of the transaction. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Only check the storage limit and balance for storage collateral at the end of EVM execution. "))),Object(i.b)("h1",{id:"032"},"0.3.2"),Object(i.b)("h2",{id:"bug-fixes-3"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix an issue that GetBlockHashesByEpoch containing blocks before checkpoint may cause the node to crash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Quick fix for possible duplicate block inserted into the consensus worker thread."))),Object(i.b)("h1",{id:"030"},"0.3.0"),Object(i.b)("h2",{id:"blockchain-core-updates-not-backward-compatible"},"Blockchain Core Updates (Not Backward Compatible)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changes the address scheme of Conflux. All normal address now start with 0x1.\nAll smart contracts address now start with 0x8. Note that your private key will\nstill work as long as you replace the first character in your hex address with\n",Object(i.b)("inlineCode",{parentName:"p"},"0x1"),". For example, if your address is 0x7b5c..., after this update your\naddress will change to 0x1b5c...")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changes the state Merkle root calculation method. Merkle is calculated based\non constructed raw keccak input byte string instead of serialized rlp; checks if\ncompressed_path starts on the second nibble of a byte; makes sure that with the\nconstructed keccak input string adversary cannot construct a compressed path to\ncreate a path Merkle of the same value as a node Merkle.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each epoch now has a limit of executing 200 blocks. If there are more than\n200 blocks in an epoch. Only the last 200 blocks will be executed. This change\nis designed to battle DoS attacks about hiding and generating a lot of blocks\nsuddenly.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add storage_root support in Conflux MPT. Define storage root as the Merkle\nroot computed on the account's storage subtree root node, ignoring the\ncompressed path; 2) force the storage root node to existing by setting a\nStorageLayout value at the storage node. "))),Object(i.b)("p",null,"You need to use new SDK tools to connect with the main chain, otherwise your\ntransaction will be rejected as invalid. "),Object(i.b)("h2",{id:"evm-updates-1"},"EVM Updates"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change the gas used in SSTORE operation to 5000 gas, no matter the zero-ness\nis changed or not. And we no longer refund gas in releasing storage entry. ")),Object(i.b)("h2",{id:"rpccli-updates"},"RPC/CLI Updates"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the CLI interface subcommand from ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," to ",Object(i.b)("inlineCode",{parentName:"p"},"local"),". Its\nfunctionality remains the same.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a RPC cfx_getSkippedBlocksByEpoch to query skipped blocks of an epoch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a corresponding CLI interface to query skipped blocks via local RPC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Refactor RPC interface now most RPC takes HEX parameters and returns HEX"))),Object(i.b)("h2",{id:"bug-fixes-4"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix an issue that may cause the P2P layer to not propagate out-of-era blocks properly")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix an issue that Conflux RPC may return incorrect estimate.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix an issue that virtual call RPC may fail if the caller does not have enough balance")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix an issue that failing to send a pending request can make a block not received.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix an issue that not-graph-ready compact blocks are not fully received."))),Object(i.b)("h2",{id:"improvements-4"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make the consensus layer to prioritize meaningful blocks first. It will\nimprove the overall performance in facing of DoS attacks. It will also\nprioritize self-mined blocks as a desirable effect.")))}b.isMDXComponent=!0},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);