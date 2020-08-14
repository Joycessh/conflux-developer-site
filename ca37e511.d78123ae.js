(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(9),i=(n(0),n(202)),r={},l={id:"conflux-rust/CONTRIBUTING",title:"CONTRIBUTING",description:"How to Contribute",source:"@site/docs/conflux-rust/CONTRIBUTING.md",permalink:"/docs/conflux-rust/CONTRIBUTING",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/CONTRIBUTING.md",lastUpdatedAt:1597398988},s=[{value:"Change Types",id:"change-types",children:[]},{value:"Submit an Issue",id:"submit-an-issue",children:[]},{value:"Submit a Pull Request",id:"submit-a-pull-request",children:[]},{value:"Submit a Conflux Improvement Proposal (CIP)",id:"submit-a-conflux-improvement-proposal-cip",children:[]}],u={rightToc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"how-to-contribute"},"How to Contribute"),Object(i.b)("p",null,"Thank you for considering helping out Conflux. This document specifies rules\nfor proposing changes to Conflux protocol as well as Conflux-Rust\nimplementation. Note that we differentiate Conflux protocol and Conflux-Rust\nimplementation because we envision in the future there will be multiple implementations of\nConflux in different languages."),Object(i.b)("h2",{id:"change-types"},"Change Types"),Object(i.b)("p",null,"Code/protocol changes are classified into the following four different types.\nBased on the type of the proposed change, it will go through slightly different\nprocess."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Backward Compatible Changes:")," The updated client will be fully compatible with older versions. Such changes\nmay introduce additional RPC APIs or other new features. To submit a backward compatible change,\nplease follow this process:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fork the conflux-rust repository and submit a pull request."),Object(i.b)("li",{parentName:"ul"},"If it is a complicated change, please submit an ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues"}),"issue")," to communicate with the core devs first.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Database/RPC Breaking Changes:")," The updated client will be able to co-exist\nwith previous versions, but it updates the interface/behavior of an existing\nRPC or it changes the blockchain database format. This would require\nmodifications for applications depending on these RPCs and/or clean up the\ndatabase to sync from the scratch. To submit a Database/RPC breaking change,\nyou can follow the above process but you have to submit an issue first."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Protocol Breaking Changes:")," These changes do not touch the specification of\nthe Conflux Protocol, but require an update to the P2P network protocol in\nConflux/Conflux-Rust. It is possible to enable the change without a hard-fork but\nit would require special protocol version handling and compatibility testing.\nTo submit a protocol breaking change, please follow this process:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Submit a Conflux Improvement Proposal (",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/CIPs"}),"CIP"),") draft."),Object(i.b)("li",{parentName:"ul"},"Discuss the CIP until it is accepted. Note that in the CIP, it is important\nto specify how the implementation can maintain compatibility with previous\nprotocol versions (via versioning or other techniques). If this cannot be done, the\nchange should be classified and treated as a spec breaking change instead."),Object(i.b)("li",{parentName:"ul"},"Create an issue in Conflux-Rust corresponding to the CIP."),Object(i.b)("li",{parentName:"ul"},"Submit a pull request implementing the CIP."),Object(i.b)("li",{parentName:"ul"},"Audit, test, and/or verify the implementation. The PR will be merged into the\nmaster branch. The core developer team may choose to also merge the PR to other\nbranches for Conflux-Rust client releases."),Object(i.b)("li",{parentName:"ul"},"Once a release enables the change, update the CIP status to final.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Spec Breaking Changes:")," These changes require an update to the specification\nof the Conflux protocol. It would require a hard-fork to enable the change. It\nhas no backward compatibility at all. The general process for making spec\nbreaking changes are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Submit a Conflux Improvement Proposal (CIP) draft. The draft should discuss how\nto enable this change in a hard-fork."),Object(i.b)("li",{parentName:"ul"},"Discuss the CIP until it is accepted."),Object(i.b)("li",{parentName:"ul"},"Create an issue in the Conflux-Protocol repo corresponding to the CIP."),Object(i.b)("li",{parentName:"ul"},"Submit a pull request to the Conflux-Protocol repo to change the spec according to the CIP."),Object(i.b)("li",{parentName:"ul"},"Create an issue in the Conflux-Rust repo corresponding to the CIP."),Object(i.b)("li",{parentName:"ul"},"Submit a pull request implementing the CIP."),Object(i.b)("li",{parentName:"ul"},"Audit, test, and/or verify the implementation. The PR will be merged into the\nmaster branch."),Object(i.b)("li",{parentName:"ul"},"Wait for a hard-fork to enable the change. Change the CIP status to final.")),Object(i.b)("p",null,"Note that now light client modes in Conflux-Rust are considered experimental. All changes that only affecting light clients will be considered as Backward Compatible for now."),Object(i.b)("h2",{id:"submit-an-issue"},"Submit an Issue"),Object(i.b)("p",null,"If you encounter a bug when running Conflux-Rust or you have enhancement suggestions, you are welcome to submit an issue. Note that Conflux-Rust is the full node client for Conflux. If you are experiencing bugs when using wallet, scan, etc., it is most likely a bug in these products rather than Conflux-Rust. Also note that for protocol/spec breaking changes, please create a CIP as well. Here is how issues will be managed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Submit a new issue. For bug reports, please provide steps as detailed as possible about how to ",Object(i.b)("em",{parentName:"li"},"reproduce")," this bug. If you have log files you can provide, that would be very helpful as well. For enhancement suggestions, please explain in details about the ",Object(i.b)("em",{parentName:"li"},"motivation")," of the proposed changes, i.e., how this change will help applications running on top of Conflux-Rust."),Object(i.b)("li",{parentName:"ul"},'One of the core development team members will be assigned to the issue to drive the discussion. After the discussion, the issue would be tagged with the "bug", "enhancement", or "wontchange" label. Issues tagged with the "wontchange" label will be closed within 7 days. For "bug" and "enhancement" issues, it will also receive a label to classify the estimated changes as "spec-breaking", "protocol-breaking", "database/rpc-breaking", and "backward compatible".'),Object(i.b)("li",{parentName:"ul"},"If a PR is already submitted together with the Issue, then the PR will be reviewed by the assigned discussion lead. Once the PR is merged, this issue will be closed."),Object(i.b)("li",{parentName:"ul"},'If the issue needs the core development team to address, it will receive the label "need triage". A new core team member will be assigned as the implementation lead together with a priority label "P0", "P1", "P2", and "P3". Once the implementation PR has been developed and merged, the issue will be closed.')),Object(i.b)("h2",{id:"submit-a-pull-request"},"Submit a Pull Request"),Object(i.b)("p",null,"We welcome your contribution to the Conflux-Rust repository. Here are the basic rules for submitting PRs."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pull requests need to be based on and opened against the ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(i.b)("li",{parentName:"ul"},"Code must be formatted using ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/cargo_fmt.sh"}),"cargo_fmt.sh"),"."),Object(i.b)("li",{parentName:"ul"},"We use reviewable.io as our code review tool for any pull request."),Object(i.b)("li",{parentName:"ul"},"If necessary, update CHANGELOG.md to document your changes.")),Object(i.b)("h2",{id:"submit-a-conflux-improvement-proposal-cip"},"Submit a Conflux Improvement Proposal (CIP)"),Object(i.b)("p",null,"We have a separate repository to manage all CIPs. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/CIPs/blob/master/README.md"}),"README")," in the repo."))}c.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(n),h=a,m=b["".concat(r,".").concat(h)]||b[h]||p[h]||i;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);