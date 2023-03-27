import { ethers, BigNumber } from "ethers";
import JSBI from "jsbi";
const QuoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
import { abi as QuoterAbi } from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { FeeAmount } from "@uniswap/v3-sdk";
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

///////////////////////////////////
const INFURA_URL_POLYGON =
  "https://polygon-mainnet.g.alchemy.com/v2/E99oxEOcJm44pEwe6g7W0tKlkyfJN7RM";
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_POLYGON);

const sqrtPriceLimitX96 = 0;
const quoter = new ethers.Contract(QuoterAddress, QuoterAbi, provider);
///////////////////////////////////////////////////
export const getPrice = async (
  inputAmount,
  slippageAmount,
  time,
  signerAddress,
  InputToken,
  OutputToken
) => {
  // const chainId = 137;
  // console.log(InputToken);
  // console.log(OutputToken);
  // const router = new AlphaRouter({
  //   chainId: chainId,
  //   provider: provider,
  // });
  const inputAmount1 = fromReadableAmount(
    Number(inputAmount),
    InputToken.decimals
  ).toString();
  console.log(inputAmount1);
  try {
    const AmountOut = await quoter.callStatic.quoteExactInputSingle(
      InputToken.address,
      OutputToken.address,
      FeeAmount.MEDIUM,
      inputAmount1,
      sqrtPriceLimitX96
    );

    const FinalAmount = ethers.utils.formatUnits(
      AmountOut.toString(),
      OutputToken.decimals
    );

    // const route = await router.route(
    //   inputAmount1,
    //   OutputToken,
    //   TradeType.EXACT_INPUT,
    //   {
    //     recipient: "0x1011c406c12bcaa0d5ace89529012e8d44a3e623",
    //     slippageTolerance: new Percent(15, 100), // .5%
    //     deadline: Math.floor(Date.now() / 1000 + 1800),
    //     type: SwapType.SWAP_ROUTER_02,
    //   }

    // );
    // console.log(route);
    //

    // )
    //console.log(` Price for ${inputAmount}  is ${route.quote.toFixed(6)}`);

    if (FinalAmount !== null) {
      // BigNumber.from(ethers.utils.parseUnits("200000", "gwei"));

      // const contract0 = new ethers.Contract(address0, ERC20ABI, web3Provider);
      // inputAmount1;
      // const tx = await contract0
      //   .connect(connectedWallet)
      //   .populateTransaction.approve(
      //     "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      //     fromReadableAmount(0.3, decimals0).toString(),
      //     { from: WALLET_ADDRESS, gasPrice: BigNumber.from(route.gasPriceWei) }
      //   );

      // await connectedWallet.sendTransaction(tx);
      // const transaction = {
      //   data: route.methodParameters.calldata,
      //   to: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      //   value: BigNumber.from(route.methodParameters.value),
      //   from: "0x1011c406c12bcaa0d5ace89529012e8d44a3e623",
      //   gasPrice: BigNumber.from(route.gasPriceWei),
      //   gasLimit: 300000,
      // };

      // const res2 = await connectedWallet.sendTransaction(
      //   transaction_to_blockchain
      // );

      // const res3 = await res2.wait();
      // console.log(res3);
      //   const quoteAmountOut = route.quote.toFixed(6);
      const ratio = (parseInt(inputAmount) / FinalAmount).toFixed(3);

      return [FinalAmount, ratio];
    } else {
      throw new Error("Transaction Failed");
    }

    // get the quote as a decimal value
  } catch (err) {
    console.log(err);
  }

  // main();
};
