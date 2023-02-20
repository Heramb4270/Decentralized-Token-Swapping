import { IoIosSearch } from "react-icons/io";

function NavBar_Middle(props) {
  return (
    <div className="bg-[#C77DFF] w-4/5 px-4 py-6 rounded-lg mx-0 my-auto">
      <div className="flex justify-center items-center gap-3 cursor-pointer">
        {/* IMAGE SEARCH */}
        <div>
          <IoIosSearch size={20}></IoIosSearch>
        </div>
        {/* INPUT SECTION */}
        <input
          type="text"
          placeholder="Search Tokens"
          className="bg-transparent outline-none border-none text-base "
        />
      </div>
    </div>
  );
}

export default NavBar_Middle;
