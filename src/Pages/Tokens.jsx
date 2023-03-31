import React, { useState, useEffect } from "react";
import Img from "../cryptoIcons/cryptoIcons";
import { AllTokens } from "../Components/index";
import { IoIosSearch } from "react-icons/io";

function Tokens() {
  const [allTokenList, setAllTokenList] = useState([
    {
      number: 1,
      image: Img.eth,
      name: "Ether",
      symbol: "ETH",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5 M",
      volume: "$716.5 M",
    },
    {
      number: 2,
      image: Img.dai,
      name: "Dai",
      symbol: "DAI",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5 M",
      volume: "$716.5 M",
    },
    {
      number: 3,
      image: Img.matic,
      name: "Matic",
      symbol: "MATIC",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5 M",
      volume: "$716.5 M",
    },
    {
      number: 4,
      image: Img.avax,
      name: "Avax",
      symbol: "ETH",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5 M",
      volume: "$716.5 M",
    },
    {
      number: 5,
      image: Img.usdc,
      name: "USD Coin",
      symbol: "USDC",
      price: "$12,345",
      change: "+ 234.5",
      tvl: "$7894.5 M",
      volume: "$716.5 M",
    },
  ]);

  const [copyAllTokenList, setCopyAllTokenList] = useState(allTokenList);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  const onHandleSearch = (value) => {
    const filteredTokens = allTokenList.filter(({ name }) => {
      name.toLoweCase().includes(value.toLowerCase());
    });

    if (filteredTokens.length === 0) {
      setAllTokenList(copyAllTokenList);
    } else {
      setAllTokenList(filteredTokens);
    }
  };

  const onClearSearch = () => {
    if (allTokenList.length && copyAllTokenList.length) {
      setAllTokenList(copyAllTokenList);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className="Tokens ml-20 mr-20 mt-10">
      <div className="TokenBox w-[60%] my-0 mx-auto">
        <h2 className="text-4xl font-normal">Top token on Uniswap</h2>
        <div className="TokenBoxHeader flex gap-4 items-center my-9">
          <div className="TokenBoxEth flex items-center gap-2 text-xl text-white font-bold bg-[#D01257] py-[.60rem] px-8 rounded-lg leading-0">
            <p>
              <img src={Img.matic} alt="matic logo" className="w-5 h-5" />
            </p>
            <p>Ethereum</p>
          </div>
          <div className="TokenBoxSearch flex items-center gap-4 bg-[#D01257] py-3 px-[2rem] leading-0 rounded-lg w-[70%]">
            <p>
              <IoIosSearch className="w-5 h-5" />
            </p>
            <input
              type="text"
              placeholder="Filter tokens"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
              className="bg-transparent outline-none border-0 w-[90%] color-white placeholder:text-white"
            />
          </div>
        </div>

        <AllTokens allTokenList={allTokenList} />
      </div>
    </div>
  );
}

export default Tokens;
