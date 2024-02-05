import { Mic, Video, ScreenShare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-black w-full">
      <div className="grid grid-cols-3 items-center">

        <span className="text-xl">09:05</span>

        <div className="w-full">
          <div className="flex flex-row gap-2">
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-gray-600 bg-gray-700 transition-colors"
            // onClick={() => { }}
            >
              <Mic size={24} />
            </div>
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-gray-600 bg-gray-700 transition-colors"
            // onClick={() => { }}
            >
              <Video size={24} />
            </div>
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-gray-600 bg-gray-700 transition-colors"
            // onClick={() => { }}
            >
              <ScreenShare size={24} />
            </div>
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-red-700/90 bg-red-700 transition-colors"
            // onClick={() => { }
            >
              <div className="transform rotate-90">
                <Phone size={24} className="transform rotate-45" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}