import { Gi3DGlasses } from "react-icons/gi";

function NavBar_Left(props) {
  return (
    <div className="flex gap-16 items-center font-semibold">
      {/* IMAGES */}
      <div>
        <Gi3DGlasses className="text-[#D01257]" size={50} />
      </div>
      {/* MENUITEMS */}
      <div className="flex items-center gap-8 text-[#FB90B7]">
        {props.menuItem.map((elem, index) => (
          <p>{elem.name}</p>
        ))}
      </div>
    </div>
  );
}

export default NavBar_Left;
