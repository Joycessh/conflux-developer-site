(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),p=(r(0),r(203)),s={},c={id:"conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/README",title:"README",description:"parity-snappy",source:"@site/docs/conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/README.md",permalink:"/docs/conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/core/benchmark/storage/parity-snappy/rust-snappy/README.md",lastUpdatedAt:1604347425},o=[{value:"Example",id:"example",children:[]}],i={rightToc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"parity-snappy"},"parity-snappy"),Object(p.b)("p",null,Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://travis-ci.org/paritytech/rust-snappy"}),Object(p.b)("img",Object(n.a)({parentName:"a"},{src:"https://travis-ci.org/paritytech/rust-snappy.svg?branch=master",alt:"Build Status"}))),"\n",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://ci.appveyor.com/project/andresilva/rust-snappy"}),Object(p.b)("img",Object(n.a)({parentName:"a"},{src:"https://ci.appveyor.com/api/projects/status/rr3ipesm4qqwv7y1?svg=true",alt:"Build status"})))),Object(p.b)("p",null,"Rust bindings for the snappy compression library."),Object(p.b)("p",null,"Currently this library uses snappy v1.1.7. The source for snappy is included in the ",Object(p.b)("inlineCode",{parentName:"p"},"parity-snappy-sys")," crate, so\nthere's no need to pre-install snappy, and the library will be statically linked."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"use parity_snappy as snappy;\n\nlet input: Vec<u8> = ...;\nlet compressed = snappy::compress(&input);\nlet decompressed = snappy::decompress(&compressed);\n\nassert_eq!(decompressed == input);\n")),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"use parity_snappy as snappy;\n\nlet input: Vec<u8> = ...;\nlet mut compressed = Vec::with_capacity(snappy::max_compressed_len(input.len()));\nlet mut decompressed = Vec::with_capacity(input.len());\n\nlet len = snappy::compress_into(&input, &mut compressed);\nlet _ = snappy::decompress_into(&compressed[..len], &mut decompressed);\n\nassert_eq!(decompressed == input);\n")))}u.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,b=l["".concat(s,".").concat(m)]||l[m]||y[m]||p;return r?a.a.createElement(b,c(c({ref:t},i),{},{components:r})):a.a.createElement(b,c({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<p;i++)s[i]=r[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);