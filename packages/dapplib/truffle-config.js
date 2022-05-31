require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strong reflect machine home hunt merry flock soul'; 
let testAccounts = [
"0xc87669414b6ec1c3dfeaa889598062ba74ac65890914094b48c0bc9689444adf",
"0x59bec96f84e8b2ca28fbe0fac5850da98ff7a5c3e447b4a6cab12af50aefbbb0",
"0x8436749100ba952f66e267cded4ce3df9c257e28da8a8cea68f0bca383b3c1af",
"0x9f38c886ac73d7cacc221c011b5034ea2b83c01d74abd17a162bd68f6212310f",
"0x8cdec59a7d0bb0b26721eddde01dfcc8c367d6a99f9771722feb2b4f0a0c4db1",
"0x906dde24f20b87e3cf2817149c5cf7c3b8489f3bd5b4a9d71705a256cd2f6011",
"0x63b1a5ff2285b39328b4e1236909cb1f635186f72111d44ec9d08d353f3fd947",
"0xb0458b285d8331613ece6f5208635951d38381dcb6d76f9c2ee23044c561207b",
"0x36d35eddcbf2146164f211b1c28002e5804c4da9a83c8bd4ecf61c26f2e6b46a",
"0xa7b0e0e13639eed6c34c9331f8d5495d82a7f4e65520c2ec607474ab64c298ea"
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

