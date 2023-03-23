import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { CurrencyAmount, TradeType, Percent } from "@uniswap/sdk-core";
import { ethers, BigNumber } from "ethers";
import JSBI from "jsbi";
import ERC20ABI from "./abi";
const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45	";
const INFURA_URL_POLYGON =
  "https://polygon-mainnet.g.alchemy.com/v2/E99oxEOcJm44pEwe6g7W0tKlkyfJN7RM";
console.log(INFURA_URL_POLYGON);
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_POLYGON);

const chainId = 137;

//const web3Provider = new ethers.providers.Web3Provider(provider);
const router = new AlphaRouter({ chainId: chainId, provider: provider });

// export const getWethContract = () =>
//   new ethers.Contract(address0, ERC20ABI, provider);
// export const getUniContract = () =>
//   new ethers.Contract(address1, ERC20ABI, provider);
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

export default getPrice = async (
  inputAmount,
  slippageAmount,
  deadline,
  walletAddress,
  InputToken,
  OutputToken
) => {
  const percentSlippage = new Percent(slippageAmount, 100);
  const InputAmout = CurrencyAmount.fromRawAmount(
    InputToken,
    fromReadableAmount(inputAmount, 18).toString()
  );

  const route = await router.route(
    InputAmout,
    OutputToken,
    TradeType.EXACT_INPUT,
    {
      recipient: walletAddress,
      slippageTolerance: percentSlippage,
      deadline: deadline,
      type: SwapType.SWAP_ROUTER_02,
    }
  );
  console.log(route);
  const transaction = {
    data: route.methodParameters.calldata,
    to: V3_SWAP_ROUTER_ADDRESS,
    value: BigNumber.from(route.methodParameters.value),
    from: walletAddress,
    gasPrice: BigNumber.from(route.gasPriceWei),
    gasLimit: 60000,
  };

  const quoteAmountOut = route.quote.toFixed(6);
  const ratio = (inputAmount / quoteAmountOut).toFixed(3);

  return [transaction, quoteAmountOut, ratio];
};

// const runSwap = async (transaction, signer) => {
//   const approvalAmount = ethers.utils.parseUnits("0.3", 18).toString();
//   const contract0 = getWethContract();
//   await contract0
//     .connect(signer)
//     .approve(V3_SWAP_ROUTER_ADDRESS, approvalAmount);

//   signer.sendTransaction(transaction);
// };
// export default runSwap;
