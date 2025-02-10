import { ethers } from "ethers";
import { abi } from "../artifacts/contracts/Counter.sol/Counter.json";

function getEth() {
  // @ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("No ethereum provider found");
  }
  return eth;
}

async function requestAccsee(): Promise<boolean> {
  const eth = getEth();
  // @ts-ignore
  const result = (await window.ethereum.request({ method: "eth_requestAccounts" })) as string[];
  return result && result.length > 0;
}

async function getContract() {
  // @ts-ignore
  if (!(await hasSigner()) && !(await requestAccsee())) {
    console.log("Have something get into trouble");
  }
  // @ts-ignore
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    // [
    //   "function getCount() public view returns (uint256)",
    //   "function count() public",
    // ],
    abi,
    await provider.getSigner());

  return contract;

}

async function init() {
  const contract = await getContract();
  document.getElementById("output").innerText = (0).toString();
  contract.on(contract.filters.CounterInc(), async function ({ args }) {
    document.getElementById("output").innerText = (args[0] | await contract.getCount()).toString();
  });
  document.getElementById("btn").onclick = async () => await contract.count();
}

async function hasSigner(): Promise<boolean> {
  // @ts-ignore
  const metamask = window.ethereum;
  const signers = await (metamask.request({ method: "eth_accounts" }) as Promise<string[]>);
  return signers.length > 0;
}


init();
