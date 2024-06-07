import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  const isMenu = useSelector((state) => state.app.isMenuOpen);
  if (!isMenu) return null;
  return (
    <div className="w-48 shadow-lg p-5 mt-20 fixed h-full bg-white ">
      <ul>
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold mt-4">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>PlayList</li>
        <li>Your Vidios</li>
        <li>Watch Letter</li>
      </ul>
      <h1 className="font-bold mt-4">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
    </div>
  );
}
