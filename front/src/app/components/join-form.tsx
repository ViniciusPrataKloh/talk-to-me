import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const joinRoomFormSchema = zod.object({
  name: zod.string(),
  id: zod.string(),
});

type joinRoomFormType = zod.infer<typeof joinRoomFormSchema>;

export default function JoinForm() {
  const { register, handleSubmit, formState } = useForm<joinRoomFormType>({
    resolver: zodResolver(joinRoomFormSchema)
  });

  const router = useRouter();

  function onJoinSubmit(data: joinRoomFormType): void {
    if (data.name && data.name !== '') {
      localStorage.setItem('username', data.name);
      router.push(`/room/${data.id}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onJoinSubmit)}
      className="flex flex-col items-center justify-center gap-11 bg-gray-700 w-[587px] h-[338px] rounded-b-xl px-14"
    >
      <input
        type="text"
        className="w-full rounded-lg py-2 px-4 bg-gray-500 text-gray-300"
        placeholder="Seu nome"
        {...register('name')}
      />
      <input
        type="string"
        className="w-full rounded-lg py-2 px-4 bg-gray-500 text-gray-300"
        placeholder="ID da reunião"
        {...register('id')}
      />

      <button
        className="bg-primary px-[200px] py-2 rounded-lg w-full font-bold mt-1 text-gray-900 hover:bg-primary/80 transition-colors"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}
