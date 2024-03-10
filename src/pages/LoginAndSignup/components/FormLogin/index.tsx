/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

import { useTheme } from "../../../../contexts/ThemeContext"
import { login } from "../../../../services/auth.service"
import { Input } from "../Input"
import { Wrapper } from "./styles"
import { Button } from "../../../../components/Button"

export function FormLogin() {
  // const navigate = useNavigate()
  const { theme } = useTheme()
  const [isFormValid, setIsFormValid] = useState(false)
  const [inputInfo, setInputInfo] = useState({
    isValid: true,
    errorMessage: ""
  })
  const [data, setData] = useState({
    emailOrUsername: "",
    password: ""
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

    try {
      const response = await login(data)
      console.log(response)

      if (response.code !== 200) {
        setInputInfo({ isValid: false, errorMessage: response.message })
      } else {
        const { token, userId } = response.data

        localStorage.setItem("user", JSON.stringify({ token, userId }))

        // navigate("/home")
      }
    } catch (error: any) {
      console.log("Erro ao enviar formulário: ", error.message)
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>Ja tem uma conta?</h2>
      <Input
        name="emailOrUsername"
        value={data.emailOrUsername}
        onChange={handleChange}
        placeholder="E-mail ou nome de usuário"
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

      <Button
        text="Entrar"
        type="submit"
        backgroundColor={theme.colors.primary}
        color={theme.colors.senary}
        borderColor={theme.colors.primary}
        isDisabled={!isFormValid}
      />

      <div>
        <hr />
        <span>ou</span>
      </div>

      <Button
        text="Criar conta"
        type="button"
        backgroundColor={theme.colors.secondary}
        color={theme.colors.primary}
        borderColor={theme.colors.quinary}
      />
    </Wrapper>
  )
}
