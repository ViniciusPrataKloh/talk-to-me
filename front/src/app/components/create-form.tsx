"use client";

import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const createRoomFormSchema = zod.object({
  name: zod.string()
});

type createRoomFormType = zod.infer<typeof createRoomFormSchema>;

export default function CreateForm() {
  const { register, handleSubmit, formState } = useForm<createRoomFormType>({
    resolver: zodResolver(createRoomFormSchema)
  });

  const router = useRouter();

  function onCreateSubmit(data: createRoomFormType): void {
    if (data.name && data.name !== '') {
      localStorage.setItem('username', data.name);

      const roomId = Math.random().toString(36).substring(2, 7);
      window.location.href = `/room/${roomId}`;
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onCreateSubmit)}
      className="flex flex-col items-center justify-center gap-11 bg-gray-700 w-[587px] h-[338px] rounded-b-xl px-14"
    >
      <input
        type="text"
        className="w-full rounded-lg py-2 px-4 bg-gray-500 text-gray-300"
        placeholder="Seu nome"
        required
        {...register('name')}
      />

      <button className="bg-primary text-gray-900 px-[200px] py-2 rounded-lg w-full font-bold mt-1">Entrar</button>
    </form>
  );
}
