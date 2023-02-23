import { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import { HiLockClosed } from "react-icons/hi2";
import { TiCog } from "react-icons/ti";
import Token2 from "./Token2";
function Token(props) {
  return (
    <>
      <Token2 setOpenSetting={props.setOpenSetting} />
      // TOKEN
    </>
  );
}

export default Token;
