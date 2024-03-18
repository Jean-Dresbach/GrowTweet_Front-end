import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginAndSignup } from "../pages/LoginAndSignup"
import { Home } from "../pages/Home"
import { Nav } from "../components/Nav"

const router = createBrowserRouter([
  {
    path: "/login&signup",
    element: <LoginAndSignup />
  },
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
