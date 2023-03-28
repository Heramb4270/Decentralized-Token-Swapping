import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

function Model(props) {
  // useStates
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];
  return (
    <div className="Model effect-fade-in absolute inset-0 grid place-content-center justify-center max-h-screen max-w-full z-20">
      <div className="blurry-bg"></div>
      <div
        id="Modal-box"
        className="Model_box bg-gradient-to-b from-[#000e29] to-[#04183d] ring-[#ff1c6f] ring-2 rounded-3xl shadow-2xl p-11"
      >
        <div className="Model_Box_heading flex items-center justify-between">
          <p className="text-xl">Connect a wallet</p>
          <div>
            <button onClick={() => props.setOpenModel(false)}>
              <HiX className="text-white w-5 h-5"></HiX>
            </button>
          </div>
        </div>
        <div className="Model_Box_wallet">
          <p
            key={Math.floor(Math.random() * 30)}
            className="bg-[#D01257] text-white font-medium cursor-pointer px-4 py-3 rounded-full my-3 hover:text-black hover:bg-gradient-to-r from-white to-[#c0c0c0] transition-all"
            onClick={() => {
              props.getSigner(), props.setOpenModel(false);
            }}
          >
            MetaMask
          </p>
          <p
            key={Math.floor(Math.random() * 12)}
            className="bg-[#D01257] text-white font-medium cursor-pointer px-4 py-3 rounded-full my-3 hover:text-black hover:bg-gradient-to-r from-white to-[#c0c0c0] transition-all"
            onClick={() => connectWallet()}
          >
            CoinBase
          </p>
        </div>
        <p className="p-4 text-sm border-[#D01257] border-2 rounded-xl">
          By connecting a wallet, you agree to ---s'
          <br />
          Terms of service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
}
export default Model;
