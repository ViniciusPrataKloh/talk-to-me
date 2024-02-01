import Chat from "@/app/components/chat";
import Footer from "@/app/components/footer";
import Message from "@/app/components/message";
import Player from "@/app/components/player";

import { SendHorizonal } from "lucide-react";

export default function Room() {
  return (
    <main className="h-[850px] flex flex-col gap-8 mt-8 justify-between">
      <div className="flex-1 grid grid-cols-7 gap-8">
        <Player />

        <Chat />
      </div>

      <Footer />
    </main>
  )
}