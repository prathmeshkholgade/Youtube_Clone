import React from "react";
import Comments from "./Comments";

export default function CommentsLists({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <div>
          <Comments data={comment} />
          <>
            <div className="ml-4 border-2 border-l-black">
              <CommentsLists comments={comment.reply} />
            </div>
          </>
        </div>
      ))}
    </>
  );
}
