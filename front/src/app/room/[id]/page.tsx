"use client";

import Chat from "@/app/components/chat";
import Footer from "@/app/components/footer";
import PlayerGrid from "@/app/components/grid-player";
import { SocketContext } from "@/contexts/socket-context";
import { useContext, useEffect } from "react";

export default function Room({ params }: { params: { id: string } }) {

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.on('connect', () => {
      console.log('Connected');

      socket.emit('subscribe', {
        roomId: params.id,
        socketId: socket.id
      })
    })
  }, [socket]);

  return (
    <main className="flex flex-col gap-8 mt-8 justify-between h-screen">
      <div className="flex gap-14 h-[80%] w-full">
        <PlayerGrid />

        <Chat />
      </div>

      <Footer />
    </main>
  )
}