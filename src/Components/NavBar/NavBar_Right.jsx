import { SiEthereum } from "react-icons/si";
import { Model, TokenList } from "../index";
import { useState } from "react";
import Icons from "../../cryptoIcons/cryptoIcons";

function NavBar_Right(props) {
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(true);
  return (
    <div className="flex items-center gap-4 justify-end font-semibold">
      {/* NAVABAR RIGHT BOX  */}
      <div className="flex items-center gap-4 bg-[#D01257] text-white px-3 py-3 rounded-lg cursor-pointer uppercase">
        {/* IMAGE NETWORK  */}
        <img src={Icons.eth} className="w-6 h-6" />
        <p>Network Name</p>
      </div>
      {/* ADDRESS BUTTON  */}
      {account ? (
        <button
          className="text-[#FFCEE4]  bg-[#D01257] px-3 py-3 rounded-lg cursor-pointer font-bold"
          onClick={() => {
            setOpenModel(true);
          }}
        >
          Connect
        </button>
      ) : (
        <button
          className="text-[#FFCEE4]  bg-[#D01257] px-3 py-3 rounded-lg cursor-pointer font-bold"
          onClick={() => {
            setOpenTokenBox(true);
          }}
        >
          Address
        </button>
      )}

      {openModel && (
        <Model setOpenModel={setOpenModel} connectWallet="Connect" />
      )}

      {openTokenBox && (
        <TokenList setOpenTokenBox={setOpenTokenBox} tokenDate="hey" />
      )}
    </div>
  );
}

export default NavBar_Right;
