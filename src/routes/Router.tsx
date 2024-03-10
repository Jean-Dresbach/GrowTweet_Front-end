import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginAndSignup } from "../pages/LoginAndSignup"
import { Home } from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginAndSignup />
  },
  {
    path: "/home",
    element: <Home />
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
