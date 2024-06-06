import React from "react";
import Comments from "./Comments";
import CommentsLists from "./CommentsLists";

export default function CommentsContainer() {
  const commentsData = [
    {
      name: "prathmesh kholgade",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
      reply: [
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [],
        },
      ],
    },
    {
      name: "prathmesh kholgade",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
      reply: [
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [],
        },
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [],
        },
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [],
        },
      ],
    },
    {
      name: "prathmesh kholgade",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
      reply: [
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [
            {
              name: "prathmesh kholgade",
              text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
              reply: [
                {
                  name: "prathmesh kholgade",
                  text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
                  reply: [],
                },
              ],
            },
          ],
        },
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [
            {
              name: "prathmesh kholgade",
              text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
              reply: [
                {
                  name: "prathmesh kholgade",
                  text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
                  reply: [
                    {
                      name: "prathmesh kholgade",
                      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
                      reply: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "prathmesh kholgade",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
      reply: [
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [],
        },
        {
          name: "prathmesh kholgade",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  ",
          reply: [],
        },
      ],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold ">Comments : </h1>
      {/* <Comments  data={commentsData[0]}/> */}
      <CommentsLists comments={commentsData} />
    </div>
  );
}
