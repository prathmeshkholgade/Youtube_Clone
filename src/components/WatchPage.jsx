import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../features/app/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import YoutubeButton from "./YoutubeButton";
import LiveChat from "./LiveChat";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  dispatch(closeMenu());
  return (
    <div className="mt-20 w-full">
      <div className="flex">
        <div className="p-2">
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full"> 
          <LiveChat/>
        </div>
      </div>
      <YoutubeButton />
      <CommentsContainer />
      {/* <div>
       
      </div> */}
    </div>
  );
}
