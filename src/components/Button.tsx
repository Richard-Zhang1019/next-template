import { FC } from 'react'

interface ButtonProps {
  text: string
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-3 py-1 rounded-md shadow-md bg-slate-400 active:scale-90 transition-all">
      {text}
    </button>
  )
}
