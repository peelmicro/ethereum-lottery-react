import Web3 from 'web3'

const web3 = new Web3(window.web3.currentProvider) // We are using the current provider that Metamask has injected in the web page. The reason is because it accesses Rinkeby

export default web3;