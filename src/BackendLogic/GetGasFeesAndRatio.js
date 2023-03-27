import data from "./constants";
import { ethers } from "ethers";
const INFURA_URL_POLYGON =
  "https://polygon-mainnet.g.alchemy.com/v2/E99oxEOcJm44pEwe6g7W0tKlkyfJN7RM";
console.log(INFURA_URL_POLYGON);
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_POLYGON);
import getPrice2 from "./ProcessTrans";
export const GetGasFeesAndRation = async (
  inputAmount,
  slippageAmount,
  deadlineMinutes,
  signerAddress,
  TokenOne1,
  TokenTwo1
) => {
  // TokenOneValue,
  //   slippageAmount,
  //   deadlineMinutes,
  //   props.signerAddress,
  //   TokenOne1,
  //   TokenTwo1,
  //   Token1Contract,
  //   Token1Balance
  const InputToken2 = data[TokenOne1.name];
  const OutputToken2 = data[TokenTwo1.name];
  //    inputAmount1,
  //      InputToken,
  //      OutputToken,
  //      InputTokenContract,
  //      Balance,
  //      signer,
  //      transaction;
  const GasInUSDandRatio = await getPrice2(
    inputAmount,
    slippageAmount,
    deadlineMinutes,
    signerAddress,
    InputToken2,
    OutputToken2
  );
  console.log(GasInUSDandRatio[2], GasInUSDandRatio[3]);
  return GasInUSDandRatio;
};
