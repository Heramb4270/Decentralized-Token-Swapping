import data2 from "./constants2";
import ERC20ABI from "./abi";
import { ethers } from "ethers";
const INFURA_URL_POLYGON =
  "https://polygon-mainnet.g.alchemy.com/v2/E99oxEOcJm44pEwe6g7W0tKlkyfJN7RM";
console.log(INFURA_URL_POLYGON);
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_POLYGON);

export const getTokenContract1 = (Token) => {
  const address = data2[Token.name].address;
  console.log(address);
  const ContractOfToken = new ethers.Contract(address, ERC20ABI, provider);
  return ContractOfToken;
};
export const getTokenContract2 = (Token) => {
  const address = data2[Token.name].address;
  console.log(address);
  const ContractOfToken = new ethers.Contract(address, ERC20ABI, provider);
  return ContractOfToken;
};
export const getBalance = async (TokenContract, address, Token) => {
  const balance = await TokenContract.balanceOf(address);
  const decimals = data2[Token.name].decimals;

  const FormatedBalance = ethers.utils.formatUnits(
    balance.toString(),
    decimals
  );
  return FormatedBalance.substring(0, 4);
};
