import { Mic, Video, ScreenShare, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 w-fullitems-center">
      <span className="left-0">09:05</span>

      <div className="w-full">
        <div className="flex flex-row transform -translate-x-1/4 gap-2">
          <div className="px-5 py-2 rounded-md bg-gray-700">
            {/* <Image src="/icon-mic.svg" alt="Ícone de microfone" width={22} height={22} /> */}
            <Mic size={24} />
          </div>
          <div className="px-5 py-2 rounded-md bg-gray-700">
            {/* <Image src="/icon-video.svg" alt="Ícone de video" width={22} height={22} /> */}
            <Video size={24} />
          </div>
          <div className="px-5 py-2 rounded-md bg-gray-700">
            {/* <Image src="/icon-desktop.svg" alt="Ícone de desktop" width={22} height={22} /> */}
            <ScreenShare size={24} />
          </div>
          <div className="px-5 py-2 rounded-md bg-primary">
            {/* <Image src="/icon-phone.svg" alt="telefone" width={22} height={22} /> */}
            <div className="transform rotate-90">
              <Phone size={24} className="transform rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}