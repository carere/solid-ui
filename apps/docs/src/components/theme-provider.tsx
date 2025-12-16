import {
  type Accessor,
  createContext,
  createSignal,
  onMount,
  type ParentProps,
  useContext
} from "solid-js"

export const THEMES = ["Vega", "Nova", "Maia", "Lyra", "Mira"] as const
export type THEME = (typeof THEMES)[number]

type ThemeContextType = {
  theme: Accessor<THEME>
  setTheme: (value: THEME) => void
}

const ThemeContext = createContext<ThemeContextType>()

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("[SolidUI]: `useTheme` must be used within a `ThemeProvider`")
  }
  return context
}

export function ThemeProvider(props: ParentProps) {
  const [theme, rawSetTheme] = createSignal<THEME>("Vega")

  const setTheme = (value: THEME) => {
    rawSetTheme(value)
    document.documentElement.setAttribute("data-cn-theme", value)
  }

  onMount(() => {
    document.documentElement.setAttribute("data-cn-theme", theme())
  })

  const context: ThemeContextType = {
    theme,
    setTheme
  }

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>
}
