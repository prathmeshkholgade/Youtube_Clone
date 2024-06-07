import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../features/app/appSlice";
import { useEffect, useState } from "react";
import { addChache } from "../features/search/searchSlice";
const suggestionUrl = import.meta.env.VITE_YOUTUBESEARCH_API;
export default function Head() {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const [showSuggestion, setshowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setshowSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestion = async () => {
    console.log("API CALL - ", searchQuery);
    const res = await fetch(suggestionUrl + searchQuery);
    const jsonRes = await res.json();
    console.log(jsonRes[1]);
    setSuggestion(jsonRes[1]);
    dispatch(
      addChache({
        [searchQuery]: jsonRes[1],
      })
    );
  };

  return (
    <div className=" grid grid-flow-col p-2 mx-2 shadow-lg fixed top-0 left-0 right-0 bg-white">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
          className="h-12 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt=""
          className="h-14 mx-2 cursor-pointer"
        />
      </div>
      <div className="col-span-10 px-10 ">
        <div
          className="w-full
        "
        >
          <input
            type="text"
            className="w-1/2  border border-gray-400 p-2 rounded-l-full"
            placeholder="Search"
            onChange={(e) => setsearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => setshowSuggestion(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed  bg-white py-2  px-2 w-[32rem] shadow-lg rounded-lg ">
            <ul className="">
              {suggestion.map((s) => (
                <li key={s} className=" shadow-sm py-1 px-1 hover:bg-gray-100">
                  {" "}
                  <i className="fa-solid fa-magnifying-glass mx-2"></i> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user"
          className="h-12"
        />
      </div>
    </div>
  );
}
