"use client";

import Chat from "@/app/components/chat";
import Footer from "@/app/components/footer";
import PlayerGrid from "@/app/components/grid-player";
import { SocketContext } from "@/contexts/socket-context";
import { useContext, useEffect, useRef } from "react";

interface ISDPAnswer {
  sender: string;
  description: RTCSessionDescription;
}

export default function Room({ params }: { params: { id: string } }) {

  const { socket } = useContext(SocketContext);
  const peerConnections = useRef<Record<string, RTCPeerConnection>>({});

  useEffect(() => {
    socket?.on('connect', () => {
      socket.emit('subscribe', {
        roomId: params.id,
        socketId: socket.id
      });
    });

    socket?.on('new user', (data) => {
      console.log('new user trying to connect', data);

      createPeerConnection(data.socketId, false);

      socket.emit('new user start', {
        to: data.socketId,
        sender: socket.id
      });
    });

    socket?.on('new user start', (data) => {
      console.log('creating peer connection', data);
      createPeerConnection(data.sender, true);
    });

    socket?.on('sdp', (data) => handleSDPAnswer(data));
  }, [socket, params.id]);

  async function handleSDPAnswer(data: ISDPAnswer) {
    const peerConnection = peerConnections.current[data.sender];
    console.log(peerConnection);

    if (data.description.type === 'offer') {

      await peerConnection.setRemoteDescription(data.description);

      const sdpAnswer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(sdpAnswer);

      console.log('creating an answer', sdpAnswer);
      socket?.emit('sdp', {
        to: data.sender,
        sender: socket?.id,
        description: peerConnection.localDescription
      });
    } else if (data.description.type === 'answer') {
      console.log('receiving the answer');

      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(data.description)
      );
    }
  }

  async function createPeerConnection(socketId: string, createOffer: boolean) {
    console.log("Creating peerConnection with:", socketId);
    const config = {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    };

    const peer = new RTCPeerConnection(config);

    peerConnections.current[socketId] = peer;

    if (createOffer) {
      const peerConnection = peerConnections.current[socketId];

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      console.log('user creating an offer', offer);

      socket?.emit('sdp', {
        to: socketId,
        sender: socket?.id,
        description: peerConnection.localDescription
      });
    }
  }

  return (
    <main className="flex flex-col gap-8 mt-8 justify-between h-screen">
      <div className="flex gap-14 h-[80%] w-full">
        <PlayerGrid />

        <Chat roomId={params.id} />
      </div>

      <Footer />
    </main>
  )
}