import Image from "next/image";
import FormWrapper from "./form-wrapper";

export default function JoinForm() {
  return (
    <FormWrapper>
      <input
        type="text"
        className="w-full rounded-lg py-2 px-4 bg-gray-500 text-gray-300"
        placeholder="Seu nome"
      />
      <input
        type="text"
        className="w-full rounded-lg py-2 px-4 bg-gray-500 text-gray-300"
        placeholder="ID da reunião"
      />

      <button className="bg-primary px-[200px] py-2 rounded-lg w-full font-bold mt-1 text-gray-900 hover:bg-primary/80 transition-colors">Entrar</button>
    </FormWrapper>
  );
}
