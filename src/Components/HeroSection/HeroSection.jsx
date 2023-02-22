import { useState, useContext } from "react";
import { Token, SearchToken } from "../index";
import { TiCog } from "react-icons/ti";
import { SiEthereum } from "react-icons/si";

function HeroSection(props) {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken1, SetOpenToken1] = useState(false);
  const [openToken2, SetOpenToken2] = useState(false);

  //TOKEN 1

  const [TokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  //TOKEN 2

  const [TokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    // HEROSECTION
    <div className="w-11/12 mx-8 my-auto flex items-center justify-center relative text-[#0F1021]">
      {/* //HEROSECTION BOX  */}
      <div className="mt-20 bg-[#FB90B7] px-4 py-4 rounded-lg w-[32rem]">
        {/* {HEROXSECTION HEADING} */}
        <div className="flex items-center justify-between">
          <p>Swap</p>
          {/* {HEROSECTION IMAGE} */}
          <div>
            <TiCog size={30} onClick={() => setOpenSetting(true)} />
          </div>
        </div>
        {/* HEROSECTION INPUT  */}
        {/* TOKEN ONE  */}
        <div className="flex items-center justify-between border rounded-lg pl-8 mt-4 border-two">
          <input
            type="text"
            placeholder="0"
            className="input-two placeholder:text-[#0F1021]"
          />
          <button
            onClick={() => openToken1(true)}
            className="flex items-center justify-between gap-4 leading-[0] bg-[#FFCEE4] px-4 py-4 font-bold text-xl rounded-lg"
          >
            <SiEthereum size={30} />

            {TokenOne.name || "ETH"}
            <small>6969</small>
          </button>
        </div>

        {/* TOKEN TWO */}
        <div className="flex items-center justify-between border rounded-lg pl-8 mt-4 border-two">
          <input
            type="text"
            placeholder="0"
            className="input-two placeholder:text-[#0F1021]"
          />
          <button
            onClick={() => openToken1(true)}
            className="flex items-center justify-between gap-4 leading-[0] bg-[#FFCEE4] px-4 py-4 font-bold text-xl rounded-lg"
          >
            <SiEthereum size={30} />

            {TokenTwo.name || "ETH"}
            <small>6969</small>
          </button>
        </div>

        {props.accounts ? (
          <button className="input-three">Connect Wallet</button>
        ) : (
          <button onClick={() => {}} className="input-three">
            Swap
          </button>
        )}
      </div>

      {openSetting && <Token openSetting={openSetting} />}

      {openToken1 && (
        <SearchToken
          openToken1={setTokenOne}
          token={setTokenOne}
          tokenData={props.tokenData}
        />
      )}

      {openToken2 && (
        <SearchToken
          openToken1={setTokenTwo}
          token={setTokenTwo}
          tokenData={props.tokenData}
        />
      )}
    </div>
  );
}
export default HeroSection;
