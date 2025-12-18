import { type Accessor, createContext, createSignal, type ParentProps, useContext } from "solid-js"

import { STYLES, type Style } from "~/registry/styles"

type DesignSystemContextType = {
  style: Accessor<Style>
  setStyle: (value: Style) => void
}

const DesignSystemContext = createContext<DesignSystemContextType>()

export function useDesignSystem() {
  const context = useContext(DesignSystemContext)
  if (context === undefined) {
    throw new Error("[SolidUI]: `useDesignSystem` must be used within a `DesignSystemProvider`")
  }
  return context
}

export function DesignSystemProvider(props: ParentProps) {
  const [style, rawSetStyle] = createSignal<Style>(STYLES[0])

  const setStyle = (value: Style) => {
    rawSetStyle(value)

    const body = document.body
    body.classList.forEach((cls) => {
      if (cls.startsWith("style-")) {
        body.classList.remove(cls)
      }
    })
    body.classList.add(`style-${value.name}`)
  }

  const context: DesignSystemContextType = {
    style,
    setStyle
  }

  return (
    <DesignSystemContext.Provider value={context}>{props.children}</DesignSystemContext.Provider>
  )
}
