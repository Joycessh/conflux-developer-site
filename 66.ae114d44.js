(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var c=n(2),a=n(9),r=(n(0),n(202)),o={id:"go_sdk",title:"Golang SDK",custom_edit_url:"https://github.com/Conflux-Chain/go-conflux-sdk/edit/master/api.md",keywords:["conflux","go","sdk"]},l={id:"go-conflux-sdk/go_sdk",title:"Golang SDK",description:"API Reference",source:"@site/docs/go-conflux-sdk/api.md",permalink:"/docs/go-conflux-sdk/go_sdk",editUrl:"https://github.com/Conflux-Chain/go-conflux-sdk/edit/master/api.md",lastUpdatedAt:1594720209,sidebar:"docs",previous:{title:"Javascript SDK",permalink:"/docs/js-conflux-sdk/javascript_sdk"},next:{title:"What Is ConfluxPortal",permalink:"/docs/conflux-portal/docs/en/portal/introduction"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Installation",id:"installation",children:[]},{value:"package sdk",id:"package-sdk",children:[{value:"type AccountManager",id:"type-accountmanager",children:[]},{value:"type Client",id:"type-client",children:[]},{value:"type Contract",id:"type-contract",children:[]},{value:"type ContractDeployResult",id:"type-contractdeployresult",children:[]}]},{value:"package utils",id:"package-utils",children:[]}],i={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"api-reference"},"API Reference"),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"The go-conflux-sdk module is a collection of packages which contain specific functionality for the conflux ecosystem."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The package ",Object(r.b)("inlineCode",{parentName:"li"},"sdk")," is for interacting with conflux chain, account manager and operating smart contracts"),Object(r.b)("li",{parentName:"ul"},"The package ",Object(r.b)("inlineCode",{parentName:"li"},"utils")," contains useful helper functions for Dapp developers.")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"You can get Conflux Golang API directly or use go module as below"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),"go get github.com/Conflux-Chain/go-conflux-sdk\n")),Object(r.b)("p",null,"You can also add the Conflux Golang API into vendor folder."),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),"govendor fetch github.com/Conflux-Chain/go-conflux-sdk\n")),Object(r.b)("p",null,"After that you need to create a client instance with node url and an account manager instance."),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),'url:= "http://testnet-jsonrpc.conflux-chain.org:12537"\nclient, err := sdk.NewClient(url)\nif err != nil {\n    fmt.Println("new client error:", err)\n    return\n}\nam := sdk.NewAccountManager("./keystore")\nclient.SetAccountManager(am)\n')),Object(r.b)("h2",{id:"package-sdk"},"package sdk"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),'import "github.com/Conflux-Chain/go-conflux-sdk"\n')),Object(r.b)("h3",{id:"type-accountmanager"},"type AccountManager"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"type AccountManager struct {\n}\n")),Object(r.b)("p",null,"AccountManager manages Conflux accounts."),Object(r.b)("h4",{id:"func--newaccountmanager"},"func  NewAccountManager"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func NewAccountManager(keydir string) *AccountManager\n")),Object(r.b)("p",null,'NewAccountManager creates an instance of AccountManager based on the keystore\ndirectory "keydir".'),Object(r.b)("h4",{id:"func-accountmanager-create"},"func (*AccountManager) Create"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Create(passphrase string) (types.Address, error)\n")),Object(r.b)("p",null,"Create creates a new account and puts the keystore file into keystore directory"),Object(r.b)("h4",{id:"func-accountmanager-delete"},"func (*AccountManager) Delete"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Delete(address types.Address, passphrase string) error\n")),Object(r.b)("p",null,"Delete deletes the specified account and remove the keystore file from keystore\ndirectory."),Object(r.b)("h4",{id:"func-accountmanager-getdefault"},"func (*AccountManager) GetDefault"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) GetDefault() (*types.Address, error)\n")),Object(r.b)("p",null,"GetDefault return first account in keystore directory"),Object(r.b)("h4",{id:"func-accountmanager-import"},"func (*AccountManager) Import"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Import(keyFile, passphrase, newPassphrase string) (types.Address, error)\n")),Object(r.b)("p",null,"Import imports account from external key file to keystore directory. Returns\nerror if the account already exists."),Object(r.b)("h4",{id:"func-accountmanager-list"},"func (*AccountManager) List"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) List() []types.Address\n")),Object(r.b)("p",null,"List lists all accounts in keystore directory."),Object(r.b)("h4",{id:"func-accountmanager-lock"},"func (*AccountManager) Lock"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Lock(address types.Address) error\n")),Object(r.b)("p",null,"Lock locks the specified account."),Object(r.b)("h4",{id:"func-accountmanager-sign"},"func (*AccountManager) Sign"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Sign(tx types.UnsignedTransaction, passphrase string) (v byte, r, s []byte, err error)\n")),Object(r.b)("p",null,"Sign signs tx by passphrase and returns the signature"),Object(r.b)("h4",{id:"func-accountmanager-signandecodetransactionwithpassphrase"},"func (*AccountManager) SignAndEcodeTransactionWithPassphrase"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) SignAndEcodeTransactionWithPassphrase(tx types.UnsignedTransaction, passphrase string) ([]byte, error)\n")),Object(r.b)("p",null,"SignAndEcodeTransactionWithPassphrase signs tx with given passphrase and return\nits RLP encoded data."),Object(r.b)("h4",{id:"func-accountmanager-signtransaction"},"func (*AccountManager) SignTransaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) SignTransaction(tx types.UnsignedTransaction) ([]byte, error)\n")),Object(r.b)("p",null,"SignTransaction signs tx and returns its RLP encoded data."),Object(r.b)("h4",{id:"func-accountmanager-signtransactionwithpassphrase"},"func (*AccountManager) SignTransactionWithPassphrase"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) SignTransactionWithPassphrase(tx types.UnsignedTransaction, passphrase string) (*types.SignedTransaction, error)\n")),Object(r.b)("p",null,"SignTransactionWithPassphrase signs tx with given passphrase and returns a\ntransction with signature"),Object(r.b)("h4",{id:"func-accountmanager-timedunlock"},"func (*AccountManager) TimedUnlock"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) TimedUnlock(address types.Address, passphrase string, timeout time.Duration) error\n")),Object(r.b)("p",null,"TimedUnlock unlocks the specified account for a period of time."),Object(r.b)("h4",{id:"func-accountmanager-timedunlockdefault"},"func (*AccountManager) TimedUnlockDefault"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) TimedUnlockDefault(passphrase string, timeout time.Duration) error\n")),Object(r.b)("p",null,"TimedUnlockDefault unlocks the specified account for a period of time."),Object(r.b)("h4",{id:"func-accountmanager-unlock"},"func (*AccountManager) Unlock"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Unlock(address types.Address, passphrase string) error\n")),Object(r.b)("p",null,"Unlock unlocks the specified account indefinitely."),Object(r.b)("h4",{id:"func-accountmanager-unlockdefault"},"func (*AccountManager) UnlockDefault"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) UnlockDefault(passphrase string) error\n")),Object(r.b)("p",null,"UnlockDefault unlocks the default account indefinitely."),Object(r.b)("h4",{id:"func-accountmanager-update"},"func (*AccountManager) Update"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (m *AccountManager) Update(address types.Address, passphrase, newPassphrase string) error\n")),Object(r.b)("p",null,"Update updates the passphrase of specified account."),Object(r.b)("h3",{id:"type-client"},"type Client"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"type Client struct {\n}\n")),Object(r.b)("p",null,"Client represents a client to interact with Conflux blockchain."),Object(r.b)("h4",{id:"func--newclient"},"func  NewClient"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func NewClient(nodeURL string) (*Client, error)\n")),Object(r.b)("p",null,"NewClient creates a new instance of Client with specified conflux node url."),Object(r.b)("h4",{id:"func--newclientwithrpcrequester"},"func  NewClientWithRPCRequester"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func NewClientWithRPCRequester(rpcRequester rpcRequester) (*Client, error)\n")),Object(r.b)("p",null,"NewClientWithRPCRequester creates client with specified rpcRequester"),Object(r.b)("h4",{id:"func--newclientwithretry"},"func  NewClientWithRetry"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func NewClientWithRetry(nodeURL string, retryCount int, retryInterval time.Duration) (*Client, error)\n")),Object(r.b)("p",null,"NewClientWithRetry creates a retryable new instance of Client with specified\nconflux node url and retry options."),Object(r.b)("p",null,"the retryInterval will be set to 1 second if pass 0"),Object(r.b)("h4",{id:"func-client-applyunsignedtransactiondefault"},"func (*Client) ApplyUnsignedTransactionDefault"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) ApplyUnsignedTransactionDefault(tx *types.UnsignedTransaction) error\n")),Object(r.b)("p",null,"ApplyUnsignedTransactionDefault set empty fields to value fetched from conflux\nnode."),Object(r.b)("h4",{id:"func-client-batchcallrpc"},"func (*Client) BatchCallRPC"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) BatchCallRPC(b []rpc.BatchElem) error\n")),Object(r.b)("p",null,"BatchCallRPC sends all given requests as a single batch and waits for the server\nto return a response for all of them."),Object(r.b)("p",null,"In contrast to Call, BatchCall only returns I/O errors. Any error specific to a\nrequest is reported through the Error field of the corresponding BatchElem."),Object(r.b)("p",null,"Note that batch calls may not be executed atomically on the server side."),Object(r.b)("h4",{id:"func-client-batchgetblockconfirmationrisk"},"func (*Client) BatchGetBlockConfirmationRisk"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) BatchGetBlockConfirmationRisk(blockhashes []types.Hash) (map[types.Hash]*big.Float, error)\n")),Object(r.b)("p",null,"BatchGetBlockConfirmationRisk acquires confirmation risk informations in bulk by\nblockhashes"),Object(r.b)("h4",{id:"func-client-batchgetblocksummarys"},"func (*Client) BatchGetBlockSummarys"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) BatchGetBlockSummarys(blockhashes []types.Hash) (map[types.Hash]*types.BlockSummary, error)\n")),Object(r.b)("p",null,"BatchGetBlockSummarys requests block summary informations in bulk by blockhashes"),Object(r.b)("h4",{id:"func-client-batchgetrawblockconfirmationrisk"},"func (*Client) BatchGetRawBlockConfirmationRisk"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) BatchGetRawBlockConfirmationRisk(blockhashes []types.Hash) (map[types.Hash]*big.Int, error)\n")),Object(r.b)("p",null,"BatchGetRawBlockConfirmationRisk requests raw confirmation risk informations in\nbulk by blockhashes"),Object(r.b)("h4",{id:"func-client-batchgettxbyhashes"},"func (*Client) BatchGetTxByHashes"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) BatchGetTxByHashes(txhashes []types.Hash) (map[types.Hash]*types.Transaction, error)\n")),Object(r.b)("p",null,"BatchGetTxByHashes requests transaction informations in bulk by txhashes"),Object(r.b)("h4",{id:"func-client-call"},"func (*Client) Call"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) Call(request types.CallRequest, epoch *types.Epoch) (*string, error)\n")),Object(r.b)("p",null,'Call executes a message call transaction "request" at specified epoch, which is\ndirectly executed in the VM of the node, but never mined into the block chain\nand returns the contract execution result.'),Object(r.b)("h4",{id:"func-client-callrpc"},"func (*Client) CallRPC"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) CallRPC(result interface{}, method string, args ...interface{}) error\n")),Object(r.b)("p",null,"CallRPC performs a JSON-RPC call with the given arguments and unmarshals into\nresult if no error occurred."),Object(r.b)("p",null,"The result must be a pointer so that package json can unmarshal into it. You can\nalso pass nil, in which case the result is ignored."),Object(r.b)("h4",{id:"func-client-close"},"func (*Client) Close"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) Close()\n")),Object(r.b)("p",null,"Close closes the client, aborting any in-flight requests."),Object(r.b)("h4",{id:"func-client-createunsignedtransaction"},"func (*Client) CreateUnsignedTransaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) CreateUnsignedTransaction(from types.Address, to types.Address, amount *hexutil.Big, data []byte) (*types.UnsignedTransaction, error)\n")),Object(r.b)("p",null,"CreateUnsignedTransaction creates an unsigned transaction by parameters, and the\nother fields will be set to values fetched from conflux node."),Object(r.b)("h4",{id:"func-client-debug"},"func (*Client) Debug"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) Debug(method string, args ...interface{}) (interface{}, error)\n")),Object(r.b)("p",null,"Debug calls the Conflux debug API."),Object(r.b)("h4",{id:"func-client-deploycontract"},"func (*Client) DeployContract"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) DeployContract(option *types.ContractDeployOption, abiJSON []byte,\n    bytecode []byte, constroctorParams ...interface{}) *ContractDeployResult\n")),Object(r.b)("p",null,"DeployContract deploys a contract by abiJSON, bytecode and consturctor params.\nIt returns a ContractDeployState instance which contains 3 channels for\nnotifying when state changed."),Object(r.b)("h4",{id:"func-client-estimategasandcollateral"},"func (*Client) EstimateGasAndCollateral"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) EstimateGasAndCollateral(request types.CallRequest) (*types.Estimate, error)\n")),Object(r.b)("p",null,'EstimateGasAndCollateral excutes a message call "request" and returns the amount\nof the gas used and storage for collateral'),Object(r.b)("h4",{id:"func-client-getbalance"},"func (*Client) GetBalance"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBalance(address types.Address, epoch ...*types.Epoch) (*big.Int, error)\n")),Object(r.b)("p",null,"GetBalance returns the balance of specified address at epoch."),Object(r.b)("h4",{id:"func-client-getbestblockhash"},"func (*Client) GetBestBlockHash"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBestBlockHash() (types.Hash, error)\n")),Object(r.b)("p",null,"GetBestBlockHash returns the current best block hash."),Object(r.b)("h4",{id:"func-client-getblockbyepoch"},"func (*Client) GetBlockByEpoch"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBlockByEpoch(epoch *types.Epoch) (*types.Block, error)\n")),Object(r.b)("p",null,"GetBlockByEpoch returns the block of specified epoch. If the epoch is invalid,\nreturn the concrete error."),Object(r.b)("h4",{id:"func-client-getblockbyhash"},"func (*Client) GetBlockByHash"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBlockByHash(blockHash types.Hash) (*types.Block, error)\n")),Object(r.b)("p",null,"GetBlockByHash returns the block of specified blockHash If the block is not\nfound, return nil."),Object(r.b)("h4",{id:"func-client-getblockconfirmationrisk"},"func (*Client) GetBlockConfirmationRisk"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBlockConfirmationRisk(blockHash types.Hash) (*big.Float, error)\n")),Object(r.b)("p",null,"GetBlockConfirmationRisk indicates the probability that the pivot block of the\nepoch where the block is located becomes a normal block."),Object(r.b)("p",null,"it's (raw confirmation risk coefficient/ (2^256-1))"),Object(r.b)("h4",{id:"func-client-getblocksummarybyepoch"},"func (*Client) GetBlockSummaryByEpoch"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBlockSummaryByEpoch(epoch *types.Epoch) (*types.BlockSummary, error)\n")),Object(r.b)("p",null,"GetBlockSummaryByEpoch returns the block summary of specified epoch. If the\nepoch is invalid, return the concrete error."),Object(r.b)("h4",{id:"func-client-getblocksummarybyhash"},"func (*Client) GetBlockSummaryByHash"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBlockSummaryByHash(blockHash types.Hash) (*types.BlockSummary, error)\n")),Object(r.b)("p",null,"GetBlockSummaryByHash returns the block summary of specified blockHash If the\nblock is not found, return nil."),Object(r.b)("h4",{id:"func-client-getblocksbyepoch"},"func (*Client) GetBlocksByEpoch"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetBlocksByEpoch(epoch *types.Epoch) ([]types.Hash, error)\n")),Object(r.b)("p",null,"GetBlocksByEpoch returns the blocks hash in the specified epoch."),Object(r.b)("h4",{id:"func-client-getcode"},"func (*Client) GetCode"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetCode(address types.Address, epoch ...*types.Epoch) (string, error)\n")),Object(r.b)("p",null,"GetCode returns the bytecode in HEX format of specified address at epoch."),Object(r.b)("h4",{id:"func-client-getcontract"},"func (*Client) GetContract"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetContract(abiJSON []byte, deployedAt *types.Address) (*Contract, error)\n")),Object(r.b)("p",null,"GetContract creates a contract instance according to abi json and it's deployed\naddress"),Object(r.b)("h4",{id:"func-client-getepochnumber"},"func (*Client) GetEpochNumber"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetEpochNumber(epoch ...*types.Epoch) (*big.Int, error)\n")),Object(r.b)("p",null,"GetEpochNumber returns the highest or specified epoch number."),Object(r.b)("h4",{id:"func-client-getgasprice"},"func (*Client) GetGasPrice"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetGasPrice() (*big.Int, error)\n")),Object(r.b)("p",null,"GetGasPrice returns the recent mean gas price."),Object(r.b)("h4",{id:"func-client-getlogs"},"func (*Client) GetLogs"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetLogs(filter types.LogFilter) ([]types.Log, error)\n")),Object(r.b)("p",null,"GetLogs returns logs that matching the specified filter."),Object(r.b)("h4",{id:"func-client-getnextnonce"},"func (*Client) GetNextNonce"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetNextNonce(address types.Address, epoch *types.Epoch) (*big.Int, error)\n")),Object(r.b)("p",null,"GetNextNonce returns the next transaction nonce of address"),Object(r.b)("h4",{id:"func-client-getnodeurl"},"func (*Client) GetNodeURL"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetNodeURL() string\n")),Object(r.b)("p",null,"GetNodeURL returns node url"),Object(r.b)("h4",{id:"func-client-getrawblockconfirmationrisk"},"func (*Client) GetRawBlockConfirmationRisk"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetRawBlockConfirmationRisk(blockhash types.Hash) (*big.Int, error)\n")),Object(r.b)("p",null,"GetRawBlockConfirmationRisk indicates the risk coefficient that the pivot block\nof the epoch where the block is located becomes a normal block."),Object(r.b)("h4",{id:"func-client-getstatus"},"func (*Client) GetStatus"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetStatus() (*types.Status, error)\n")),Object(r.b)("p",null,"GetStatus returns chainID of connecting conflux node"),Object(r.b)("h4",{id:"func-client-gettransactionbyhash"},"func (*Client) GetTransactionByHash"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetTransactionByHash(txHash types.Hash) (*types.Transaction, error)\n")),Object(r.b)("p",null,"GetTransactionByHash returns transaction for the specified txHash. If the\ntransaction is not found, return nil."),Object(r.b)("h4",{id:"func-client-gettransactionreceipt"},"func (*Client) GetTransactionReceipt"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) GetTransactionReceipt(txHash types.Hash) (*types.TransactionReceipt, error)\n")),Object(r.b)("p",null,"GetTransactionReceipt returns the receipt of specified transaction hash. If no\nreceipt is found, return nil."),Object(r.b)("h4",{id:"func-client-sendrawtransaction"},"func (*Client) SendRawTransaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) SendRawTransaction(rawData []byte) (types.Hash, error)\n")),Object(r.b)("p",null,"SendRawTransaction sends signed transaction and returns its hash."),Object(r.b)("h4",{id:"func-client-sendtransaction"},"func (*Client) SendTransaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) SendTransaction(tx *types.UnsignedTransaction) (types.Hash, error)\n")),Object(r.b)("p",null,"SendTransaction signs and sends transaction to conflux node and returns the\ntransaction hash."),Object(r.b)("h4",{id:"func-client-setaccountmanager"},"func (*Client) SetAccountManager"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) SetAccountManager(accountManager AccountManagerOperator)\n")),Object(r.b)("p",null,"SetAccountManager sets account manager for sign transaction"),Object(r.b)("h4",{id:"func-client-signencodedtransactionandsend"},"func (*Client) SignEncodedTransactionAndSend"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (client *Client) SignEncodedTransactionAndSend(encodedTx []byte, v byte, r, s []byte) (*types.Transaction, error)\n")),Object(r.b)("p",null,'SignEncodedTransactionAndSend signs RLP encoded transaction "encodedTx" by\nsignature "r,s,v" and sends it to node, and returns responsed transaction.'),Object(r.b)("h3",{id:"type-contract"},"type Contract"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"type Contract struct {\n    ABI     abi.ABI\n    Client  ClientOperator\n    Address *types.Address\n}\n")),Object(r.b)("p",null,"Contract represents a smart contract. You can conveniently create contract by\nClient.GetContract or Client.DeployContract."),Object(r.b)("h4",{id:"func--newcontract"},"func  NewContract"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func NewContract(abiJSON []byte, client ClientOperator, address *types.Address) (*Contract, error)\n")),Object(r.b)("p",null,"NewContract creates contract by abi and deployed address"),Object(r.b)("h4",{id:"func-contract-call"},"func (*Contract) Call"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (contract *Contract) Call(option *types.ContractMethodCallOption, resultPtr interface{}, method string, args ...interface{}) error\n")),Object(r.b)("p",null,'Call calls to the contract method with args and fills the excuted result to the\n"resultPtr".'),Object(r.b)("p",null,"the resultPtr should be a pointer of the method output struct type."),Object(r.b)("p",null,"please refer\n",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md"}),"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md")," to get the\nmappings of solidity types to go types"),Object(r.b)("h4",{id:"func-contract-decodeevent"},"func (*Contract) DecodeEvent"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (contract *Contract) DecodeEvent(out interface{}, event string, log types.LogEntry) error\n")),Object(r.b)("p",null,"DecodeEvent unpacks a retrieved log into the provided output structure."),Object(r.b)("p",null,"please refer\n",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md"}),"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md")," to get the\nmappings of solidity types to go types"),Object(r.b)("h4",{id:"func-contract-getdata"},"func (*Contract) GetData"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (contract *Contract) GetData(method string, args ...interface{}) ([]byte, error)\n")),Object(r.b)("p",null,"GetData packs the given method name to conform the ABI of the contract. Method\ncall's data will consist of method_id, args0, arg1, ... argN. Method id consists\nof 4 bytes and arguments are all 32 bytes. Method ids are created from the first\n4 bytes of the hash of the methods string signature. (signature =\nbaz(uint32,string32))"),Object(r.b)("p",null,"please refer\n",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md"}),"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md")," to get the\nmappings of solidity types to go types"),Object(r.b)("h4",{id:"func-contract-sendtransaction"},"func (*Contract) SendTransaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func (contract *Contract) SendTransaction(option *types.ContractMethodSendOption, method string, args ...interface{}) (*types.Hash, error)\n")),Object(r.b)("p",null,"SendTransaction sends a transaction to the contract method with args and returns\nits transaction hash"),Object(r.b)("p",null,"please refer\n",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md"}),"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/README.md")," to get the\nmappings of solidity types to go types"),Object(r.b)("h3",{id:"type-contractdeployresult"},"type ContractDeployResult"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"type ContractDeployResult struct {\n    //DoneChannel channel for notifying when contract deployed done\n    DoneChannel      <-chan struct{}\n    TransactionHash  *types.Hash\n    Error            error\n    DeployedContract *Contract\n}\n")),Object(r.b)("p",null,"ContractDeployResult for state change notification when deploying contract"),Object(r.b)("h2",{id:"package-utils"},"package utils"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),'import "github.com/Conflux-Chain/go-conflux-sdk/utils"\n')),Object(r.b)("h4",{id:"func--calcblockconfirmationrisk"},"func  CalcBlockConfirmationRisk"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func CalcBlockConfirmationRisk(rawConfirmationRisk *big.Int) *big.Float\n")),Object(r.b)("p",null,"CalcBlockConfirmationRisk calculates block revert rate"),Object(r.b)("h4",{id:"func--keccak256"},"func  Keccak256"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func Keccak256(hexStr string) (string, error)\n")),Object(r.b)("p",null,"Keccak256 hashes hex string by keccak256 and returns it's hash value"),Object(r.b)("h4",{id:"func--privatekeytopublickey"},"func  PrivateKeyToPublicKey"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func PrivateKeyToPublicKey(privateKey string) string\n")),Object(r.b)("p",null,"PrivateKeyToPublicKey calculates public key from private key"),Object(r.b)("h4",{id:"func--publickeytoaddress"},"func  PublicKeyToAddress"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func PublicKeyToAddress(publicKey string) types.Address\n")),Object(r.b)("p",null,"PublicKeyToAddress generate address from public key"),Object(r.b)("p",null,"Account address in conflux starts with '0x1'"),Object(r.b)("h4",{id:"func--tocfxgeneraladdress"},"func  ToCfxGeneralAddress"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-go"}),"func ToCfxGeneralAddress(address common.Address) types.Address\n")),Object(r.b)("p",null,"ToCfxGeneralAddress converts a normal address to conflux customerd general\naddress whose hex string starts with '0x1'"))}b.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var c=n(0),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=c,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return n?a.a.createElement(g,l(l({ref:t},i),{},{components:n})):a.a.createElement(g,l({ref:t},i))}));function g(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var i=2;i<r;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);