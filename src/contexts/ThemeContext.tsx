import { ReactNode, createContext, useContext, useState } from "react"

type Theme = typeof light

import light from "../themes/light"
import dark from "../themes/dark"
import darker from "../themes/darker"

const themes = [light, dark, darker]

interface IThemeContext {
  theme: Theme
  toggleTheme: (themeTitle: "light" | "dark" | "darker") => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(darker)

  function toggleTheme(themeTitle: "light" | "dark" | "darker") {
    setTheme(themes.find(t => t.title === themeTitle) as Theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
