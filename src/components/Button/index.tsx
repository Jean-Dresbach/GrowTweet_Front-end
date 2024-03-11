import { useEffect, useState } from "react"

import { Wrapper } from "./styles"

interface ButtonProps {
  text: string
  type: "button" | "reset" | "submit"
  backgroundColor: string
  color: string
  borderColor: string
  isDisabled?: boolean
  onClick?: () => void
}

export function Button({
  text,
  type,
  backgroundColor,
  color,
  borderColor,
  isDisabled = false,
  onClick
}: ButtonProps) {
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(isDisabled)
  }, [isDisabled])

  return (
    <Wrapper
      className={backgroundColor === "#000000" ? "darker" : ""}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: `1px solid ${borderColor}`
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Wrapper>
  )
}
