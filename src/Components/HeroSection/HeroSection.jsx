import { useState, useContext } from "react";
import { Token, SearchToken } from "../index";

import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";

import { HiX } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoLogoUsd } from "react-icons/io";

import { TiCog } from "react-icons/ti";
import TokenOne from "./TokenOne";
import TokenTwo from "./TokenTwo";
function HeroSection(props) {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken1, setOpenToken1] = useState(false);
  const [openToken2, setOpenToken2] = useState(false);

  //TOKEN 1

  const [TokenOne1, setTokenOne] = useState({
    name: "",
    image: "",
  });

  //TOKEN 2

  const [TokenTwo1, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    // HEROSECTION text-[#18122B]
    <div className="my-auto flex items-center justify-center relative text-white">
      {/* //HEROSECTION BOX  */}
      <div className="mt-20 bg-gradient-to-b from-[#d1004d] to-[#df3674] px-4 py-4 rounded-lg w-[32rem]">
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

        <TokenOne TokenOne={TokenOne1} SetOpenToken1={setOpenToken1} />

        {/* TOKEN TWO */}

        <TokenTwo TokenTwo={TokenTwo1} SetOpenToken2={setOpenToken2} />
        {props.accounts ? (
          <button className="input-three">Connect Wallet</button>
        ) : (
          <button onClick={() => {}} className="font-medium text-white bg-gradient-to-r from-black to-gray-900 w-full rounded-full py-3 my-4 drop-shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-300 transition-all hover:text-black">
            Swap
          </button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken1 && (
        <SearchToken
          openToken={setOpenToken1}
          tokens={setTokenOne}
          tokenData={props.tokenData}
        />
      )}

      {openToken2 && (
        <SearchToken
          openToken={setOpenToken2}
          tokens={setTokenTwo}
          tokenData={props.tokenData}
        />
      )}
    </div>
  );
}
export default HeroSection;
