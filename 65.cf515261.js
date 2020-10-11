(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(9),r=(n(0),n(202)),c={id:"internal_contract",title:"Internal Contract",custom_edit_url:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",keywords:["conflux","contract"]},i={id:"conflux-rust/internal_contract/internal_contract",title:"Internal Contract",description:"Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. This document will show you how to use these internal contracts.",source:"@site/docs/conflux-rust/internal_contract/README.md",permalink:"/docs/conflux-rust/internal_contract/internal_contract",editUrl:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",lastUpdatedAt:1601112749,sidebar:"docs",previous:{title:"Run An Independent Chain",permalink:"/docs/conflux-doc/docs/independent_chain"},next:{title:"JSON RPC",permalink:"/docs/conflux-doc/docs/json_rpc"}},s=[{value:"Sponsorship for Usage of Contracts",id:"sponsorship-for-usage-of-contracts",children:[{value:"Sponsorship Update",id:"sponsorship-update",children:[]},{value:"The Interfaces",id:"the-interfaces",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Admin Management",id:"admin-management",children:[{value:"The Interfaces",id:"the-interfaces-1",children:[]},{value:"Examples",id:"examples-1",children:[]}]},{value:"Staking Mechanism",id:"staking-mechanism",children:[{value:"Interest Rate",id:"interest-rate",children:[]},{value:"Staking for Voting Power",id:"staking-for-voting-power",children:[]},{value:"The Interfaces",id:"the-interfaces-2",children:[]},{value:"Examples",id:"examples-2",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. This document will show you how to use these internal contracts."),Object(r.b)("p",null,"The following document will use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk"}),"js-conflux-sdk")," as an example."),Object(r.b)("h2",{id:"sponsorship-for-usage-of-contracts"},"Sponsorship for Usage of Contracts"),Object(r.b)("p",null,"Conflux implements a sponsorship mechanism to subsidize the usage of smart contracts. Thus, a new account with zero balance is able to call smart contracts as long as the execution is sponsored (usually by the operator of Dapps). The built-in SponsorControl contract is introduced to record the sponsorship information of smart contracts."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"SponsorControl")," contract keeps the following information for each user-established contract:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_gas"),": this is the account that provides the subsidy for gas consumption;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_collateral"),": this is the account that provides the subsidy for collateral for storage;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas"),": this is the balance of subsidy available for gas consumption;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral"),": this is the balance of subsidy available for collateral for storage;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_limit_for_gas_fee"),": this is the upper bound for the gas fee subsidy paid for every sponsored transaction;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"whitelist"),": this is the list of normal accounts that are eligible for the subsidy, where a special all-zero address refers to all normal accounts. Only the contract itself has the authority to change this list.")),Object(r.b)("p",null,"There are two resources that can be sponsored: gas consumption and storage collateral."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"For gas consumption"),": If a transaction calls a contract with non-empty ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_gas")," and the sender is in the ",Object(r.b)("inlineCode",{parentName:"li"},"whitelist")," of the contract and the gas fee specified by the transaction is within the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_limit_for_gas_fee"),", the gas consumption of the transaction is paid from the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," of the contract (if it is sufficient) rather than from the sender\u2019s balance, and the execution of the transaction would fail if the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," cannot afford the gas consumption. Otherwise, the sender should pay for the gas consumption."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"For storage collateral"),": If a transaction calls a contract with non-empty ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral")," and the sender is in the ",Object(r.b)("inlineCode",{parentName:"li"},"whitelist")," of the contract,  the collateral for storage incurred in the execution of the transaction is deducted from ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral")," of the contract, and the owner of those modified storage entries is set to the contract address accordingly. Otherwise, the sender should pay for the collateral for storage incurred in the execution.")),Object(r.b)("h3",{id:"sponsorship-update"},"Sponsorship Update"),Object(r.b)("p",null,"Both sponsorship for gas and for collateral can be updated by calling the SponsorControl contract. The current sponsors can call this contract to transfer funds to increase the sponsor balances directly, and the current sponsor for gas is also allowed to increase the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," without transferring new funds. Other normal accounts can replace the current sponsors by calling this contract and providing more funds for sponsorship."),Object(r.b)("p",null,"To replace the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas")," of a contract, the new sponsor should transfer to the contract a fund more than the current ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas")," of the contract and set a new value for ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee"),". The new value of ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," should be no less than the old sponsor\u2019s limit unless the old ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," cannot afford the old limit. Moreover, the transferred fund should be >= 1000 times of the new limit, so that it is sufficient to subsidize at least ",Object(r.b)("inlineCode",{parentName:"p"},"1000")," transactions calling C. If the above conditions are satisfied, the remaining ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas")," will be refunded to the old ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas"),", and then ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," will be updated according to the new sponsor\u2019s\nspecification."),Object(r.b)("p",null,"The replacement of ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral")," is similar except that there is no analog of the limit for gas fee. The new sponsor should transfer to C a fund more than the fund provided by the current sponsor for collateral of the contract. Then the current ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral")," will be fully refunded, i.e. the sum of ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_collateral")," and the total collateral for storage used by the contract, and both collateral sponsorship fields are changed as the new sponsor\u2019s request accordingly. A contract account is also allowed to be a sponsor."),Object(r.b)("h3",{id:"the-interfaces"},"The Interfaces"),Object(r.b)("p",null,"The built-in contract address is ",Object(r.b)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000001"),". The abi for the internal contract could be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/metadata/SponsorWhitelistControl.json"}),"here")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/contracts/SponsorWhitelistControl.sol"}),"here"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set_sponsor_for_gas(address contract, uint upper_bound)"),": If someone wants to sponsor the gas fee for a contract with address ",Object(r.b)("inlineCode",{parentName:"li"},"contract"),", he/she (it can be a contract account) should call this function and in the meantime transfer some tokens to the address ",Object(r.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000001"),". The parameter ",Object(r.b)("inlineCode",{parentName:"li"},"upper_bound")," is the upper bound of the gas fee the sponsor will pay for a single transaction. The number of transferred tokens should be at least 1000 times of the ",Object(r.b)("inlineCode",{parentName:"li"},"upper_bound"),". The sponsor could be replaced if the new sponsor transfers more tokens and sets a larger upper bound. The current sponsor can also call the function to transfer more tokens to sponsor the contract. The ",Object(r.b)("inlineCode",{parentName:"li"},"upper_bound")," can be changed to a smaller one if the current sponsor balance is less than the ",Object(r.b)("inlineCode",{parentName:"li"},"upper_bound"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"set_sponsor_for_collateral(address contract_addr)"),": If someone wants to sponsor the CFS (collateral for storage) for a contract with address ",Object(r.b)("inlineCode",{parentName:"li"},"contract"),", he/she (it can be a contract account) should call this function and in the meantime transfer some tokens to the address ",Object(r.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000001"),". The sponsor could be replaced if the new sponsor transfers more tokens. The current sponsor can also call the function to transfer more tokens to sponsor the contract."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"add_privilege(address[] memory)"),": A contract can call this function to add some normal account address to the whitelist. It means that if the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_gas")," is set, the contract will pay the gas fee for the accounts in the whitelist, and if the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_collateral")," is set, the contract will pay the CFS (collateral for storage) for the accounts in the whitelist. A special address ",Object(r.b)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000")," could be used if the contract wants to add all account to the whitelist."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"remove_privilege(address[] memory)"),": A contract can call this function to remove some normal account address from the whitelist.")),Object(r.b)("p",null,"The transferred value when calling function ",Object(r.b)("inlineCode",{parentName:"p"},"set_sponsor_for_gas")," and ",Object(r.b)("inlineCode",{parentName:"p"},"set_sponsor_for_collateral")," represents the amount of tokens that the sender (new sponsor) is willing to pay. Every contract maintains its ",Object(r.b)("inlineCode",{parentName:"p"},"whitelist")," by calling ",Object(r.b)("inlineCode",{parentName:"p"},"add_privilege")," and ",Object(r.b)("inlineCode",{parentName:"p"},"remove_privilege"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"Suppose you have a simple contract like this."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-solidity"}),'pragma solidity >=0.4.15;\n\nimport "https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/contracts/SponsorWhitelistControl.sol";\n\ncontract CommissionPrivilegeTest {\n    mapping(uint => uint) public ss;\n\n    function add(address account) public payable {\n        SponsorWhitelistControl cpc = SponsorWhitelistControl(0x0888000000000000000000000000000000000001);\n        address[] memory a = new address[](1);\n        a[0] = account;\n        cpc.add_privilege(a);\n    }\n\n    function remove(address account) public payable {\n        SponsorWhitelistControl cpc = SponsorWhitelistControl(0x0888000000000000000000000000000000000001);\n        address[] memory a = new address[](1);\n        a[0] = account;\n        cpc.remove_privilege(a);\n    }\n\n    function foo() public payable {\n    }\n\n    function par_add(uint start, uint end) public payable {\n        for (uint i = start; i < end; i++) {\n            ss[i] = 1;\n        }\n    }\n}\n')),Object(r.b)("p",null,"After deploying the contract and the address is ",Object(r.b)("inlineCode",{parentName:"p"},"contract_addr"),", if someone wants to sponsor the gas consumption, he/she can send a transaction like below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n  defaultGas: 1000000,\n  logger: console,\n});\nconst account = cfx.Account(PRIVATE_KEY); // create account instance\n\nconst sponsor_contract_addr = '0x0888000000000000000000000000000000000001';\nconst sponsor_contract = cfx.Contract({\n  abi: require('./contracts/sponsor.abi.json'),\n  address: sponsor_contract_addr,\n});\nsponsor_contract.set_sponsor_for_gas(contract_addr, your_upper_bound).sendTransaction({\n  from: account,\n  value: your_sponsor_value\n}).confirmed();\n")),Object(r.b)("p",null,"As for sponsor the storage collateral, you can simply replace the function ",Object(r.b)("inlineCode",{parentName:"p"},"set_sponsor_for_gas(contract_addr, your_upper_bound)")," to ",Object(r.b)("inlineCode",{parentName:"p"},"set_sponsor_for_collateral(contract_addr)"),"."),Object(r.b)("p",null,"After that you can maintain the ",Object(r.b)("inlineCode",{parentName:"p"},"whitelist")," for your contract using ",Object(r.b)("inlineCode",{parentName:"p"},"add_privilege")," and ",Object(r.b)("inlineCode",{parentName:"p"},"remove_privilege"),". The special address ",Object(r.b)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," with all zeros means everyone is in the ",Object(r.b)("inlineCode",{parentName:"p"},"whitelist"),". You need to use it carefully."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"you_contract.add(white_list_addr).sendTransaction({\n  from: account,\n})\n\nyou_contract.remove(white_list_addr).sendTransaction({\n  from: account,\n})\n")),Object(r.b)("p",null,"After that the accounts in ",Object(r.b)("inlineCode",{parentName:"p"},"whiltelist")," will pay nothing while calling ",Object(r.b)("inlineCode",{parentName:"p"},"you_contract.foo()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"you_contract.par_add(1, 10)"),"."),Object(r.b)("h2",{id:"admin-management"},"Admin Management"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"AdminControl")," contract is introduced for better maintenance of other smart contracts, especially which are generated tentatively without a proper destruction routine: it records the administrator of every user-established smart contract and handles the destruction on request of corresponding administrators."),Object(r.b)("p",null,"The default administrator of a smart contract is the creator of the contract, i.e. the sender \u03b1 of the transaction that causes the creation of the contract. The current administrator of a smart contract can transfer its authority to another normal account by sending a request to the AdminControl contract. Contract accounts are not allowed to be the administrator of other contracts, since this mechanism is mainly for tentative maintenance. Any long term administration with customized authorization rules should be implemented inside the contract, i.e. as a specific function that handles destruction requests."),Object(r.b)("p",null,"At any time, the administrator ",Object(r.b)("inlineCode",{parentName:"p"},"addr")," of an existing contract has the right to request destruction of the contract by calling AdminControl. However, the request would be rejected if the collateral for storage of contract is not zero, or ",Object(r.b)("inlineCode",{parentName:"p"},"addr")," is not the current administrator of the contract. If ",Object(r.b)("inlineCode",{parentName:"p"},"addr")," is the current administrator of the contract and the collateral for storage of contract is zero, then the destruction request is accepted and\nprocessed as follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"the balance of the contract will be refunded to ",Object(r.b)("inlineCode",{parentName:"li"},"addr"),";"),Object(r.b)("li",{parentName:"ol"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," of the contract will be refunded to ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_gas"),";"),Object(r.b)("li",{parentName:"ol"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral")," of the contract will be refunded to ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_collateral"),";"),Object(r.b)("li",{parentName:"ol"},"the internal state in the contract will be released and the corresponding collateral for storage refunded to owners;"),Object(r.b)("li",{parentName:"ol"},"the contract is deleted from world-state.")),Object(r.b)("h3",{id:"the-interfaces-1"},"The Interfaces"),Object(r.b)("p",null,"The contract address is ",Object(r.b)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000000"),". The abi for the internal contract could be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/metadata/AdminControl.json"}),"here")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/contracts/AdminControl.sol"}),"here"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"set_admin(address contract, address admin)"),": Set the administrator of contract ",Object(r.b)("inlineCode",{parentName:"p"},"contract")," to ",Object(r.b)("inlineCode",{parentName:"p"},"admin"),". The caller should be the administrator of ",Object(r.b)("inlineCode",{parentName:"p"},"contract")," and it should be a normal account. The caller should make sure that ",Object(r.b)("inlineCode",{parentName:"p"},"contract")," should be an address of a contract and ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," should be a normal account address. Otherwise, the call will fail.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"destroy(address contract)"),": Perform a suicide of the contract ",Object(r.b)("inlineCode",{parentName:"p"},"contract"),". The caller should be the administrator of ",Object(r.b)("inlineCode",{parentName:"p"},"contract")," and it should be a normal account. If the collateral for storage of the contract is not zero, the suicide will fail. Otherwise, the ",Object(r.b)("inlineCode",{parentName:"p"},"balance")," of ",Object(r.b)("inlineCode",{parentName:"p"},"contract")," will be refunded to the current administrator, the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas")," will be refunded to ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_collateral")," will be refunded to ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral"),"."))),Object(r.b)("h3",{id:"examples-1"},"Examples"),Object(r.b)("p",null,"Consider you have deployed a contract whose address is ",Object(r.b)("inlineCode",{parentName:"p"},"contract_addr"),". The administrator can call ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl.set_admin(contract_addr, new_admin)")," to change the administrator and call ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl.destroy(contract_addr)")," to kill the contract. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n  defaultGas: 1000000,\n  logger: console,\n});\nconst account = cfx.Account(PRIVATE_KEY); // create account instance\n\nconst admin_contract_addr = '0x0888000000000000000000000000000000000000';\nconst admin_contract = cfx.Contract({\n  abi: require('./contracts/admin.abi.json'),\n  address: admin_contract_addr,\n});\n// to change administrator\nadmin_contract.set_admin(contract_addr, new_admin).sendTransaction({\n  from: account,\n}).confirmed();\n\n// to kill the contract\nadmin_contract.destroy(contract_addr).sendTransaction({\n  from: account,\n}).confirmed();\n")),Object(r.b)("h2",{id:"staking-mechanism"},"Staking Mechanism"),Object(r.b)("p",null,"Conflux introduces the staking mechanism for two reasons: first, staking mechanism provides a better way to charge the occupation of storage space (comparing to \u201cpay once, occupy forever\u201d); and second, this mechanism also helps in defining the voting power in decentralized governance."),Object(r.b)("p",null,"At a high level, Conflux implements a built-in ",Object(r.b)("strong",{parentName:"p"},"Staking")," contract to record the staking information of all accounts. By sending a transaction to this contract, users (both external users and smart contracts) can deposit/withdraw funds, which is also called stakes in the contract. The interest of staked funds is issued at withdrawal, and depends on both the amount and staking period of the fund being withdrawn"),Object(r.b)("h3",{id:"interest-rate"},"Interest Rate"),Object(r.b)("p",null,"The staking interest rate is currently set to 4% per year. Compound interest is implemented in the granularity of blocks."),Object(r.b)("p",null,"When executing a transaction sent by account ",Object(r.b)("inlineCode",{parentName:"p"},"addr")," at block ",Object(r.b)("inlineCode",{parentName:"p"},"B")," to withdraw a fund of value ",Object(r.b)("inlineCode",{parentName:"p"},"v")," deposited at block ",Object(r.b)("inlineCode",{parentName:"p"},"B'"),", the interest is calculated as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"interest issued = v * (4% / 63072000)^T\n")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"T = BlockNo(B)\u2212BlockNo(B')")," is the staking period measured by the number of blocks, and ",Object(r.b)("inlineCode",{parentName:"p"},"63072000")," is the expected number of blocks generated in ",Object(r.b)("inlineCode",{parentName:"p"},"365")," days with the target block time ",Object(r.b)("inlineCode",{parentName:"p"},"0.5")," seconds."),Object(r.b)("h3",{id:"staking-for-voting-power"},"Staking for Voting Power"),Object(r.b)("p",null,"See the details in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://confluxnetwork.org/developer/"}),"Conflux Protocol Specification"),"."),Object(r.b)("h3",{id:"the-interfaces-2"},"The Interfaces"),Object(r.b)("p",null,"The contract address is ",Object(r.b)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000002"),". The abi for the internal contract could be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/metadata/Staking.json"}),"here")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/contracts/Staking.sol"}),"here"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deposit(uint amount)"),": The caller can call this function to deposit some tokens to the Conflux Internal Staking Contract. The current annual interest rate is 4%."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"withdraw(uint amount)"),": The caller can call this function to withdraw some tokens from the Conflux Internal Staking Contract. This will also trigger interest settlement. The staking capital and staking interest will be transferred to the user's balance in time. All the withdrawal applications will be processed on a first-come-first-served basis according to the sequence of staking orders."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vote_lock(uint amount, uint unlock_block_number)"),": This function is related with Voting Rights in Conflux. Staking users can choose the voting amount and locking maturity by locking a certain amount of CFX in a certain maturity from staking. The ",Object(r.b)("inlineCode",{parentName:"li"},"unlock_block_number")," is measured in the number of blocks since genesis block.")),Object(r.b)("h3",{id:"examples-2"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n  defaultGas: 1000000,\n  logger: console,\n});\nconst account = cfx.Account(PRIVATE_KEY); // create account instance\n\nconst staking_contract_addr = '0x0888000000000000000000000000000000000002';\nconst staking_contract = cfx.Contract({\n  abi: require('./contracts/staking.abi.json'),\n  address: staking_contract_addr,\n});\n// deposit some amount of tokens\nstaking_contract.deposit(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// withdraw some amount of tokens\nstaking_contract.withdraw(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// lock some tokens until some block number\nstaking_contract.vote_lock(your_number_of_tokens, your_unlock_block_number).sendTransaction({\n  from: account,\n}).confirmed();\n")))}d.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,h=b["".concat(c,".").concat(u)]||b[u]||p[u]||r;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);