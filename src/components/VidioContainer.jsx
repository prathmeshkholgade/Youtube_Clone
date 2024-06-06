import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../features/data/dataSlice";
import VidioCard from "./VidioCard";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import AddVidioCard from "./AddVidioCard";
const URl = import.meta.env.VITE_YOUTUBE_API;
export default function VidioContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data?.data);

  useEffect(() => {
    getVidios();
    // console.log(data);
  }, []);
  const getVidios = async () => {
    const res = await fetch(URl);
    const jsonData = await res.json();
    console.log(jsonData.items);
    dispatch(addData(jsonData.items));
    console.log(data);
    // if (data) {

    // }
  };
  // if(!data) return null
  return (
    <div className="flex flex-wrap justify-center">
      {data && <AddVidioCard  info={data[0]} />}
      {data &&
        data.map((vidio) => (
          <NavLink to={"/watch?v=" + vidio.id}>
            <VidioCard key={vidio.id} info={vidio} />
          </NavLink>
        ))}
    </div>
  );
}
