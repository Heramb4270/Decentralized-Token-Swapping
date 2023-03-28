import { IoLogoClosedCaptioning } from "react-icons/io";
import Icons from "../../cryptoIcons/cryptoIcons";
import { useRef } from "react";

function TokenOne(props) {
  const ref = useRef(null);
  const refimg = useRef(null);

  const clearField = () => {
    // refimg.current.src = Icons.eth;
    ref.current.value = "";
  };

  props.isConnected() && clearField();

  return (
    <div className="flex items-center justify-between rounded-3xl pl-8 mt-4 border-[1.5px] border-[#001438]">
      <input
        ref={ref}
        type="text"
        placeholder="0"
        onBlur={(e) => {
          if (e.target.value > 0) {
            props.setTokenOneValue(e.target.value),
              props.SwapPrice(e.target.value);
          }
        }}
        className="input-two placeholder:text-[#ffffff]"
      />
      <button
        onClick={() => props.SetOpenToken1(true)}
        className="group flex items-center justify-between gap-4 leading-[0] bg-gradient-to-r from-[#001438] to-[#021a46] px-4 py-4 font-bold text-xl rounded-3xl hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black icon w-[43%]"
      >
        <img
          ref={refimg}
          src={props.TokenOne.image || Icons.eth}
          className="w-9 h-9"
        />

        {props.TokenOne.name || "ETH"}
      </button>
    </div>
  );
}

export default TokenOne;
