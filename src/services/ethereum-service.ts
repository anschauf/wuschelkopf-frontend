
// ignore all typescript errors here

import Web3 from 'web3'
import {utils} from 'ethers';

/**
 * Must be set on the environment variables!
 */
const REACT_APP_API_WEBSOCKET = process.env.REACT_APP_API_WEBSOCKET
const REACT_APP_CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS

// Define instance of web3
const web3 = new Web3(window.ethereum)

// Contract.setProvider(REACT_APP_API_WEBSOCKET)
const contractAbi = require("./NFTCollectible.json")
const contract = new web3.eth.Contract(contractAbi.abi, REACT_APP_CONTRACT_ADDRESS)

const noMetaMaskMessage = 'Metamask is not installed in the browser'

/**
 * Connect your wallet from Metamask with your application,
 * return the picket account of the user
 */
export async function connectWallet() {
    return new Promise(async (resolve, reject) => {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
            if(accounts && accounts.length > 0) resolve(accounts[0])
            else reject('Could not get any account from Metamask.')
        } else reject(noMetaMaskMessage)
    })
}

export async function mintNFT(numberToMint: number, address?: string) {
    const fromAddress = address ? address : await connectWallet()

    if(fromAddress) {
        return new Promise(async (resolve, reject) => {
            if(window.ethereum) {
                const txn = await contract.methods.mintNFTs(numberToMint)
                    .send({ from: fromAddress, value: utils.parseEther('0.03')});
                resolve(txn)
            } else reject(noMetaMaskMessage)
        })
    }
}