(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(181)),i={},c={id:"conflux-portal/03_API_Reference/06_Signing_Data/03_Sign_Typed_Data_v1",title:"03_Sign_Typed_Data_v1",description:"# Sign Typed Data v1",source:"@site/docs/conflux-portal/03_API_Reference/06_Signing_Data/03_Sign_Typed_Data_v1.md",permalink:"/docs/conflux-portal/03_API_Reference/06_Signing_Data/03_Sign_Typed_Data_v1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-portal/03_API_Reference/06_Signing_Data/03_Sign_Typed_Data_v1.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1584424037},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"sign-typed-data-v1"},"Sign Typed Data v1"),Object(o.b)("p",null,"This early version of the spec lacked some later security improvements, and should generally be neglected in favor of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./Sign_Typed_Data_v3"}),"signTypedData_v3"),"."),Object(o.b)("p",null,"Also known as ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData"),", originally premiered October 2017 in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"}),"this blog post"),", this method was the original state-channel-centric signing method."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData")," familiy has a few major design considerations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cheap to verify on chain"),Object(o.b)("li",{parentName:"ul"},"Still somewhat human readable"),Object(o.b)("li",{parentName:"ul"},"Hard to phish signatures")),Object(o.b)("p",null,"If on-chain verifiability cost is a high priority for you, you might want to consider it."))}u.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);