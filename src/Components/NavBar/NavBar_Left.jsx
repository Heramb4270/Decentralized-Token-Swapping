import { Gi3DGlasses } from "react-icons/gi";

function NavBar_Left(props) {
  return (
    <div className="flex gap-16 items-center">
      {/* IMAGES */}
      <div>
        <Gi3DGlasses size={50} />
      </div>
      {/* MENUITEMS */}
      <div className="flex items-center gap-8 text-[#10002B]">
        {props.menuItem.map((elem, index) => (
          <p>{elem.name}</p>
        ))}
      </div>
    </div>
  );
}

export default NavBar_Left;
