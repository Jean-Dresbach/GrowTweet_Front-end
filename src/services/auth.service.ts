import { isAxiosError } from "axios"
import { IDataLogin, IDataSignup, Response } from "../types/auth"
import { api } from "./api.service"

export async function login(data: IDataLogin): Promise<Response> {
  try {
    const response = await api.post("/login", data)

    return response.data
  } catch (error) {
    console.log(error)
    if (isAxiosError(error)) {
      return error.response?.data
    }
    throw new Error("Erro interno do servidor.")
  }
}

export async function signup(data: IDataSignup): Promise<Response> {
  try {
    const newUser = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.passwordSignup
    }
    const response = await api.post("/users", newUser)

    return response.data
  } catch (error) {
    console.log(error)
    if (isAxiosError(error)) {
      return error.response?.data
    }
    throw new Error("Erro interno do servidor.")
  }
}
