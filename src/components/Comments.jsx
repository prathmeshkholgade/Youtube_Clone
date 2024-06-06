import React from "react";

export default function Comments({ data }) {
  const { name, text, reply } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="" className="w-10 h-10 "
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
