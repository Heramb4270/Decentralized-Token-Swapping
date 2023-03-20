import { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import { HiLockClosed } from "react-icons/hi2";
import { TiCog } from "react-icons/ti";
import { HiX } from "react-icons/hi";


function Token(props) {
  return (
<<<<<<< HEAD
    <>
      {/* <Token2 setOpenSetting={props.setOpenSetting} /> */}
      <div className="Model fixed bg-[] inset-0 grid place-content-center justify-center min-h-screen z-30">
        <div className="blurry-bg"></div>
        <div className="Model_box bg-[#0F1021] ring-[#ff1c6f] ring-2 p-8 rounded-lg shadow-2xl">
          {/* TOKEN BOX  */}
          <div>
            {/* TOKEN BOX HEADING  */}
            <div className="flex items-center justify-between">
              <h4 className=" text-xl leading-0 my-4">Setting</h4>
              <TiCog size={30} onClick={() => props.setOpenSetting(false)} />
            </div>
            {/* TOKEN BOX PARA  */}
            <p className="flex items-center gap-4 my-2">
              Slippage Tolerance
              <HiLockClosed size={20} />
=======
    // TOKEN
    <div className="Model fixed bg-[] inset-0 grid place-content-center justify-center min-h-screen z-30">
      <div className="blurry-bg"></div>
      <div className="Model_box bg-[#0F1021] ring-[#ff1c6f] ring-2 p-8 rounded-lg shadow-2xl">
        {/* TOKEN BOX  */}
        <div>
          {/* TOKEN BOX HEADING  */}
          <div className="flex items-center justify-between">
            <h4 className=" text-xl leading-0 my-4">Setting</h4>
            <HiX onClick={() => props.setOpenSetting(false)} className="text-white w-5 h-5"></HiX>
          </div>
          {/* TOKEN BOX PARA  */}
          <p className="flex items-center gap-4 my-2">
            Slippage Tolerance
            <HiLockClosed size={20} />
          </p>

          {/* TOKEN BOX INPUT  */}
          <div className="flex items-center gap-4 my-2">
            <button className="input-four bg-gradient-to-r from-[#d1004d] to-[#df3674]">Auto</button>
            <input type="text" placeholder="0.30%" className="input-five" />
          </div>

          <p className="flex items-center gap-4 my-2">
            Slippage Tolerance
            <HiLockClosed size={20} />
          </p>
          <div className="flex items-center gap-4 my-2">
            <input type="text" placeholder="30" className="input-five" />
            <button className="input-four bg-gradient-to-r from-[#d1004d] to-[#df3674]">Minutes</button>
          </div>

          <h2 className=" text-xl leading-0 my-4">Interface Setting</h2>
          {/* TOKEN BOX TOGGLE  */}
          <div className="flex items-center justify-between my-4">
            {/* TOKEN BOX  */}
            <p className="flex justify-between">
              <p>Transaction DeadLine</p>
              <Toggle />
>>>>>>> 84b1caf4a2e776b9c6145683249b27ebcbeebd98
            </p>

            {/* TOKEN BOX INPUT  */}
            <div className="flex items-center gap-4 my-2">
              <button className="input-four bg-gradient-to-r from-[#d1004d] to-[#df3674]">
                Auto
              </button>
              <input type="text" placeholder="0.30%" className="input-five" />
            </div>

            <p className="flex items-center gap-4 my-2">
              Slippage Tolerance
              <HiLockClosed size={20} />
            </p>
            <div className="flex items-center gap-4 my-2">
              <input type="text" placeholder="30" className="input-five" />
              <button className="input-four bg-gradient-to-r from-[#d1004d] to-[#df3674]">
                Minutes
              </button>
            </div>

            <h2 className=" text-xl leading-0 my-4">Interface Setting</h2>
            {/* TOKEN BOX TOGGLE  */}
            <div className="flex items-center justify-between my-4">
              {/* TOKEN BOX  */}
              <p>
                Transaction DeadLine
                <Toggle />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Token;
