import NavBar_Left from "./NavBar_Left";
import NavBar_Middle from "./NavBar_Middle";
import NavBar_Right from "./NavBar_Right";
import Link from "../../Links/Link";

function NavBar(props) {
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
    <div className="mx-8 align-middle my-auto">
      {/* NAVBAR BOX */}
      <div className="grid grid-cols-3 items-center justify-between gap-4">
        {/* NAVABAR LEFT */}
        <NavBar_Left menuItem={menuItem} renderGPT={props.renderGPT} />
        {/* NAVABAR MIDDLE  */}

        <NavBar_Middle />

        {/* NAVABAR RIGHT  */}

        <NavBar_Right
          provider={props.provider}
          isConnected={props.isConnected}
          signerAddress={props.signerAddress}
          getSigner={props.getSigner}
        />
      </div>
    </div>
  );
}
export default NavBar;
