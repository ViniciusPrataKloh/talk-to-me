"use client";

import Chat from "@/app/components/chat";
import Footer from "@/app/components/footer";
import PlayerGrid from "@/app/components/grid-player";
import Player from "@/app/components/player";
import { SocketContext } from "@/contexts/socket-context";
import { useContext, useEffect, useRef, useState } from "react";

interface ISDPAnswer {
  sender: string;
  description: RTCSessionDescription;
}

interface IIceCandidate {
  candidate: RTCIceCandidate;
  sender: string;
}

export default function Room({ params }: { params: { id: string } }) {

  const [remoteStreams, setRemoteStreams] = useState<MediaStream[]>([]);
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

    socket?.on('ice candidate', (data) => handleIceCandidate(data));
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

  async function handleIceCandidate(data: IIceCandidate) {
    const peerConnection = peerConnections.current[data.sender];

    if (data.candidate) {
      await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
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

      console.log('user is creating an offer', offer);

      socket?.emit('sdp', {
        to: socketId,
        sender: socket?.id,
        description: peerConnection.localDescription
      });
    }

    const peerConnection = peerConnections.current[socketId];

    peerConnection.ontrack = (event) => {
      const remoteStream = event.streams[0];

      // setRemoteStreams(...remoteStreams, remoteStream);
    };

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket?.emit('ice candidate', {
          to: socketId,
          sender: socket.id,
          candidate: event.candidate
        })
      }
    };
  }

  return (
    <main className="flex flex-1 flex-col gap-8 mt-8 justify-between h-[calc(100vh-96px-48px)]">
      {/* <div className="flex gap-14 h-[80%] w-full "> */}
      <div className="flex flex-row gap-14 h-[95%] w-full rounded-md col-span-3">
        {/* <PlayerGrid /> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <Player />
          <Player />
          <Player />
          <Player />
        </div>
        <Chat roomId={params.id} />
      </div>

      <Footer />
    </main>
  )
}