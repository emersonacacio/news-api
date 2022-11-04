import { SelectHTMLAttributes } from "react"
import * as S from "./styles"

export function Button({
  children,
  ...props
}: SelectHTMLAttributes<HTMLButtonElement>) {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>
}
