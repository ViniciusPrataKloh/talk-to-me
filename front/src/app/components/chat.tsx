import { SendHorizonal } from "lucide-react";
import Message from "./message";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "@/contexts/socket-context";

export type messageType = {
  message: string | undefined,
  roomId?: string | undefined,
  username: string | undefined,
  time: string | undefined
};

export default function Chat({ roomId }: { roomId: string }) {
  const currentMessage = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<messageType[]>([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.on('chat', (data) => {
      setMessages((state) => [...state, data]);
    })
  }, [socket]);

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (currentMessage.current && currentMessage.current?.value !== '') {
      const messageToSend = {
        message: currentMessage.current?.value,
        roomId,
        username: localStorage.getItem('username') as string,
        time: new Date().toLocaleTimeString()
      };

      socket?.emit('chat', messageToSend);
      setMessages((state) => [...state, messageToSend]);

      currentMessage.current.value = '';
    }
  }

  return (
    <section className="bg-gray-600 rounded-xl md:w-[20%] h-full p-6 md:flex flex-col justify-between hidden">
      <div className="space-y-5 overflow-y-auto">
        {messages.map((message) => {
          return (
            <Message
              key={message.time}
              username={message.username}
              time={message.time}
              message={message.message}
            />
          )
        })}
      </div>

      <form
        className="w-full bg-gray-500 rounded-md flex items-center justify-between gap-2 p-2 mt-2"
        onSubmit={(e) => sendMessage(e)}
      >
        <input
          type="text"
          id=""
          ref={currentMessage}
          className="bg-transparent w-full"
        />
        <button
          className="hover:text-gray-200"
          type="submit">
          <SendHorizonal size={24} />
        </button>
      </form>
    </section>
  )
}