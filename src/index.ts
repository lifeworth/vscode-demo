import { ethers } from 'ethers';
import {abi} from '../artifacts/contracts/Counter.sol/Counter.json';
// import {abi} from '../artifacts/contracts/HelloWorld.sol/HelloWorld.json';


declare global {
    interface Window {
        ethereum: any;
    }
}


function getEthereum(): any {
    const ethereum = window.ethereum;
    if (!ethereum) {
        throw new Error('No ethereum object found');
    }
    return ethereum;
}

async function requestAccess() {
    const eth = getEthereum();
    const result = await eth.request({ method: 'eth_requestAccounts' }) as string[];
    return result && result.length > 0;
}


async function hasSigner() {
    const eth = getEthereum();
    const result = await eth.request({ method: 'eth_accounts' }) as string[];
    return result.length;
}

async function getContract() {
    if (!await hasSigner() && !await requestAccess()) {
        throw new Error('No access to ethereum account');
    }
    const provider = new ethers.BrowserProvider(getEthereum());
    const contract = new ethers.Contract(
        process.env.CONTRACT_ADDRESS,
        abi,
        await provider.getSigner()
    );
    contract.on(contract.filters.countChanged(), ({args}) => {
        document.getElementById('msg').innerText =args[0]+args[1];
    });

    return contract;
}

function init() {
    document.getElementById('btn').onclick = handleClick;
}

async function callContractHello() {
    const contract = await getContract();
    await contract.increment();
}





function handleClick(this: GlobalEventHandlers, ev: MouseEvent) {
    callContractHello()
}

init();