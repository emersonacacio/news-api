import { SelectHTMLAttributes } from "react"
import * as S from "./styles"

export function Input({ ...props }: SelectHTMLAttributes<HTMLInputElement>) {
  return <S.InputWrapper {...props} />
}
