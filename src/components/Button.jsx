import React from "react";

export default function Button({ name, color }) {
  return (
    <div>
      <button
        className={`px-5 m-2 py-2 rounded-lg ${color ? color : "bg-gray-100"}`}
      >
        {name}
      </button>
    </div>
  );
}
