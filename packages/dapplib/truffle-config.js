require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind proof install basket foster giggle'; 
let testAccounts = [
"0x802c113d7d35f7e76a8eb2abd42ffda229a76513f47e2a1bceccf9480681a106",
"0xae43a423b1825f93e14959686aed0584b2bc7569ed36d5b4a6f75303c3043b74",
"0xf95eb45a7cd92e9678e2901f3f44ffdde5851364ed30746f59d236310e96d415",
"0x20b515c0c121079a9a3a0aeeb6b8cc0cccdb46b44b2c81959d01815e137ba41b",
"0xd5755cf01d0bac05dd6262b8901d799d94fb3494e5596f7f60b5750c3e66583d",
"0x0e86ab601fa1291c6f6aea36cc1eb3ac2aa8e9384071c3a7dde3d42037e1d7e8",
"0xa4579ece0b257606db8c52fe12319cd27a0ba56029a4d9ff47a541e406a1b265",
"0xffb9623593774591736570df5bca9d26f25feaf369bf69b8567424bf09957fd2",
"0xbe208043be007d4c0a011e512ba29bbdf9a14048eebb28bd7323faddd081177d",
"0x30d10f219ad27fff997b46951eda6e208fa735b9029e30fdca1373efb56ebf1e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

