import { Token } from "@uniswap/sdk-core";
const data = {
  USDC: new Token(
    137,
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    6,
    "USDC",
    "USD Coin"
  ),

  DAI: new Token(
    137,
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    18,
    "DAI",
    "Dai Stablecoin"
  ),

  WETH: new Token(
    137,
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    18,
    "WETH",
    "Wrapped Ether"
  ),

  SHIB: new Token(
    137,
    "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec",
    18,
    "SHIB",
    "SHIBA INU"
  ),

  AVAX: new Token(
    137,
    "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    18,
    "AVAX",
    "Avalance Token"
  ),

  WBTC: new Token(
    137,
    "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    8,
    "WBTC",
    "Wrapped Bitcoin"
  ),

  WMATIC: new Token(
    137,
    "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    18,
    "WMATIC",
    "Wrapped MATIC"
  ),

  UNI: new Token(
    137,
    "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
    18,
    "UNI",
    "Uniswap"
  ),
};

export default data;
