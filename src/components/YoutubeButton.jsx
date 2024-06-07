import React from "react";
import Button from "./Button";
import LikeButton from "./LikeButton";

export default function YoutubeButton() {
  return (
    <div
      className="flex
    "
    >
      <Button name={"Subcribe"} color={"bg-red-500"} />
      <LikeButton />
      <Button name={"Share"} color={""} />
      <Button name={"Download"} color={""} />
    </div>
  );
}
