(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(202)),c={},l={id:"conflux-doc/docs/get_started",title:"get_started",description:"# Getting Started",source:"@site/docs/conflux-doc/docs/get_started.md",permalink:"/docs/conflux-doc/docs/get_started",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/get_started.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1586699466},i={};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"user-content-getting-started"},"Getting Started"),Object(a.b)("p",null,"Here we walk through how to quickly setup conflux full node to join the testnet and how to use Conflux wallet to manage your account, transfer Conflux token, and deploy smart contract."),Object(a.b)("h2",{id:"user-content-running-conflux-full-node"},"Running Conflux Full Node"),Object(a.b)("p",null,"First, please build the binary as instructed in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/install#Install"}),"Installation"),"."),Object(a.b)("p",null,"To start Conflux manually, you need to edit the default configuration file ","run/default.toml",":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ","public_address"," according to your public IP. The port should be 32323 by default."),Object(a.b)("li",{parentName:"ul"},"Set ","mining_author"," to the account address to receive mining reward."),Object(a.b)("li",{parentName:"ul"},"Conflux team has maintained some full nodes for the test net, and they have been provided as ","bootnodes",". If you want to use other nodes to bootstrap your new node, you should edit this entry.")),Object(a.b)("p",null,"Then you can run the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ cd run\n$ ../target/release/conflux --config default.toml\n")),Object(a.b)("p",null,"It will start a full node and begin syncing the Conflux testnet blockchain. "),Object(a.b)("p",null,"Note that two new directories (","blockchain_db"," and ","net_config",") will be created in the current working directory ( ","run"," ) to keep the persistent data. Please do not remove them unless data are corrupt or you want to start a fresh new node."),Object(a.b)("p",null,"To restart a node, just run the same command line in the same directory."),Object(a.b)("h2",{id:"user-content-configuring-conflux-full-node"},"Configuring Conflux Full Node"),Object(a.b)("p",null,"Conflux can be configured using either the CLI options or a config file. Should the CLI flags and the config file disagree about a setting, the CLI takes precedence.  "),Object(a.b)("p",null,"The config file follows the format of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML"),". The path of the configuration file can be set with the CLI option ","--config path/to/conflux.toml",". A default configuration file ","default.toml"," with every configuration explained has been provided in the directory ","run",", and you can start customizing your configuration from there."),Object(a.b)("p",null,"You can list all CLI options by running  ","$ ./conflux --help",". The vast majority of CLI options map to a setting in the TOML file, for example ","--public-address 127.0.0.1:32323"," can be set by creating a config file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'public_address="127.0.0.1:32323"\n')),Object(a.b)("p",null,"If you are going to set up a node and let it join the Conflux mainnet(testnet), you need to set the ","public_address",' appropriately. It should be set as the IP address of your node which can be accessed publicly from Internet. If your node is covered under a public gateway, you can get its public address by searching "ip" in ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.baidu.com"}),"Baidu"),"."),Object(a.b)("p",null,"If you want to let your node participate the mining process, you need to enable it by setting ","start_mining",' as "true" and ',"mining_author"," as the account address that receives the mining reward. "),Object(a.b)("h2",{id:"user-content-running-test"},"Running Test"),Object(a.b)("p",null,"We have both unit tests written in Rust and integration tests written in python. After you make some modifications to the code, you can run these tests to see if the system still runs correctly."),Object(a.b)("p",null,"First, you need to install the dependencies as instructed in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/install#install-test-dependencies"}),"Install Test Dependencies"),"."),Object(a.b)("p",null,"Then you can run the tests as follows"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Linux:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  $ ./dev-support/test.sh\n")),Object(a.b)("p",{parentName:"li"},"  This will automatically run the unit tests in our Rust code and the python tests.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Others:"),Object(a.b)("p",{parentName:"li"},"  To run unit tests in Rust:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  $ cargo test --release --all\n")),Object(a.b)("p",{parentName:"li"},"  To run python integration tests:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  $ ./tests/test_all.py\n")))),Object(a.b)("h2",{id:"user-content-using-conflux-web-wallet"},"Using Conflux Web Wallet"),Object(a.b)("p",null,"You can access ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://wallet.confluxscan.io"}),"Conflux web wallet"),' and\ncreate a new wallet by clicking "New Wallet" button that provides you a seed phrase\n(used to restore your wallet if you close it) and a password (used to unlock your wallet if you lock it\nwhen you leave your computer). Once a wallet is created, you can then manage your account addresses,\nsend transactions, and deploy smart contract.'),Object(a.b)("p",null,"In order to issue on-chain operations, you will need Conflux tokens.\nYou can periodically (1 Conflux token per hour) get Conflux tokens from a faucet account.\nA pop-up box will appear to inform you to get the tokens.  "),Object(a.b)("p",null,"For developers to build smart contract, you can use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://remix.ethereum.org"}),"remix"),' to write and compile your\ncontract to generate bytecode which you can then copy-paste to "Contract" page of the wallet\nthat is triggered by action "Contract".'))}u.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,l({ref:t},u,{components:n})):r.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);