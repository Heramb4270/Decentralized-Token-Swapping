import { Configuration, OpenAIApi } from "openai";
const apiKey = "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";
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const URL = " https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
const query = `
{
    tokens(orderBy: volumeUSD, orderDirection: desc,first:100)
    {
        id
        name
        symbol
        decimals
        volume
        volumeUSD
        totalSupply
        feesUSD
        txCount
        poolCount
        totalValueLockedUSD
        totalValueLocked
        derivedETH
    }
}
`;
const Coins_Token_2 = [
  {
    img: "eth",
    name: "WETH",
  },
  {
    img: "shib",
    name: "SHIB",
  },
  {
    img: "dai",
    name: "DAI",
  },
  {
    img: "matic",
    name: "MATIC",
  },
  {
    img: "usdc",
    name: "USDC",
  },
  {
    img: "avax",
    name: "AVAX",
  },
  {
    img: "btc",
    name: "WBTC",
  },
  {
    img: "uni",
    name: "UNI",
  },
];
async function getRes(Token1, Token2) {
  const res3 = await fetch("https://api.coincap.io/v2/assets");
  let tok1 = Token1.name;
  let tok2 = Token2.name;
  const res = await res3.json();
  if (Token1.name === "WETH") {
    tok1 = "ETH";
  }
  if (Token2.name === "WETH") {
    tok1 = "ETH";
  }
  if (Token1.name === "WMATIC") {
    tok1 = "MATIC";
  }
  if (Token2.name === "WMATIC") {
    tok2 = "MATIC";
  }
  const data = res.data;
  const TokenDataName1 = Coins_Token_2.map((token) => token.name);
  const filteredData1 = data.filter((value) => value.symbol === tok1);
  console.log(filteredData1);
  const filteredData2 = data.filter((value) => value.symbol === tok2);
  console.log(filteredData2);
  const filteredData3 = [...filteredData1, ...filteredData2];
  console.log(filteredData3);
  return [
    Number(filteredData3[0].priceUsd).toFixed(4),
    Number(filteredData3[1].priceUsd).toFixed(4),
    Number(filteredData3[0].marketCapUsd).toFixed(2),
    Number(filteredData3[1].marketCapUsd).toFixed(2),
  ];
  //   const res = await axios.post(URL, { query: query });
}

export const ChatGpt2 = async (
  inputAmount,
  outputAmount,
  TokenOne1,
  TokenTwo1,
  PriceinUsd,
  setOpenMessageModel,
  setIsClosable,
  setSubject,
  setMessage
) => {
  setSubject("Trade Analysis");
  setMessage("Waiting For ChatGpt to Reply !!!!!!");
  setIsClosable(false);
  setOpenMessageModel(true);
  const [TokenOneUSD, TokenTwoUSD, TokenOneMarketCap, TokenTwoMarketCap] =
    await getRes(TokenOne1, TokenTwo1);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `i am swapping
        two tokens using uniswap on polygon,
        my token 1 is ${TokenOne1.name},
        token 2 is ${TokenTwo1.name},
        Token 1 Input value is ${inputAmount},
        Output ${TokenTwo1.name} Tokens are ${outputAmount},
        pool fees are in between 0.03 to 0.07 USD
        PriceinUsDollar for the Input Token is ${PriceinUsd},
        OutputAmount in UsdDollar is ${PriceinUsd} - poolfees  
        gas fees from polygon network which are 100 - 500 gwei,
        1 ${TokenOne1.name} price in USD is ${TokenOneUSD}
        1 ${TokenTwo1.name} price in USD is ${TokenTwoUSD}
        ${TokenOne1.name} MarketCap is ${TokenOneMarketCap} USD
        ${TokenTwo1.name} MarketCap is ${TokenTwoMarketCap} USD
        analyze this trade and tell whether its beneficial or no
        `,
      },
    ],
  });
  const OutputToMessageBox = completion.data.choices[0].message.content;
  setOpenMessageModel(false);
  setSubject("Trade Analysis !!! ");
  setIsClosable(true);
  setMessage(OutputToMessageBox);
  setOpenMessageModel(true);
};
//Chat2();
