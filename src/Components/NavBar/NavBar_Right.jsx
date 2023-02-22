import { SiEthereum } from "react-icons/si";
import { Model, TokenList } from "../index";
import { useState } from "react";
function NavBar_Right(props) {
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  return (
    <div className="flex items-center gap-4 justify-end font-semibold">
      {/* NAVABAR RIGHT BOX  */}
      <div className="flex items-center gap-4 bg-[#D01257] text-white px-3 py-3 rounded-lg cursor-pointer uppercase">
        {/* IMAGE NETWORK  */}
        <SiEthereum className="text-white" size={20}></SiEthereum>
        <p>Network Name</p>
      </div>
      {/* ADDRESS BUTTON  */}
      <button className="text-[#FFCEE4]  bg-[#D01257] px-3 py-3 rounded-lg cursor-pointer font-bold" onClick={() => {setOpenModel(true)}}>Address</button>
      
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
