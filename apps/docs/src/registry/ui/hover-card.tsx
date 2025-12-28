import type { JSX, ValidComponent } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import * as HoverCardPrimitive from "@kobalte/core/hover-card"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const HoverCard = (props: HoverCardPrimitive.HoverCardRootProps) => {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

const HoverCardTrigger = <T extends ValidComponent = "a">(
  props: PolymorphicProps<T, HoverCardPrimitive.HoverCardTriggerProps<T>>
) => {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
}

type HoverCardContentProps<T extends ValidComponent = "div"> =
  HoverCardPrimitive.HoverCardContentProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const HoverCardContent = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, HoverCardContentProps<T>>
) => {
  const props = mergeProps({}, rawProps)
  const [local, others] = splitProps(props as HoverCardContentProps, [
    "class",
    "children"
  ])

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        class={cn(
          "cn-hover-card-content z-50 origin-(--kb-hovercard-content-transform-origin) outline-hidden",
          local.class
        )}
        {...others}
      >
        {local.children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
