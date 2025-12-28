import type { ComponentProps, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

type KbdProps<T extends ValidComponent = "kbd"> = ComponentProps<T> & {
  class?: string | undefined
}

const Kbd = <T extends ValidComponent = "kbd">(rawProps: PolymorphicProps<T, KbdProps<T>>) => {
  const [local, others] = splitProps(rawProps as KbdProps, ["class"])
  return (
    <kbd
      data-slot="kbd"
      class={cn(
        "cn-kbd pointer-events-none inline-flex items-center justify-center select-none",
        local.class
      )}
      {...others}
    />
  )
}

type KbdGroupProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
}

const KbdGroup = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, KbdGroupProps<T>>
) => {
  const [local, others] = splitProps(rawProps as KbdGroupProps, ["class"])
  return (
    <kbd data-slot="kbd-group" class={cn("cn-kbd-group inline-flex items-center", local.class)} {...others} />
  )
}

export { Kbd, KbdGroup }
