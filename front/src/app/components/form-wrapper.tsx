import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export default function FormWrapper({ children }: IProps) {
  return (
    <form className="flex flex-col items-center justify-center gap-11 bg-gray-700 w-[587px] h-[338px] rounded-b-xl px-14">
      {children}
    </form>
  )
}