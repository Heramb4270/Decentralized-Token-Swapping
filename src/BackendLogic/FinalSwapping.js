import data from "./constants";
import { ethers, BigNumber } from "ethers";
import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { CurrencyAmount, TradeType, Percent } from "@uniswap/sdk-core";

import JSBI from "jsbi";
const chainId = 137;
const INFURA_URL =
  "https://polygon-mainnet.g.alchemy.com/v2/E99oxEOcJm44pEwe6g7W0tKlkyfJN7RM";
const Provider = new ethers.providers.JsonRpcProvider(INFURA_URL);
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

export const Swap = async (
  inputAmount1,
  signerAddress,
  InputToken,
  OutputToken,
  InputTokenContract,
  Balance,
  signer,
  receiptx
) => {
  const InputToken1 = data[InputToken.name];
  const OutputToken1 = data[OutputToken.name];
  console.log(inputAmount1, Balance);
  if (Number(inputAmount1) < Number(Balance)) {
    const InputAmout = CurrencyAmount.fromRawAmount(
      InputToken1,
      fromReadableAmount(Number(inputAmount1), 18).toString()
    );
    const router = new AlphaRouter({ chainId: chainId, provider: Provider });

    const route = await router.route(
      InputAmout,
      OutputToken1,
      TradeType.EXACT_INPUT,
      {
        recipient: signerAddress,
        slippageTolerance: new Percent(2, 10),
        deadline: Math.floor(Date.now() / 1000 + parseInt(10) * 60),
        type: SwapType.SWAP_ROUTER_02,
      }
    );
    if (route !== null) {
      const contract0 = await InputTokenContract.connect(signer).approve(
        "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        fromReadableAmount(Number(inputAmount1), 18).toString(),
        {
          gasPrice: BigNumber.from(route.gasPriceWei),
        }
      );

      const transaction = {
        data: route.methodParameters.calldata,
        to: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        value: BigNumber.from(route.methodParameters.value),
        from: signerAddress,
        gasPrice: BigNumber.from(route.gasPriceWei),
        gasLimit: 300000,
      };

      const txHash = await signer.sendTransaction(transaction);
      const res = txHash.wait();
      console.log(res);
      let receipt = null;
      while (receipt === null) {
        try {
          receipt = await Provider.getTransactionReceipt(txHash.hash);

          if (receipt === null) {
            continue;
          }
        } catch (e) {
          console.log(`Receipt error:`, e);
          break;
        }
      }
      receiptx = receipt;
      console.log(receipt.transactionHash);
      //   const response = await provider.send(transaction);

      //   const res3 = await response.wait();
      //   console.log(res3);
      // } else {
    } else {
      throw new Error("Error in Transaction");
    }
  } else {
    throw new Error("Low Balance");
  }
};
