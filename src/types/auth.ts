/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IData {
  emailOrUsername: string
  password: string
}

export interface LoginResponse {
  code: number
  message: string
  data?: any
}
