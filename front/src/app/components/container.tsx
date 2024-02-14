import { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

export default function Container({ children }: IProps) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 h-[calc(100vh - 100px)]">
      {children}
    </div>
  )
}