"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
      <div>
        <input style={{padding:10}} type="text" value={roomId} placeholder="Enter room ID" onChange={(e) => setRoomId(e.target.value)} />
       <button style={{padding:10}} onClick={()=>{
        router.push(`/room/${roomId}`);
      }}>Join room</button>
      </div>
     

    </div>
  );
}
