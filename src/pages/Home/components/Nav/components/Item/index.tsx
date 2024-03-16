import { useState } from "react"
import { Wrapper } from "./styles"

interface ItemProps {
  icon: string
  focusedIcon: string
  text: string
  isFocused?: boolean
}

export function Item({
  text,
  focusedIcon,
  icon,
  isFocused = false
}: ItemProps) {
  const [focused, setFocused] = useState(isFocused)

  return (
    <Wrapper onFocus={() => setFocused(true)}>
      <img src={focused ? "../../" + focusedIcon : "../../" + icon} />
      <span>{text}</span>
    </Wrapper>
  )
}
