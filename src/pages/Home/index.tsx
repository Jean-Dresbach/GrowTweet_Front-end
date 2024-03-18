import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Main } from "./components/Main"
import { Aside } from "./components/Aside"

export function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const userStorage = localStorage.getItem("user")

    if (!userStorage) navigate("/login&signup")
  }, [navigate])

  return (
    <>
      <Main />
      <Aside />
    </>
  )
}
