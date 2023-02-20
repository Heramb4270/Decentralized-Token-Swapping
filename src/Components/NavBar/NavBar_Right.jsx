import { SiEthereum } from "react-icons/si";
import { Model, TokenList } from "../index";
import { useState } from "react";
function NavBar_Right(props) {
  const [openModel, SetOpenModel] = useState(false);
  const [openTokenBox, SetOpenTokenBox] = useState(false);
  return (
    <div className="flex items-center gap-4 justify-center">
      {/* NAVABAR RIGHT BOX  */}
      <div className="flex items-center gap-4 bg-[#C77DFF] px-2 py-6 rounded-lg cursor-pointer uppercase">
        {/* IMAGE NETWORK  */}
        <div>
          <SiEthereum size={30}></SiEthereum>
        </div>
        <p>Network Name</p>
      </div>
      {/* ADDRESS BUTTON  */}
      <button onClick={() => {}}>Address</button>

      {openModel && (
        <Model SetOpenModel={SetOpenModel} connectWallet="Connect" />
      )}

      {openTokenBox && (
        <TokenList SetOpenTokenBox={SetOpenTokenBox} tokenDate="hey" />
      )}
    </div>
  );
}

export default NavBar_Right;
