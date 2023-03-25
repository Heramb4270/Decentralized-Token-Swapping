import data2 from "./constants2";
import ERC20ABI from "./abi";
import { ethers } from "ethers";
const INFURA_URL_POLYGON =
  "https://polygon-mainnet.g.alchemy.com/v2/E99oxEOcJm44pEwe6g7W0tKlkyfJN7RM";
console.log(INFURA_URL_POLYGON);
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_POLYGON);

export const getTokenContract = (Token1) => {
  const address = data2[Token1.name];
  return new ethers.Contract(address, ERC20ABI, provider);
};
