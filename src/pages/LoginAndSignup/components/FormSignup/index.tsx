/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

import { useTheme } from "../../../../contexts/ThemeContext"
import { Input } from "../Input"
import { Wrapper } from "./styles"
import { Button } from "../../../../components/Button"
import { signup } from "../../../../services/auth.service"

interface FormSignupProps {
  flipForm: () => void
}

const resetForm = {
  name: "",
  email: "",
  username: "",
  passwordSignup: "",
  confirmPassword: ""
}

// type KeysInputError = "username" | "email" | "confirmPassword"

interface InputError {
  isValid: boolean
  errorMessage: string
}

export function FormSignup({ flipForm }: FormSignupProps) {
  const { theme } = useTheme()
  const [isFormValid, setIsFormValid] = useState(false)
  const [inputInfo, setInputInfo] = useState<Record<string, InputError>>({})
  const [data, setData] = useState(resetForm)

  useEffect(() => {
    const isValid = Object.values(data).every(value => value.trim() !== "")
    setIsFormValid(isValid)
  }, [data])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setData(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      if (data.passwordSignup !== data.confirmPassword) {
        setInputInfo({
          confirmPassword: {
            isValid: false,
            errorMessage: "As senhas não coincidem"
          }
        })
        return
      }

      setInputInfo({})

      const response = await signup(data)
      console.log(response)

      if (response.code === 201) {
        setInputInfo({})
        setData(resetForm)
        flipForm()
        return
      }

      setInputInfo({
        [response.field]: {
          isValid: false,
          errorMessage: response.message
        }
      })
    } catch (error: any) {
      console.log("Erro ao enviar formulário: ", error.message)
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>Não tem uma conta?</h2>
      <Input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <Input
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="E-mail"
        {...inputInfo.email}
      />
      <Input
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Nome de usuário"
        {...inputInfo.username}
      />
      <Input
        name="passwordSignup"
        value={data.passwordSignup}
        onChange={handleChange}
        placeholder="Senha"
      />
      <Input
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        placeholder="Confirme senha"
        {...inputInfo.confirmPassword}
      />

      <Button
        text="Criar"
        type="submit"
        backgroundColor={theme.colors.primary}
        color="white"
        borderColor={theme.colors.primary}
        isDisabled={!isFormValid}
      />

      <div>
        <hr />
        <span className="or">ou</span>
      </div>

      <Button
        text="Entrar na conta"
        type="button"
        backgroundColor={theme.colors.secondary}
        color={theme.colors.primary}
        borderColor={theme.colors.quinary}
        onClick={flipForm}
      />
    </Wrapper>
  )
}
