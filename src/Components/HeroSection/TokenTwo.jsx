import { SiEthereum } from "react-icons/si";

function TokenTwo(props) {
  return (
    <div className="flex items-center justify-between border rounded-lg pl-8 mt-4 border-two">
      <input
        type="text"
        placeholder="0"
        className="input-two placeholder:text-[#0F1021]"
      />
      <button
        onClick={() => props.SetOpenToken2(true)}
        className="flex items-center justify-between gap-4 leading-[0] bg-[#FFCEE4] px-4 py-4 font-bold text-xl rounded-lg"
      >
        <SiEthereum size={30} />

        {props.TokenTwo.name || "ETH"}
        <small>6969</small>
      </button>
    </div>
  );
}

export default TokenTwo;
