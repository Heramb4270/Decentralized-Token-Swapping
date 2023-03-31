import React from "react";
import Icons from "../../cryptoIcons/cryptoIcons";

function AllTokens({ allTokenList }) {
  
  return (
    // <div className="AllTokens">
    //   <div className="AllTokensBox mx-4 bg-[#15162e]">
    //     <div className="AllTokensBoxHeader grid-cols-6 items-center px-4 py-2 border-x-0 border-t-0 border-solid border-b border-b-[#D01257]">
    //       <p className="Hide flex items-center gap-2"></p>
    //       <p>Token Name</p>
    //       <p>Price</p>
    //       <p className="Hide flex items-center gap-2">Change</p>
    //       <p className="Hide  flex items-center gap-2">
    //         TVL{" "}
    //         <small>
    //           <img src={Icons.eth} className="w-4 h-4" />
    //         </small>{" "}
    //       </p>
    //       <p className="Hide flex items-center gap-2">
    //         <img src={Icons.usdc} className="w-4 h-4" />
    //       </p>
    //       <p>
    //         <small>
    //           <img src={Icons} className="w-4 h-4" />
    //         </small>{" "}
    //         Volume{" "}
    //         <small>
    //           <img src={Icons.btc} className="w-4 h-4" />
    //         </small>{" "}
    //       </p>
    //     </div>

    //     {allTokenList.map((el, i) => (
    //       <div className="AllTokens_box_list grid-cols-6 px-4 py-2 items-center mt-2">
    //         <p className="Hide">{el.number}</p>
    //         <p className="AllTokenListPara text-xl flex gap-2 leading-0 items-center ">
    //           <small>
    //             <img src={el.img} alt="logo" className="w-6 h-6" />
    //           </small>
    //           <small>{el.name}</small>
    //           <small>{el.symbol}</small>
    //         </p>
    //         <p>{el.price}</p>
    //         <p className="Hide">{el.change}</p>
    //         <p className="Hide">{el.tvl}</p>
    //         <p className="Hide">{el.volume}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <table className="table-auto mt-5 bg-[#15162e] text-white shadow-lg ring-1 ring-[#D01257] rounded-xl border-[#D01257]">
      {console.log(allTokenList())}

      <thead className="mb-4 border-b border-b-[#D01257]">
        <tr className="mx-6">
          <th className="px-6 py-4 items-center">#</th>
          <th className="px-6 py-4 items-center">Token Name</th>
          <th className="px-8 py-4 items-center">Price</th>
          <th className="px-6 py-4 items-center">Change</th>
          <th className="px-6 py-4 items-center">TVL</th>
          <th className="px-6 py-4 items-center w-[4.5rem]">Volume</th>
        </tr>
      </thead>
      <tbody>
        {allTokenList.map((el, i) => (
          <tr>
            <td className="px-12 py-4">{i + 1}</td>
            <td className="px-6 py-2 items-center">
              <p className="flex items-center">
                {/* <img src={el.image} className="w-4 h-4 mx-2" /> */}
                <p>{el[i].name}</p> <p className="ml-1">{el[i].symbol}</p>
              </p>
            </td>
            <td className="px-6 py-2 align">{el[i].changePercent24Hr}</td>
            <td className="px-6 py-2 align">{el[i].priceUSD}</td>
            <td className="px-6 py-2 align">{el[i].supply}</td>
            <td className="px-6 py-2 align w-[4.5rem]">
              {el[i].volumeUsd24Hr}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AllTokens;
