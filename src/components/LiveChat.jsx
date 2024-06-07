import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../features/Chat/ChatSlice";
import { generate, makeid } from "../utils/helper";
// import {}
export default function LiveChat() {
  const [liveMsg, setliveMsg] = useState("");
  const dispatch = useDispatch();
  const chatMsg = useSelector((state) => state.message.messages);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMsg({
        name: "Prathmesh",
        text: liveMsg,
      }),
      setliveMsg("")
    );
  };
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMsg({
          name: generate(),
          text: makeid(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <h2>Live Chat :</h2>
      <div className="bg-slate-100 h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMsg &&
          chatMsg.map((chat, idx) => (
            <ChatMessage key={idx} name={chat.name} text={chat.text} />
          ))}
      </div>
      <div className="w-full p-2 ml-2 border border-black">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={liveMsg}
            onChange={(e) => setliveMsg(e.target.value)}
            placeholder="chat"
            className="w-96 bg-gray-200 px-4 placeholder:ml-8"
          />
          <button className="mx-2 px-2 bg-green-300 rounded-md">Send</button>
        </form>
      </div>
    </>
  );
}
