import { ThemeProvider } from "styled-components"

import Routes from "./routes/Router"
import GlobalStyles from "./styles/global"
import { useTheme } from "./contexts/ThemeContext"

export function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}
