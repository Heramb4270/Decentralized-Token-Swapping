import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import Icons from "../../cryptoIcons/cryptoIcons";

function SearchToken({ openToken, tokens, tokenData, coin, SwapPrice }) {
  const [active, setActive] = useState(1);

  return (
    <div className="SearchToken absolute top-[15%] mx-0 my-auto bg-[#15162e] p-8 rounded-lg w-[30rem] h-96 drop-shadow-2xl shadow-lg">
      <div className="SearchToken_box">
        <div className="SearchToken_box_heading flex items-center justify-between">
          <h4>Select a token</h4>
          <button onClick={() => openToken(false)}>
            <HiX className="text-white w-5 h-5"></HiX>
          </button>
        </div>

        <div className="SearchToken_box_search flex items-center bg-[#D01257] my-4 p-2 rounded-lg gap-4">
          <div className="SearchToken_box_search_img">
            <IoIosSearch className="w-5 h-5"></IoIosSearch>
          </div>
          <input
            type="text"
            placeholder="Search name and paste the address"
            id=""
            className="text-white placeholder:text-white bg-transparent focus:outline-none w-[90%]"
          />
        </div>

        <div className="SearchToken_box_tokens mt-6 grid grid-cols-4 gap-2">
          {coin.map((el, i) => (
            <button
              key={i + 1}
              className={
                active == i + 1
                  ? `flex items-center gap-1 bg-[#D01257] border-[#D01257] border-2 p-[.3rem] rounded-lg cursor-pointer`
                  : `group flex items-center gap-1 border-[#D01257] border-2 p-[.3rem] rounded-lg cursor-pointer transition-all hover:bg-gradient-to-r from-white to-slate-200 hover:text-black hover:border-black icon`
              }
              onClick={() => (
                setActive(i + 1), tokens({ name: el.name, image: el.img })
              )}
            >
              <img
                src={el.img || Icons.dai}
                className="w-6 h-6 group-hover:invert"
              />
              {el.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SearchToken;
