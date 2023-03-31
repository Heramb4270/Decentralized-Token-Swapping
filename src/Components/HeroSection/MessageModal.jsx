import { useState } from "react";

export default function MessageModal(props) {
  const [messageOpen, setMessageOpen] = useState(true);

  if (messageOpen) {
    return (
      <div className="Model effect-fade-in fixed inset-0 z-20 grid max-h-screen max-w-full place-content-center justify-center">
        <div className="blurry-bg"></div>
        <div className="Model_box h-[18rem] w-[33rem] rounded-3xl bg-gradient-to-b from-[#000e29] to-[#04183d] px-11 py-9 shadow-2xl ring-2 ring-[#ffb1ce]">
          <div className="Model_Box_heading flex justify-center">
            <p className="font-bold text-lg text-white">{props.subject}</p>
          </div>
          <div className="align-middle items-center margin-auto">
            <p className="w-[100%] h-[5rem] overflow-auto no-scrollbar mx-0 my-8 text-xl font-normal items-center opacity-90 text-white">
              {props.message}
            </p>
            <div className="Model_Box_heading grid place-content-center items-center">
              {props.isClosable && (
                <button
                  onClick={() => setMessageOpen(!messageOpen)}
                  className="text-[#d1ceff] bg-[#D01257] px-[2rem] py-3 rounded-full cursor-pointer font-bold"
                >
                  Ok
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
