import { useState } from "react"

import { useTheme } from "../../../../contexts/ThemeContext"
import { Item } from "./styles"

interface ItemData {
  id: number
  text: string
  svgFileName: string
}

let id = 1

const itemsData: ItemData[] = []

function addItem(text: string, svgFileName: string) {
  const newItem = {
    id: id++,
    text,
    svgFileName
  }
  itemsData.push(newItem)
}

addItem("Página Inicial", "initial_page")
addItem("Explorar", "explore")
addItem("Perfil", "profile")
addItem("Configurações", "configuration")

export function Items() {
  const { theme } = useTheme()
  const [focusedItemId, setFocusedItemId] = useState<number | null>(null)

  function getSvgPath(
    themeTitle: string,
    fileName: string,
    isFocused: boolean
  ) {
    const themeFolder = themeTitle === "light" ? "light_color" : "dark_color"
    const focusSuffix = isFocused ? "_focused" : ""
    return `src/assets/Icons/${themeFolder}/${fileName}${focusSuffix}.svg`
  }

  const handleFocus = (id: number) => {
    setFocusedItemId(id)
  }

  const handleBlur = () => {
    setFocusedItemId(null)
  }

  return (
    <>
      {itemsData.map(item => {
        const svgPath = getSvgPath(
          theme.title,
          item.svgFileName,
          focusedItemId === item.id
        )

        return (
          <Item
            key={item.id}
            onClick={() => handleFocus(item.id)}
            onBlur={handleBlur}
          >
            <img src={svgPath} alt="Icon" />
            <span
              style={{ fontWeight: focusedItemId === item.id ? "bold" : "" }}
            >
              {item.text}
            </span>
          </Item>
        )
      })}
    </>
  )
}
