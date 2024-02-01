"use client";

import { useState } from "react";
import JoinForm from "./join-form";
import CreateForm from "./create-form";

export default function FormRoomSelect() {
  const [selectedRoom, setSelectedRoom] = useState<'join' | 'create'>('join');

  function changeSelectedRoom(room: 'join' | 'create') {
    setSelectedRoom(room)
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 w-full text-center">
        <span
          className={`cursor-pointer p-4  ${selectedRoom === 'join' && ' bg-gray-700 rounded-t-lg  text-primary' || 'bg-transparent'}`}
          onClick={() => changeSelectedRoom('join')}
        >
          Ingressar
        </span>
        <span
          className={`cursor-pointer p-4  ${selectedRoom === 'create' && 'bg-gray-700 rounded-t-xl text-primary' || 'bg-transparent'}`}
          onClick={() => changeSelectedRoom('create')}
        >
          Nova reunião
        </span>
      </div>

      {selectedRoom === 'join' ? <JoinForm /> : <CreateForm />}

    </div >
  )
}