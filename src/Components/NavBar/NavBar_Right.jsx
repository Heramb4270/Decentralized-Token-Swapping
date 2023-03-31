import { SiEthereum } from "react-icons/si";
import { Model, TokenList } from "../index";
import { useState } from "react";
import Icons from "../../cryptoIcons/cryptoIcons";
import MessageModal from "../HeroSection/MessageModal";

function NavBar_Right(props) {
  const [openModel, setOpenModel] = useState(false);
  const displayAddress = `${props.signerAddress?.substring(0, 10)}...`;
  return (
    <div className="flex items-center gap-4 justify-end font-semibold">
      {/* NAVABAR RIGHT BOX  */}
      <div className="flex items-center gap-4 bg-[#40418d] bg-[#D01257] text-white px-3 py-3 rounded-full cursor-pointer uppercase">
        {/* IMAGE NETWORK  */}
        <img src={Icons.matic} className="w-6 h-6" />
        <p>Polygon</p>
      </div>



      {/* ADDRESS BUTTON  */}
      {props.isConnected() ? (
        <div className="text-[#FFCEE4]  bg-[#D01257] px-3 py-3 rounded-full cursor-pointer font-bold">
          {displayAddress}
        </div>
      ) : (
        <button
          className="text-[#d1ceff] bg-[#40418d] bg-[#D01257] px-3 py-3 rounded-full cursor-pointer font-bold"
          onClick={() => {
            setOpenModel(true);
          }}
        >
          Connect
        </button>
      )
      }

      {
        props.isConnected() &&
        <MessageModal
          subject={"DEX App"}
          message={`
            Login Successfull! 🥳 Now you can
            start swaping tokens. Click Ok to 
            continue.
          `}
          isClosable={true}
        />
      }


      {openModel && (
        <Model
          setOpenModel={setOpenModel}
          provider={props.provider}
          isConnected={props.isConnected}
          signerAddress={props.signerAddress}
          getSigner={props.getSigner}
        />
      )}
    </div>
  );
}

export default NavBar_Right;
