import { getPrice } from "./ProcessTransaction.js";
import getPrice2 from "./ProcessTrans.js";
import data from "./constants.js";
import data2 from "./constants2.js";
// import { ethers, BigNumber } from "ethers";
// //import * as JSBI from "jsbi";
// import { Token, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
//import { AlphaRouter } from "@uniswap/smart-order-router";
import ERC20ABI from "./abi.js";

function fromReadableAmount(amount, decimals) {
  const extraDigits = Math.pow(10, countDecimals(amount));
  const adjustedAmount = amount * extraDigits;
  return JSBI.divide(
    JSBI.multiply(
      JSBI.BigInt(adjustedAmount),
      JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(decimals))
    ),
    JSBI.BigInt(extraDigits)
  );
}

function countDecimals(x) {
  if (Math.floor(x) === x) {
    return 0;
  }
  return x.toString().split(".")[1].length || 0;
}
export const SwapPrice = async (
  inputAmount,
  slippageAmount,
  deadlineMinutes,
  signerAddress,
  TokenOne1,
  TokenTwo1,
  provider
) => {
  console.log(inputAmount, slippageAmount, signerAddress, provider);
  const InputToken = data2[TokenOne1.name];
  const OutputToken = data2[TokenTwo1.name];
  console.log(InputToken);
  console.log(OutputToken);
  const swap = await getPrice(
    inputAmount,
    slippageAmount,
    Math.floor(Date.now() / 1000 + parseInt(deadlineMinutes) * 60),
    signerAddress,
    InputToken,
    OutputToken,
    provider
  );
  console.log(swap);
  if (swap === undefined) {
    const InputToken2 = data[TokenOne1.name];
    const OutputToken2 = data[TokenTwo1.name];
    const swap2 = await getPrice2(
      inputAmount,
      slippageAmount,
      Math.floor(Date.now() / 1000 + parseInt(deadlineMinutes) * 60),
      signerAddress,
      InputToken2,
      OutputToken2
    );
    console.log(swap2);
    return swap2;
  }
  return swap;

  //   setTransaction(swap[0]);
  //   console.log(swap[0]);
  //   setOutputAmount(swap[1]);
  //   console.log(swap[1]);

  //   setRatio(swap[2]);
  //   console.log(swap[2]);

  //   setLoading(false);
};

export default SwapPrice;
