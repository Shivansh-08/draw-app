import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket(){
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjQ0NmYwZS0zYmZiLTRkOTEtYTRlNi0yYjE0ZjdkN2Y1ZjkiLCJpYXQiOjE3NTA0MjY4OTN9.pQlUDyXp6L37PJrRddzFniq-F3NaQbZRbJ7bN7dqEyA`);
        ws.onopen=()=>{
            setLoading(false);
            setSocket(ws);
        }   
    },[]);

    return {loading,socket}
}