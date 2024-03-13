/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDataLogin {
  emailOrUsername: string
  password: string
}

export interface IDataSignup {
  name: string
  email: string
  username: string
  passwordSignup: string
  confirmPassword: string
}

export interface Response {
  code: number
  message: string
  data?: any
  field: string
}
