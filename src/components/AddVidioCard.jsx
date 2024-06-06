import React from "react";
import VidioCard from "./VidioCard";

export default function AddVidioCard({ info }) {
  return (
    <div className="p-2 m-2 border-2 border-red-700">
      <VidioCard info={info} />
    </div>
  );
}
