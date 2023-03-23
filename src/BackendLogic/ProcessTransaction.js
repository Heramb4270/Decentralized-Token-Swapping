import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
// const AlphaRouter = require("@uniswap/smart-order-router");
const ERC20ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
import { ethers, BigNumber } from "ethers";
//import * as JSBI from "jsbi";
import { Token, CurrencyAmount, Percent, TradeType } from "@uniswap/sdk-core";
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

export const getPrice = async (
  inputAmount,
  slippageAmount,
  time,
  signerAddress,
  InputToken,
  OutputToken,
  provider
) => {
  const chainId = 137;
  const amount2 = 0.82;

  const router = new AlphaRouter({
    chainId: chainId,
    provider: provider,
  });
  const inputAmount1 = CurrencyAmount.fromRawAmount(
    InputToken,
    fromReadableAmount(inputAmount, 18).toString()
  );
  try {
    const route = await router.route(
      inputAmount1,
      OutputToken,
      TradeType.EXACT_INPUT,
      {
        recipient: signerAddress,
        slippageTolerance: new Percent(15, 100), // .5%
        deadline: Math.floor(Date.now() / 1000 + 1800),
        type: SwapType.SWAP_ROUTER_02,
      }
    );
    console.log(route);

    console.log(` Price for ${amount2}  is ${route.quote.toFixed(6)}`);
    return;
    if (route !== null) {
      // BigNumber.from(ethers.utils.parseUnits("200000", "gwei"));

      const contract0 = new ethers.Contract(address0, ERC20ABI, web3Provider);

      const tx = await contract0
        .connect(connectedWallet)
        .populateTransaction.approve(
          "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
          fromReadableAmount(0.3, decimals0).toString(),
          { from: WALLET_ADDRESS, gasPrice: BigNumber.from(route.gasPriceWei) }
        );

      await connectedWallet.sendTransaction(tx);
      const transaction_to_blockchain = {
        data: route.methodParameters.calldata,
        to: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        value: BigNumber.from(route.methodParameters.value),
        from: WALLET_ADDRESS,
        gasPrice: BigNumber.from(route.gasPriceWei),
        gasLimit: 300000,
      };

      const res2 = await connectedWallet.sendTransaction(
        transaction_to_blockchain
      );

      const res3 = await res2.wait();
      console.log(res3);
    } else {
      throw new Error("Transaction Failed");
    }

    // get the quote as a decimal value
  } catch (err) {
    console.log(err);
  }

  // main();
};
