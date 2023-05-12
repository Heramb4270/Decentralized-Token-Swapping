import { Gi3DGlasses } from "react-icons/gi";
import {Link, Route, Routes} from 'react-router-dom';

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
          <Link to={elem.link}><p>{elem.name}</p></Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar_Left;
