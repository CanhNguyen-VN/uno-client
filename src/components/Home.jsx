import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../context/ContextProvider";
import { socket } from "../context/socketProvider";

function Home() {
  const { userName, setUserName, room, setRoom, users, setUsers } =
    useGameContext();
  const joinRoom = () => {
    if (userName && room) {
      socket.emit("join-room", { room, userName });
    }
  };

  useEffect(() => {
    socket.on("users-login", (data) => {
      setUsers(data);
    });
  }, [socket]);
  return (
    <div>
      <label htmlFor="">Name: </label>
      <input
        placeholder="John..."
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label htmlFor="">Room: </label>
      <input
        placeholder="123..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <Link
        to={userName && room ? "/uno" : "/"}
        className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
      >
        <button onClick={joinRoom}>Join game</button>
      </Link>
    </div>
  );
}

export default Home;
