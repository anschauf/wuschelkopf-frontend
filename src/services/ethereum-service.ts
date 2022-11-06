
// ignore all typescript errors here

import Web3 from 'web3'
import {utils} from 'ethers';
import {mintingFee} from "../GlobalConstants";
import { Contract } from 'web3-eth-contract';

/**
 * Must be set on the environment variables!
 */
const REACT_APP_CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS

// Define instance of web3
const web3 = new Web3(window.ethereum)

// Contract.setProvider(REACT_APP_API_WEBSOCKET)
const contractAbi = require("./Wuschelkopf.json")


let instance : null|Contract = null;

const getEthereumContract = async () => {
    if (!instance) {
        instance = await getContract()
    }
    return instance
}


const getContract = async () => {
    const result =  await web3.eth.getGasPrice()
    if(result) {
        return new web3.eth.Contract(contractAbi.abi, REACT_APP_CONTRACT_ADDRESS, {
            // gasPrice: '20000000000'
            gasPrice: result.toString() // default gas price in wei, 20 gwei in this case
        })
    } else {
        const defaultGasPrcie = '20000000000'
        console.warn("Fallback gasPrice " + defaultGasPrcie)
        return new web3.eth.Contract(contractAbi.abi, REACT_APP_CONTRACT_ADDRESS, {
            gasPrice: defaultGasPrcie // default gas price in wei, 20 gwei in this case
        })
    }
}

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
                try {
                    const contract = await getEthereumContract()
                    if(contract) {
                        const txn = await contract.methods.mintNFTs(numberToMint)
                            .send({ from: fromAddress, value: utils.parseEther((numberToMint * mintingFee).toString())});
                        resolve(txn)
                    } else reject('No proper contract setup')
                } catch (e) {
                    reject('Rejection')
                }

            } else reject(noMetaMaskMessage)
        })
    }
}