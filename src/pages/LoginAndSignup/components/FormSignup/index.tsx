/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

import { useTheme } from "../../../../contexts/ThemeContext"
import { Input } from "../Input"
import { Wrapper } from "./styles"
import { Button } from "../../../../components/Button"

interface FormSignupProps {
  flipForm: () => void
}

export function FormSignup({ flipForm }: FormSignupProps) {
  const { theme } = useTheme()
  const [isFormValid, setIsFormValid] = useState(false)
  const [inputInfo, setInputInfo] = useState({
    isValid: true,
    errorMessage: ""
  })
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confimPassword: ""
  })

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

    // try {
    // //   const response = await login(data)
    //   console.log(response)

    //   if (response.code !== 200) {
    //     setInputInfo({ isValid: false, errorMessage: response.message })
    //   } else {
    //     const { token, userId } = response.data

    //     localStorage.setItem("user", JSON.stringify({ token, userId }))

    //     navigate("/home")
    //   }
    // } catch (error: any) {
    //   console.log("Erro ao enviar formulário: ", error.message)
    // }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>Não tem uma conta?</h2>
      <Input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Nome de usuário"
        isValid={inputInfo.isValid}
        errorMessage={inputInfo.errorMessage}
      />
      <Input
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="E-mail"
        isValid={inputInfo.isValid}
        errorMessage={inputInfo.errorMessage}
      />
      <Input
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Username"
        isValid={inputInfo.isValid}
        errorMessage={inputInfo.errorMessage}
      />
      <Input
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Senha"
        isValid={inputInfo.isValid}
        errorMessage={inputInfo.errorMessage}
      />
      <Input
        name="confimPassword"
        value={data.confimPassword}
        onChange={handleChange}
        placeholder="Confime senha"
        isValid={inputInfo.isValid}
        errorMessage={inputInfo.errorMessage}
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
        <span>ou</span>
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
