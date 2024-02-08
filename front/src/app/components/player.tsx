"use client";

import { useRef } from "react";

export default function Player() {
  const userVideo = useRef<HTMLVideoElement>(null);

  async function initCamera() {
    const video = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: {
        echoCancellation: true,
        noiseSuppression: true
      }
    });

    if (userVideo.current) userVideo.current.srcObject = video;
  }

  initCamera();

  return (
    <div className="bg-gray-900 w-full h-full rounded-md p-2 relative">
      <video
        className="h-full w-full"
        autoPlay
        playsInline
        ref={userVideo}
      />
      <span className="absolute bottom-3">{localStorage.getItem('username')}</span>
    </div>
  )
}