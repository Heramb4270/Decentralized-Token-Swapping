import { FaBitcoin } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import React from "react";

function TokenList({ tokenDate, setOpenTokenBox }) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="TokenList absolute w-72 h-3/4 shadow-2xl ring-[#ff1c6f] ring-2 rounded-lg bg-[#0F1021] p-4 xl:top-[5rem]">
      <div className="flex item justify-between p-4">
        <div className="TokenList_title font-black text-xl text-[#ff1c6f] rounded-lg">
          <h2>Your Token List</h2>
        </div>
        <button onClick={() => setOpenTokenBox(false)}>
          <HiX className="cursor-pointer text-white w-5 h-5"></HiX>
        </button>
      </div>
      <div className="px-4 h-[85%] overflow-auto no-scrollbar">
        {data.map((el, i) => (
          <div className="TokenList_box relative cursor-pointer border-b-[1px] border-[#fb90b754]">
            <div className="TokenList_box_info grid grid-template-cols-1-5 items-center py-2 align-middle gap-4">
              <p className="TokenList_box_info_symbol p-1 text-white font-bold bg-[#ff1c6f] rounded-lg">
                {/* <FaBitcoin className="text-white w-4 h-4"></FaBitcoin> */}
                BTC
              </p>
              <p>
                <span className="font-black text-[#ff1c6f] mr-2">69</span>{" "}
                Bitcoin
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TokenList;
