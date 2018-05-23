const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Takes in 2 arguments
// 1) Metamask account Mnemonic and 2) API token of infura of specific etherneum network
// API token is generate by creating an in infura. link : infura.io
const provider = new HDWalletProvider(
    'buzz fitness other letter wagon ecology differ wire museum lesson zoo wrestle',
    'https://rinkeby.infura.io/Lg7hkEvt6hSHGObb1LDk'
)
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: '0x' + bytecode,
            arguments: ['Hi There!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
    
    console.log(inbox.options.address);
}

deploy();