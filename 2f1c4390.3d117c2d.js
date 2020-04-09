(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(189)),i={id:"best_practices",title:"Best Practices",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Best_Practices.md"},s={id:"conflux-portal/docs/en/portal/best_practices",title:"Best Practices",description:"## Registering Your Contract's Method Names",source:"@site/docs/conflux-portal/docs/en/portal/Best_Practices.md",permalink:"/docs/conflux-portal/docs/en/portal/best_practices",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Best_Practices.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1585033639},c=[{value:"Registering Your Contract&#39;s Method Names",id:"registering-your-contracts-method-names",children:[{value:"Verify",id:"verify",children:[]},{value:"Alternate steps using remix.ethereum.org:",id:"alternate-steps-using-remixethereumorg",children:[]},{value:"Additional Info",id:"additional-info",children:[]}]},{value:"Registering Tokens with Users",id:"registering-tokens-with-users",children:[{value:"Code-free Example",id:"code-free-example",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Default Token List",id:"default-token-list",children:[]},{value:"Defining Your App&#39;s Icon",id:"defining-your-apps-icon",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"registering-your-contracts-method-names"},"Registering Your Contract's Method Names"),Object(o.b)("p",null,"Conflux Portal uses the parity on-chain registry of function signatures to\ndisplay method names on the confirm screen. For many common method names, like\ntoken methods, this allows Conflux Portal to successfully look up the method\nnames by their ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"}),"method\nsignature"),"."),Object(o.b)("p",null,"However, sometimes you're using a method that is not in that on-chain registry,\nand Conflux Portal will simply display ",Object(o.b)("inlineCode",{parentName:"p"},"Unknown Function")," to the user.  "),Object(o.b)("p",null,"To add your contract's function names to this registry so it shows in the\nConflux Portal interface, follow the below steps. "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We (conflux) don't support below features right now.")," "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract"}),"mainnet parity signature registration contract on\netherscan")," ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Connect Conflux Portal")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use etherscan's write contract feature to input the string value (without\nquotes or spaces) to the register function "),Object(o.b)("p",{parentName:"li"},"for example:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"getOwners()")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Press write")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Approve the transaction through Conflux Portal (you only pay gas)"))),Object(o.b)("h3",{id:"verify"},"Verify"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"web3.sha3('getOwners()') =>\n0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821")),Object(o.b)("p",null,"take the first 10 characters ",Object(o.b)("inlineCode",{parentName:"p"},"0xa0e67e2b")," and input into ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://jennypollack.github.io/function_signature_registry/"}),"this demo\napp")," that checks\nthe on-chain registry")," (mainnet or rinkeby) "),Object(o.b)("h3",{id:"alternate-steps-using-remixethereumorg"},"Alternate steps using remix.ethereum.org:"),Object(o.b)("p",null,"Paste the contract code from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/"}),"bokky's blog\npost"),"\ninto ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"remix.ethereum.org"}),"remix")," "),Object(o.b)("p",null,"Set the correct compiler version based on the contract."),Object(o.b)("p",null,"Use remix's write functionality to add to the registry."),Object(o.b)("p",null,"You can look at the FUNCTIONHASHES section on remix.conflux.org by loading the\nsignature registry contract, press the Details button on the compile tab. "),Object(o.b)("h3",{id:"additional-info"},"Additional Info"),Object(o.b)("p",null,"You can also use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4"}),"signature\nregistry"),"\ndeployed on rinkeby but should note that ",Object(o.b)("strong",{parentName:"p"},"Conflux Portal reads from the mainnet\neth-method-registry endpoint, regardless of user's network")," "),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/danfinlay/eth-method-registry"}),"eth-method-registry")," is used\nto lookup methods in Conflux Portal. "),Object(o.b)("p",null,"This ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://conflux.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function"}),"stack\nexchange"),"\nanswer is a good ",Object(o.b)("strong",{parentName:"p"},"tldr"),". "),Object(o.b)("h2",{id:"registering-tokens-with-users"},"Registering Tokens with Users"),Object(o.b)("p",null,"When a user opens their Conflux Portal, they are shown a variety of assets,\nincluding tokens. By default, Conflux Portal auto-detects some major popular\ntokens and auto-displays them, but for most tokens, the user will need to add\nthe token themselves. "),Object(o.b)("p",null,"While this is possible using our UI with the ",Object(o.b)("inlineCode",{parentName:"p"},"Add Token")," button, that process\ncan be cumbersome, and involves the user interacting with contract addresses,\nand is very error prone. "),Object(o.b)("p",null,"You can greatly improve the security and experience of users adding your token\nto their Conflux Portal by taking advantage of the ",Object(o.b)("inlineCode",{parentName:"p"},"wallet_watchAsset")," API as\ndefined in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md"}),"EIP\n747"),". "),Object(o.b)("h3",{id:"code-free-example"},"Code-free Example"),Object(o.b)("p",null,"Here are a couple live web applications that let you enter your token details,\nand then share them with a simple web link: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://vittominacori.github.io/watch-token/create.html"}),"Watch Token")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://metamask.github.io/Add-Token/#edit"}),"Add Token App"))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"If you'd like to integrate suggesting a token into your own web app, you can\nfollow this code snippet to implement it: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const tokenAddress = \'0xd00981105e61274c8a5cd5a88fe7e037d935b513\'\nconst tokenSymbol = \'TUT\'\nconst tokenDecimals = 18\nconst tokenImage = \'http://placekitten.com/200/300\'\n\nconflux.sendAsync({\n    method: \'wallet_watchAsset\',\n    params: {\n      "type":"ERC20",\n      "options":{\n        "address": tokenAddress,\n        "symbol": tokenSymbol,\n        "decimals": tokenDecimals,\n        "image": tokenImage,\n      },\n    },\n    id: Math.round(Math.random() * 100000),\n}, (err, added) => {\n\n  if (added) {\n    console.log(\'Thanks for your interest!\')\n  } else {\n    console.log(\'Your loss!\')\n  }\n\n})\n')),Object(o.b)("h2",{id:"default-token-list"},"Default Token List"),Object(o.b)("p",null,"If you're a major and popular token, you may qualify to be listed in our\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yqrashawn/cfx-contract-metadata"}),"cfx-contract-metadata"),"\nregistry. This is a centralized solution and takes a larger toll on our\ndevelopment team, so we prefer to avoid the politics of picking and choosing\ntokens that get auto-detected in users' accounts, so please see if the EIP-747\nmethod above can suit your needs before submitting a new token there for\ninclusion. "),Object(o.b)("p",null,"If you have a user on your site, asking them to click once to add a token is a\nsmall burden on them, and allows you to leverage the trusting relationship you\nalready have with your user instead of our central repository. "),Object(o.b)("h2",{id:"defining-your-apps-icon"},"Defining Your App's Icon"),Object(o.b)("p",null,"When your site makes a login request to a Confluxi Portal user, Confluxi Portal may\nrender a modal that display's your site icon. "),Object(o.b)("p",null,"We retrieve this icon using the HTML selector ",Object(o.b)("inlineCode",{parentName:"p"},'head > link[rel="shortcut\nicon"]'),", so to customize this icon for your site, just make sure to follow the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Favicon"}),"favicon standard"),", and make sure to have\na ",Object(o.b)("inlineCode",{parentName:"p"},"link")," tag within your site's ",Object(o.b)("inlineCode",{parentName:"p"},"head")," with ",Object(o.b)("inlineCode",{parentName:"p"},'rel = "shortcut icon"'),", like this. "),Object(o.b)("p",null,"The tag's ",Object(o.b)("inlineCode",{parentName:"p"},"href")," attribute will be used for assigning the site icon."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  <link rel="shortcut icon" href="https://your-site.com/your-icon.png">\n</head>\n')))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,s({ref:t},l,{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);