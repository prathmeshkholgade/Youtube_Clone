import React from "react";

export default function ChatMessage({ name, text }) {
  return (
    <div className="flex items-center shadow-sm py-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt=""
        className="w-10 h-10 "
      />
      <p className="font-bold px-2">{name}</p>
      <p>{text}</p>
    </div>
  );
}
