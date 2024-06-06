import React from "react";

export default function VidioCard({ info }) {
  const { statistics, snippet } = info;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url} alt="" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}
