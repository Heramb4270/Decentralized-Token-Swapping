import { useState, useContext, useEffect } from "react";
import { Token, SearchToken } from "../index";
import { SwapButton } from "./SwapButton";

import { TiCog } from "react-icons/ti";
import { Coins_Token_1, Coins_Token_2 } from "../../BackendLogic/CoinData";
import TokenOne from "./TokenOne";
import TokenTwo from "./TokenTwo";
import data2 from "./../../BackendLogic/constants2.js";
import SwapPrice from "./../../BackendLogic/GetSwapPrice.js";
import {
  getTokenContract1,
  getTokenContract2,
  getBalance,
} from "./../../BackendLogic/GetBalanceOfTokens.js";
// import {AlphaRouter} from "../../BackendLogic/AlphaRouter"
function HeroSection(props) {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken1, setOpenToken1] = useState(false);
  const [openToken2, setOpenToken2] = useState(false);
  const [inputAmount, setInputAmount] = useState();
  const [outputAmount, setOutputAmount] = useState(0);
  const [slippageAmount, setSlippageAmount] = useState(2);
  const [deadlineMinutes, setDeadlineMinutes] = useState(10);
  const [Loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(undefined);
  const [ratio, setRatio] = useState(undefined);
  const [Token1Contract, setToken1Contract] = useState(undefined);
  const [Token2Contract, setToken2Contract] = useState(undefined);
  const [Token1Balance, setToken1Balance] = useState(undefined);
  const [Token2Balance, setToken2Balance] = useState(undefined);

  //TOKEN 1
  const [TokenOneValue, setTokenOneValue] = useState();
  const [TokenTwoValue, setTokenTwoValue] = useState();
  const [TokenOne1, setTokenOne] = useState({
    name: "",
    image: "",
  });
  {
    console.log(TokenOneValue);
  }
  //TOKEN 2

  const [TokenTwo1, setTokenTwo] = useState({
    name: "",
    image: "",
  });
  useEffect(() => {
    console.log(TokenOne1, TokenTwo1);
    async function onLoad() {
      if (TokenOneValue > 0) {
        await GettingQuotes();
      }
      if (!Loading) {
        if (TokenOne1.name !== "" && TokenTwo1.name !== "") {
          const TokenOneContract = getTokenContract1(TokenOne1);
          console.log(Token1Contract);
          const TokenTwoContract = getTokenContract2(TokenTwo1);
          console.log(Token2Contract);

          const TokenOneBalance = await getBalance(
            TokenOneContract,
            props.signerAddress,
            TokenOne1
          );
          setToken1Balance(Token1Balance);
          console.log(TokenOneBalance);

          const TokenTwoBalance = await getBalance(
            TokenTwoContract,
            props.signerAddress,
            TokenTwo1
          );
          setToken2Balance(TokenTwoBalance);
          console.log(TokenTwoBalance);
          setToken1Contract(TokenOneContract);
          setToken2Contract(TokenTwoContract);
        }
      }
    }

    onLoad();
  }, [TokenOne1, TokenTwo1]);

  const GettingQuotes = async (
    inputAmount1 = inputAmount,
    slippageAmt = slippageAmount,
    deadlineMin = deadlineMinutes,
    signerAddress = props.signerAddress,
    Token1 = TokenOne1,
    Token2 = TokenTwo1,
    provider = props.provider
  ) => {
    setLoading(true);

    setOutputAmount(0);
    setInputAmount(inputAmount1);
    const resData = await SwapPrice(
      inputAmount1,
      slippageAmt,
      deadlineMin,
      signerAddress,
      Token1,
      Token2,
      provider
    );
    const outputamt = resData[0].substring(0, 10);
    // c
    if (outputamt < 0.0000001) {
      setOutputAmount("<0.0000001");
    } else {
      setOutputAmount(resData[0].substring(0, 8));
    }
    console.log(resData[0]);

    setRatio(resData[1]);
    console.log(resData[1]);
    setLoading(false);
  };

  return (
    // HEROSECTION text-[#18122B]
    <div className="my-auto flex items-center justify-center relative text-white">
      {/* //HEROSECTION BOX  */}
      {/* bg-gradient-to-b from-[#d1004d] to-[#df3674] */}
      <div className="mt-20 bg-gradient-to-b from-[#d1004d] to-[#df3674] px-4 py-4 rounded-3xl w-[32rem]">
        {/* {HEROXSECTION HEADING} */}
        <div className="flex items-center justify-between">
          <p className="font-bold">Swap</p>
          {/* {HEROSECTION IMAGE} */}
          <div>
            <TiCog size={30} onClick={() => setOpenSetting(true)} />
          </div>
        </div>
        {/* HEROSECTION INPUT  */}
        {/* TOKEN ONE  */}
        <TokenOne
          SwapPrice={GettingQuotes}
          TokenOne={TokenOne1}
          TokenTwo={TokenTwo1}
          setTokenOne={setTokenOne}
          setTokenOneValue={setTokenOneValue}
          SetOpenToken1={setOpenToken1}
        />

        <div className="flex items-center justify-between mx-4 my-3 mb-7 font-normal opacity-70 text-white">
          <p>$455</p>
          <p>Balance: $566</p>
        </div>
        {/* <TokenPriceInUsd
          TokenOne={TokenOne1}
          SwapPrice={GettingQuotes}
          inputAmount={inputAmount}
        /> */}
        {/* TOKEN TWO */}
        <TokenTwo
          inputAmount={inputAmount}
          TokenTwo={TokenTwo1}
          setTokenTwo={setTokenTwo}
          output={outputAmount}
          setOutputAmount={setOutputAmount}
          Loading={Loading}
          setTokenTwoValue={setTokenTwoValue}
          SetOpenToken2={setOpenToken2}
        />

        <div className="flex items-center justify-between mx-4 my-3 font-normal opacity-70 text-white">
          <p>$455</p>
          <p>Balance: $566</p>
        </div>
        {/* {outputAmount > 0 && <TokenPriceInUsd />} */}
        {props.isConnected() ? (
          <SwapButton connected={true} getSigner={props.getSigner} />
        ) : (
          <SwapButton connected={false} getSigner={props.getSigner} />
        )}
      </div>

      {openSetting && (
        <Token
          setOpenSetting={setOpenSetting}
          setSlippageAmount={setSlippageAmount}
          setDeadlineMinutes={setDeadlineMinutes}
        />
      )}

      {openToken1 && (
        <SearchToken
          inputAmount={inputAmount}
          coin={Coins_Token_1}
          openToken={setOpenToken1}
          tokens={setTokenOne}
          tokenData="Token1"
        />
      )}

      {openToken2 && (
        <SearchToken
          inputAmount={inputAmount}
          coin={Coins_Token_2}
          openToken={setOpenToken2}
          tokens={setTokenTwo}
          tokenData="Token2"
        />
      )}
    </div>
  );
}
export default HeroSection;
