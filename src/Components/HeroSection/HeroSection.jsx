import { useState, useContext, useEffect } from "react";
import { Token, SearchToken } from "../index";
import { SwapButton } from "./SwapButton";
import { TiCog } from "react-icons/ti";
import { Coins_Token_1, Coins_Token_2 } from "../../BackendLogic/CoinData";
import TokenOne from "./TokenOne";
import TokenTwo from "./TokenTwo";
import SwapPrice from "./../../BackendLogic/GetSwapPrice.js";
import { Swap } from "../../BackendLogic/FinalSwapping";
import {
  getTokenContract1,
  getTokenContract2,
  getBalance,
} from "./../../BackendLogic/GetBalanceOfTokens.js";
import getPrice2 from "../../BackendLogic/ProcessTrans";
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

  const [ratio, setRatio] = useState(null);
  const [Token1Contract, setToken1Contract] = useState(undefined);
  const [Token2Contract, setToken2Contract] = useState(undefined);
  const [Token1Balance, setToken1Balance] = useState(undefined);
  const [Token2Balance, setToken2Balance] = useState(undefined);
  const [PriceinUsd, SetPriceinUsd] = useState(0);
  const [GasPriceInUSD, setGasPriceInUSD] = useState(0.02);
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
          setToken1Balance(TokenOneBalance);
          setToken2Balance(TokenTwoBalance);
          console.log(TokenTwoBalance);
          setToken1Contract(TokenOneContract);
          setToken2Contract(TokenTwoContract);
        }
      }
    }

    onLoad();
  }, [TokenOne1, TokenTwo1]);
  useEffect(() => {
    if (TokenOne1.name !== "" && TokenTwo1.name !== "") {
      GetPriceInUSD();
    }
  }, [inputAmount, TokenTwo1, TokenOne1]);

  const SwapButtonClick = async () => {
    const tx = await Swap(
      TokenOneValue,
      props.signerAddress,
      TokenOne1,
      TokenTwo1,
      Token1Contract,
      Token1Balance,
      props.signer
    );
  };
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
    setRatio(null);
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

    // setRatio(resData[1]);
    // console.log(resData[1]);
    setLoading(false);
  };
  const getRatio = async () => {
    const ratio_amt = await SwapPrice(
      "1",
      slippageAmount,
      deadlineMinutes,
      props.signerAddress,
      TokenOne1,
      TokenTwo1
    );
    setRatio(ratio_amt[1]);
    console.log(ratio_amt[1]);
  };
  const GetPriceInUSD = async () => {
    const output_amt = await SwapPrice(
      TokenOneValue,
      slippageAmount,
      deadlineMinutes,
      props.signerAddress,
      TokenOne1,
      { name: "USDC" },
      props.provider
    );
    SetPriceinUsd(output_amt[0].substring(0, 7));
    const ratio_amt = await getRatio();
    console.log(ratio_amt);
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
          <p>~${PriceinUsd}</p>
          <p>Balance: {Token1Balance}</p>
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

        <div className="flex items-center justify-between mx-4 my-5 font-normal opacity-70 text-white">
          <p>~${Number(PriceinUsd)}</p>
          <p>Balance: {Token2Balance}</p>
        </div>
        {ratio && !Loading && (
          <>
            <div className="flex items-start justify-between rounded-3xl pl-4 mt-8 font-normal opacity-70 text-white">
              <p>
                1 {TokenTwo1.name} ≈ {ratio} {TokenOne1.name}
              </p>
              {GasPriceInUSD && (
                <p className="items-end justify-between rounded-3xl mr-4">
                  ⛽ ≈ {GasPriceInUSD}
                </p>
              )}
            </div>
          </>
        )}
        {/* {outputAmount > 0 && <TokenPriceInUsd />} */}
        {props.isConnected() ? (
          <SwapButton
            connected={true}
            Swap={SwapButtonClick}
            getSigner={props.getSigner}
            provider={props.provider}
          />
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
