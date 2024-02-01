import { SendHorizonal } from "lucide-react";
import Message from "./message";

export default function Chat() {
  return (
    <section className="bg-gray-600 rounded-xl w-full h-full p-6 col-span-2 flex flex-col justify-between">
      <div className="space-y-5">
        <Message />
        <Message />
        <Message />
      </div>

      <form className="w-full bg-gray-500 rounded-md flex items-center justify-between gap-2 p-2">
        <input type="text" id="message" className="bg-transparent w-full" />
        <button>
          <SendHorizonal size={24} />
        </button>
      </form>
    </section>
  )
}