(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),a=(n(0),n(203)),o={},c={id:"conflux-rust/changelogs/CHANGELOG-1.0.x",title:"CHANGELOG-1.0.x",description:"1.0.1",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.0.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",lastUpdatedAt:1604347425},l=[{value:"Light nodes",id:"light-nodes",children:[]},{value:"Improvement",id:"improvement",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Incompatible changes",id:"incompatible-changes",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"101"},"1.0.1"),Object(a.b)("h2",{id:"light-nodes"},"Light nodes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fix the following RPCs on light nodes: ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_epochNumber"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getNextNonce"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_GetBlockByHash"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlocksByEpoch"),"."),Object(a.b)("li",{parentName:"ul"},"Make ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getTransactionReceipt")," return null instead of timeout on light nodes to increase compatibility with js-conflux-sdk."),Object(a.b)("li",{parentName:"ul"},"Fix bug where light nodes disconnect peers if the user queries the genesis block."),Object(a.b)("li",{parentName:"ul"},"Add periodic heartbeat messages to the light protocol.")),Object(a.b)("h1",{id:"100"},"1.0.0"),Object(a.b)("h2",{id:"improvement"},"Improvement"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Start stratum services automatically if ",Object(a.b)("inlineCode",{parentName:"li"},"mining_author")," is set.\nUse ",Object(a.b)("inlineCode",{parentName:"li"},"mining_type")," to allow start CPU mining or disable mining manually."),Object(a.b)("li",{parentName:"ul"},"block info returned by rpc methods ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption")," add one new field ",Object(a.b)("inlineCode",{parentName:"li"},"gasUsed")," (backward compatible)")),Object(a.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fix bug where users need to restart node before they can use a newly created account to send transactions."),Object(a.b)("li",{parentName:"ul"},"Fix code() return value for uninitialized contract."),Object(a.b)("li",{parentName:"ul"},"Fix bug in kill_account after which the contract account is revived by simple transaction."),Object(a.b)("li",{parentName:"ul"},"Fix missing StorageKey conversion from bytes of DepositList and VoteList.")),Object(a.b)("h2",{id:"incompatible-changes"},"Incompatible changes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CIP-5 Fix corner case in MPT key encoding."),Object(a.b)("li",{parentName:"ul"},"CIP-8 Move all the collateral settlement to the end of execution."),Object(a.b)("li",{parentName:"ul"},"CIP-10 Base mining reward finalization."),Object(a.b)("li",{parentName:"ul"},"CIP-12 Allow non-zero collateral contract to be killed."),Object(a.b)("li",{parentName:"ul"},"CIP-13 Use Big-Endian MPT Keys."),Object(a.b)("li",{parentName:"ul"},"CIP-16 Collect suicide logic at the end of transaction processing."),Object(a.b)("li",{parentName:"ul"},"CIP-26 Use timestamp from pivot block as TIMESTAMP (opcode 42)."),Object(a.b)("li",{parentName:"ul"},"CIP-27 Remove sponsor whitelist keys at contract deletion."),Object(a.b)("li",{parentName:"ul"},"Set snapshot epoch count to 2000."),Object(a.b)("li",{parentName:"ul"},"Update code collateral calculation to a more reasonable method.")))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||a;return n?i.a.createElement(d,c(c({ref:t},b),{},{components:n})):i.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);