(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(202)),i={},c={id:"conflux-rust/changelogs/CHANGELOG-1.0.x",title:"CHANGELOG-1.0.x",description:"1.0.0",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.0.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",lastUpdatedAt:1602240899},l=[{value:"Improvement",id:"improvement",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Incompatible changes",id:"incompatible-changes",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"100"},"1.0.0"),Object(o.b)("h2",{id:"improvement"},"Improvement"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start stratum services automatically if ",Object(o.b)("inlineCode",{parentName:"li"},"mining_author")," is set.\nUse ",Object(o.b)("inlineCode",{parentName:"li"},"mining_type")," to allow start CPU mining or disable mining manually."),Object(o.b)("li",{parentName:"ul"},"block info returned by rpc methods ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption")," add one new field ",Object(o.b)("inlineCode",{parentName:"li"},"gasUsed")," (backward compatible)")),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fix bug where users need to restart node before they can use a newly created account to send transactions."),Object(o.b)("li",{parentName:"ul"},"Fix code() return value for uninitialized contract."),Object(o.b)("li",{parentName:"ul"},"Fix bug in kill_account after which the contract account is revived by simple transaction."),Object(o.b)("li",{parentName:"ul"},"Fix missing StorageKey conversion from bytes of DepositList and VoteList.")),Object(o.b)("h2",{id:"incompatible-changes"},"Incompatible changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CIP-5 Fix corner case in MPT key encoding."),Object(o.b)("li",{parentName:"ul"},"CIP-8 Move all the collateral settlement to the end of execution."),Object(o.b)("li",{parentName:"ul"},"CIP-10 Base mining reward finalization."),Object(o.b)("li",{parentName:"ul"},"CIP-12 Allow non-zero collateral contract to be killed."),Object(o.b)("li",{parentName:"ul"},"CIP-13 Use Big-Endian MPT Keys."),Object(o.b)("li",{parentName:"ul"},"CIP-16 Collect suicide logic at the end of transaction processing"),Object(o.b)("li",{parentName:"ul"},"CIP-27 Remove sponsor whitelist keys at contract deletion."),Object(o.b)("li",{parentName:"ul"},"Set snapshot epoch count to 2000."),Object(o.b)("li",{parentName:"ul"},"Update code collateral calculation to a more reasonable method.")))}s.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);