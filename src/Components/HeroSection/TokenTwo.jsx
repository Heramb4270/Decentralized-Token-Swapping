import { SiEthereum } from "react-icons/si";
import Icons from "../../cryptoIcons/cryptoIcons";

function TokenTwo(props) {
  return (
    <div className="flex items-center justify-between rounded-lg pl-8 mt-4 border-[1.5px] border-[#001438]">
      <input
        type="text"
        placeholder="0"
        className="input-two placeholder:text-[#ffffff]"
      />
      <button
        onClick={() => props.SetOpenToken2(true)}
        className="group flex items-center justify-between gap-4 leading-[0] bg-gradient-to-r from-[#001438] to-[#021a46] px-4 py-4 font-bold text-xl rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black transition-all icon"
      >
        <img
          src={props.TokenTwo.image || Icons.eth}
          className="w-9 h-9 group-hover:invert"
        />

        {props.TokenTwo.name || "ETH"}
        <small>6969</small>
      </button>
    </div>
  );
}

export default TokenTwo;
