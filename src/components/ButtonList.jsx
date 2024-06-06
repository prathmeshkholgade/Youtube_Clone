import React from "react";
import Button from "./Button";

export default function ButtonList() {
  const lists = [
    "All",
    "Gaminig",
    "Songs",
    "Live",
    "Cricket",
    "News",
    "Cooking",
    "Valentines",
    "History",
    "Comedy",
    "Podcast",
  ];
  return (
    <div className="flex">
      {lists.map((list, idx) => (
        <Button key={idx} name={list} />
      ))}
      
    </div>
  );
}
