import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Head from "./Head";

export default function Body() {
  return (
    <div className="flex ">
    
      <SideBar />
      <Outlet/>
    </div>
  );
}
