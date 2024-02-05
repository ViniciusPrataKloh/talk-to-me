"use client";

import { Mic, Video, ScreenShare, Phone, MicOff, VideoOff } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [micEnabled, setMicEnabled] = useState<boolean>(true);
  const [videoEnabled, setVideoEnabled] = useState<boolean>(true);
  const [isPresenting, setIsPresenting] = useState<boolean>(false);

  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0') + ":";
  const minutes = date.getMinutes().toString().padStart(2, '0');

  function handleMicToggle() {
    setMicEnabled(!micEnabled)
  }

  function handleVideoToggle() {
    setVideoEnabled(!videoEnabled)
  }

  function handlePresentation() {
    setIsPresenting(!isPresenting)
  }

  function handleExit() {

  }

  return (
    <footer className="fixed bottom-0 bg-black w-full mb-2">
      <div className="grid grid-cols-3 items-center">

        <span className="text-xl">{hours}{minutes}</span>

        <div className="w-full">
          <div className="flex flex-row gap-2">
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-gray-600 bg-gray-700 transition-colors"
              onClick={handleMicToggle}
            >
              {micEnabled ? <Mic size={24} /> : <MicOff size={24} className="text-red-700" />}
            </div>
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-gray-600 bg-gray-700 transition-colors"
              onClick={handleVideoToggle}
            >
              {videoEnabled ? <Video size={24} /> : <VideoOff size={24} className="text-red-600" />}
            </div>
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-gray-600 bg-gray-700 transition-colors"
              onClick={handlePresentation}
            >
              {isPresenting ? <ScreenShare size={24} className="text-green-600" /> : <ScreenShare size={24} />}
            </div>
            <div
              className="px-5 py-2 rounded-md cursor-pointer hover:bg-red-700/90 bg-red-700 transition-colors"
              onClick={handleExit}
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