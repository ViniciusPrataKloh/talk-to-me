import { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

export default function Container({ children }: IProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {children}
    </div>
  )
}