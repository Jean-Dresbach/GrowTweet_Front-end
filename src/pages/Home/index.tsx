import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const userStorage = localStorage.getItem("user")

    if (!userStorage) navigate("/")
  }, [navigate])

  return <h1>Home</h1>
}
