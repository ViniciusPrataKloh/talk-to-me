import { SendHorizonal } from "lucide-react";
import Message from "./message";
import { useState } from "react";

export default function Chat() {
  return (
    <section className="bg-gray-600 rounded-xl md:w-[20%] h-full p-6 md:flex flex-col justify-between hidden">
      <div className="space-y-5 overflow-y-auto">
        <Message />
        <Message />
      </div>

      <form className="w-full bg-gray-500 rounded-md flex items-center justify-between gap-2 p-2 mt-2">
        <input type="text" id="message" className="bg-transparent w-full" />
        <button className="hover:text-gray-200">
          <SendHorizonal size={24} />
        </button>
      </form>
    </section>
  )
}