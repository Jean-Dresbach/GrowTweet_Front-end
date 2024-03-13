import { ChangeEvent, useEffect, useState } from "react"

import { Wrapper } from "./styles"

interface InputProps {
  placeholder: string
  name: string
  value: string
  isValid?: boolean
  errorMessage?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  placeholder,
  name,
  onChange,
  value,
  errorMessage = "",
  isValid = true
}: InputProps) {
  const [inputClass, setInputClass] = useState("")

  useEffect(() => {
    setInputClass(isValid ? "" : "invalid")
  }, [isValid])

  return (
    <Wrapper>
      <input
        key={name}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder=" "
        className={inputClass}
      />
      <label htmlFor={name}>{placeholder}</label>
      {!isValid && <span>{errorMessage}</span>}
    </Wrapper>
  )
}
