import NavBar_Left from "./NavBar_Left";
import NavBar_Middle from "./NavBar_Middle";
import NavBar_Right from "./NavBar_Right";
import Link from "../../Links/Link";
function NavBar() {
  const menuItem = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pool",
      link: "/",
    },
  ];

  return (
    //NAVBAR
    <div className="w-11/12 mx-8 my-auto">
      {/* NAVBAR BOX */}
      <div className="grid grid-cols-3 items-center justify-between gap-4">
        {/* NAVABAR LEFT */}
        <NavBar_Left menuItem={menuItem} />
        {/* NAVABAR MIDDLE  */}

        <NavBar_Middle />

        {/* NAVABAR RIGHT  */}

        <NavBar_Right />
      </div>
    </div>
  );
}
export default NavBar;
