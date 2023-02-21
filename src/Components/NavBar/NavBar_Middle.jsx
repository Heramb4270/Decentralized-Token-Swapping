import { IoIosSearch } from "react-icons/io";

function NavBar_Middle(props) {
  return (
    <div className="bg-[#D01257] w-11/12 px-3 py-3 rounded-lg mx-0 my-3">
      <div className="flex items-center gap-3 cursor-pointer">
        {/* IMAGE SEARCH */}
        <div>
          <IoIosSearch className="text-white" size={20}></IoIosSearch>
        </div>
        {/* INPUT SECTION */}
        <input
          type="text"
          placeholder="Search Tokens"
          className="bg-transparent outline-none w-10/12 text-white placeholder:text-slate-50 border-none text-base"
        />
      </div>
    </div>
  );
}

export default NavBar_Middle;
