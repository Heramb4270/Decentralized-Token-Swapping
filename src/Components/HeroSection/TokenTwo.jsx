import Icons from "../../cryptoIcons/cryptoIcons";
import SpinLoader from "../../assets/loader.gif";

function TokenTwo(props) {
  return (
    <div className="flex items-center justify-between rounded-3xl pl-8 mt-4 border-[1.5px] border-[#001438]">
      {props.Loading && props.TokenTwo.name && (
        <img src={SpinLoader} className="w-5 h-5 mr-2 "></img>
      )}
      <input
        type="text"
        placeholder="0"
        value={props.output}
        className="input-two placeholder:text-[#ffffff]"
      />
      <button
        onClick={() => props.SetOpenToken2(true)}
        className="group flex items-center justify-between gap-4 leading-[0] bg-gradient-to-r from-[#001438] to-[#021a46] px-4 py-4 font-bold text-xl rounded-3xl hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black transition-all icon w-[43%]"
      >
        <img src={props.TokenTwo.image || Icons.eth} className="w-9 h-9" />
        {props.TokenTwo.name || "ETH"}
      </button>
    </div>
  );
}

export default TokenTwo;
