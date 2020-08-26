(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{179:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return i})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return p}));var a=t(2),r=t(9),o=(t(0),t(202)),c={},i={id:"go-conflux-sdk/README",title:"README",description:"Conflux Golang API",source:"@site/docs/go-conflux-sdk/README.md",permalink:"/docs/go-conflux-sdk/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/go-conflux-sdk/README.md",lastUpdatedAt:1598441202},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Manage Accounts",id:"manage-accounts",children:[]},{value:"Query Conflux Information",id:"query-conflux-information",children:[]},{value:"Send Transaction",id:"send-transaction",children:[]},{value:"Deploy/Call Smart Contract",id:"deploycall-smart-contract",children:[{value:"Contract Example",id:"contract-example",children:[]}]},{value:"Appendix",id:"appendix",children:[{value:"Mapping of solidity types to go types",id:"mapping-of-solidity-types-to-go-types",children:[]}]}],s={rightToc:l};function p(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/LICENSE"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/License-GPL%20v3-blue.svg",alt:"License: GPL v3"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://godoc.org/github.com/Conflux-Chain/go-conflux-sdk"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/Documentation-GoDoc-green.svg",alt:"Documentation"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.org/Conflux-Chain/go-conflux-sdk"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://travis-ci.org/Conflux-Chain/go-conflux-sdk.svg?branch=master",alt:"Build Status"})))),Object(o.b)("h1",{id:"conflux-golang-api"},"Conflux Golang API"),Object(o.b)("p",null,"The Conflux Golang API allows any Golang client to interact with a local or remote Conflux node based on JSON-RPC 2.0 protocol. With Conflux Golang API, user can easily manage accounts, send transactions, deploy smart contracts and query blockchain information."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"go get github.com/Conflux-Chain/go-conflux-sdk\n")),Object(o.b)("p",null,"You can also add the Conflux Golang API into vendor folder."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"govendor fetch github.com/Conflux-Chain/go-conflux-sdk\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/api.md"}),"api document")),Object(o.b)("h2",{id:"manage-accounts"},"Manage Accounts"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"AccountManager")," struct to manage accounts at local machine."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create/Import/Update/Delete an account."),Object(o.b)("li",{parentName:"ul"},"List all accounts."),Object(o.b)("li",{parentName:"ul"},"Unlock/Lock an account."),Object(o.b)("li",{parentName:"ul"},"Sign a transaction.")),Object(o.b)("h2",{id:"query-conflux-information"},"Query Conflux Information"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Client")," struct to query Conflux blockchain information, such as block, epoch, transaction, receipt. Following is an example to query the current epoch number:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n\n    conflux "github.com/Conflux-Chain/go-conflux-sdk"\n)\n\nfunc main() {\n    client, err := conflux.NewClient("http://52.175.52.111:12537")\n    if err != nil {\n        fmt.Println("failed to create client:", err)\n        return\n    }\n    defer client.Close()\n\n    epoch, err := client.GetEpochNumber()\n    if err != nil {\n        fmt.Println("failed to get epoch number:", err)\n        return\n    }\n\n    fmt.Println("Current epoch number:", epoch)\n}\n')),Object(o.b)("h2",{id:"send-transaction"},"Send Transaction"),Object(o.b)("p",null,"To send a transaction, you need to sign the transaction at local machine, and send the signed transaction to local or remote Conflux node."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sign a transaction with unlocked account:"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("inlineCode",{parentName:"p"},"AccountManager.SignTransaction(tx UnsignedTransaction)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sign a transaction with passphrase for locked account:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"AccountManager.SignTransactionWithPassphrase(tx UnsignedTransaction, passphrase string)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Send a unsigned transaction"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("inlineCode",{parentName:"p"},"Client.SendTransaction(tx *types.UnsignedTransaction)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Send a encoded transaction"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("inlineCode",{parentName:"p"},"Client.SendRawTransaction(rawData []byte)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Encode a encoded unsigned transaction with signature and send transaction"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("inlineCode",{parentName:"p"},"Client.SignEncodedTransactionAndSend(encodedTx []byte, v byte, r, s []byte)")))),Object(o.b)("p",null,"To send multiple transactions at a time, you can unlock the account at first, then send multiple transactions without passphrase. To send a single transaction, you can just only send the transaction with passphrase."),Object(o.b)("h2",{id:"deploycall-smart-contract"},"Deploy/Call Smart Contract"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"Client.DeployContract")," to deploy a contract or use ",Object(o.b)("inlineCode",{parentName:"p"},"Client.GetContract")," to get a contract by deployed address. Then you can use the contract instance to operate contract, there are GetData/Call/SendTransaction. Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/api.md"}),"api document")," for detail."),Object(o.b)("h3",{id:"contract-example"},"Contract Example"),Object(o.b)("p",null,"Please reference ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"(https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/example/example_contract)"}),"contract example")," for all source code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "encoding/hex"\n    "fmt"\n    "io/ioutil"\n    "math/big"\n    "time"\n\n    sdk "github.com/Conflux-Chain/go-conflux-sdk"\n    "github.com/Conflux-Chain/go-conflux-sdk/types"\n    "github.com/ethereum/go-ethereum/common"\n)\n\nfunc main() {\n\n    //unlock account\n    am := sdk.NewAccountManager("../keystore")\n    err := am.TimedUnlockDefault("hello", 300*time.Second)\n    if err != nil {\n        panic(err)\n    }\n\n    //init client\n    client, err := sdk.NewClient("http://testnet-jsonrpc.conflux-chain.org:12537")\n    if err != nil {\n        panic(err)\n    }\n    client.SetAccountManager(am)\n\n    //deploy contract\n    fmt.Println("start deploy contract...")\n    abiPath := "./contract/erc20.abi"\n    bytecodePath := "./contract/erc20.bytecode"\n    var contract *sdk.Contract\n\n    abi, err := ioutil.ReadFile(abiPath)\n    if err != nil {\n        panic(err)\n    }\n\n    bytecodeHexStr, err := ioutil.ReadFile(bytecodePath)\n    if err != nil {\n        panic(err)\n    }\n\n    bytecode, err := hex.DecodeString(string(bytecodeHexStr))\n    if err != nil {\n        panic(err)\n    }\n\n    result := client.DeployContract(nil, abi, bytecode, big.NewInt(100000), "biu", uint8(10), "BIU")\n    _ = <-result.DoneChannel\n    if result.Error != nil {\n        panic(result.Error)\n    }\n    contract = result.DeployedContract\n    fmt.Printf("deploy contract by client.DeployContract done\\ncontract address: %+v\\ntxhash:%v\\n\\n", contract.Address, result.TransactionHash)\n\n    time.Sleep(10 * time.Second)\n\n    // or get contract by deployed address\n    // deployedAt := types.Address("0x8d1089f00c40dcc290968b366889e85e67024662")\n    // contract, err := client.GetContract(string(abi), &deployedAt)\n    // if err != nil {\n    //  panic(err)\n    // }\n\n    //get data for send/call contract method\n    user := types.Address("0x19f4bcf113e0b896d9b34294fd3da86b4adf0302")\n    data, err := contract.GetData("balanceOf", user.ToCommonAddress())\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("get data of method balanceOf result: 0x%x\\n\\n", data)\n\n    //call contract method\n    //Note: the output struct type need match method output type of ABI, go type "*big.Int" match abi type "uint256", go type "struct{Balance *big.Int}" match abi tuple type "(balance uint256)"\n    balance := &struct{ Balance *big.Int }{}\n    err = contract.Call(nil, balance, "balanceOf", user.ToCommonAddress())\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("balance of address %v in contract is: %+v\\n\\n", user, balance)\n\n    //send transction for contract method\n    to := types.Address("0x160ebef20c1f739957bf9eecd040bce699cc42c6")\n    txhash, err := contract.SendTransaction(nil, "transfer", to.ToCommonAddress(), big.NewInt(10))\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("transfer %v erc20 token to %v done, tx hash: %v\\n\\n", 10, to, txhash)\n\n    fmt.Println("wait for transaction be packed...")\n    for {\n        time.Sleep(time.Duration(1) * time.Second)\n        tx, err := client.GetTransactionByHash(*txhash)\n        if err != nil {\n            panic(err)\n        }\n        if tx.Status != nil {\n            fmt.Printf("transaction is packed.")\n            break\n        }\n    }\n    time.Sleep(10 * time.Second)\n\n    //get event log and decode it\n    receipt, err := client.GetTransactionReceipt(*txhash)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("get receipt: %+v\\n\\n", receipt)\n\n    // decode Transfer Event\n    var Transfer struct {\n        From  common.Address\n        To    common.Address\n        Value *big.Int\n    }\n\n    err = contract.DecodeEvent(&Transfer, "Transfer", receipt.Logs[0])\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("decoded transfer event: {From: 0x%x, To: 0x%x, Value: %v} ", Transfer.From, Transfer.To, Transfer.Value)\n}\n\n')),Object(o.b)("h2",{id:"appendix"},"Appendix"),Object(o.b)("h3",{id:"mapping-of-solidity-types-to-go-types"},"Mapping of solidity types to go types"),Object(o.b)("p",null,"This is a mapping table for map solidity types to go types when using contract methods GetData/Call/SendTransaction/DecodeEvent\n| solidity types                               | go types                                                                          |\n|----------------------------------------------|-----------------------------------------------------------------------------------|\n| address                                      | common.Address                                                                    |\n| uint8,uint16,uint32,uint64                   | uint8,uint16,uint32,uint64                                                        |\n| uint24,uint40,uint48,uint56,uint72...uint256 | ",Object(o.b)("em",{parentName:"p"},"big.Int                                                                          |\n| int8,int16,int32,int64                       | int8,int16,int32,int64                                                            |\n| int24,int40,int48,int56,int72...int256       | "),"big.Int                                                                          |\n| fixed bytes (bytes1,bytes2...bytes32)        | ","[length]","byte                                                                      |\n| fixed type T array (T","[length]",")               | ","[length]","TG (TG is go type matched with solidty type T)                            |\n| bytes                                        | []byte                                                                            |\n| dynamic type T array T[]                     | []TG ((TG is go type matched with solidty type T))                                |\n| function                                     | ","[24]","byte                                                                          |\n| string                                       | string                                                                            |\n| bool                                         | bool                                                                              |\n| tuple                                        | struct  eg:",'[{"name": "balance","type": "uint256"}]'," => struct {Balance *big.Int} |"))}p.isMDXComponent=!0},202:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=r.a.createContext({}),p=function(n){var e=r.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return r.a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?r.a.createElement(m,i(i({ref:e},s),{},{components:t})):r.a.createElement(m,i({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);