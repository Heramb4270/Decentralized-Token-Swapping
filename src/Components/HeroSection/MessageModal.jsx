import { HiX } from "react-icons/hi";
import { useState } from "react";

export default function MessageModal(props) {
  return (
    <div className="Model effect-fade-in fixed inset-0 z-20 grid max-h-screen max-w-full place-content-center justify-center">
      <div className="blurry-bg"></div>
      <div className="Model_box h-[15rem] w-[23rem] rounded-3xl bg-gradient-to-b from-[#000e29] to-[#04183d] px-11 py-9 shadow-2xl ring-2 ring-[#ff1c6f]">
        <div className="Model_Box_heading flex items-center justify-between">
          <p className="font-bold text-lg text-white">{props.subject}</p>
        </div>
        <div className="align-middle">
          <p className="w-[80%] mx-0 my-6 text-sm opacity-90 text-white my-3">
            {props.message}
          </p>
          <div className="Model_Box_heading grid place-content-center items-center">
            {props.isClosable && (
              <button className="text-[#d1ceff] bg-[#D01257] px-[2rem] py-3 rounded-full cursor-pointer font-bold">
                Ok
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}