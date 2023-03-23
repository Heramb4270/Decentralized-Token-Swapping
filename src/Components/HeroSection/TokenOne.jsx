import Icons from "../../cryptoIcons/cryptoIcons";
function TokenOne(props) {
  return (
    <div className="flex items-center justify-between rounded-lg pl-8 mt-4 border-[1.5px] border-[#001438]">
      <input
        type="text"
        placeholder="0"
        onChange={(e) => {
          props.setTokenOneValue(e.target.value),
            props.SwapPrice(e.target.value);
        }}
        className="input-two placeholder:text-[#ffffff]"
      />
      <button
        onClick={() => props.SetOpenToken1(true)}
        className="group flex items-center justify-between gap-4 leading-[0] bg-gradient-to-r from-[#001438] to-[#021a46] px-4 py-4 font-bold text-xl rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black icon w-[43%]"
      >
        <img
          src={props.TokenOne.image || Icons.eth}
          className="w-9 h-9 group-hover:invert"
        />

        {props.TokenOne.name || "ETH"}
      </button>
    </div>
  );
}

export default TokenOne;
