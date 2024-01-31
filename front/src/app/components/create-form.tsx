import FormWrapper from "./form-wrapper";

export default function CreateForm() {
  return (
    <FormWrapper>
      <input
        type="text"
        className="w-full rounded-lg py-2 px-4 bg-gray-500 text-gray-300"
        placeholder="Seu nome"
      />

      <button className="bg-primary text-gray-900 px-[200px] py-2 rounded-lg w-full font-bold mt-1">Entrar</button>
    </FormWrapper>
  );
}
