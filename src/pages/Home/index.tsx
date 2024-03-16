import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Wrapper } from "./styles"
import { Nav } from "./components/Nav"
import { Main } from "./components/Main"
import { Aside } from "./components/Aside"

export function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const userStorage = localStorage.getItem("user")

    if (!userStorage) navigate("/")
  }, [navigate])

  return (
    <Wrapper>
      <Nav />
      <Main />
      <Aside />
    </Wrapper>
  )
}
