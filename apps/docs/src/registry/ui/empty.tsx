import type { ComponentProps, JSX, ValidComponent } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

type EmptyProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const Empty = <T extends ValidComponent = "div">(rawProps: PolymorphicProps<T, EmptyProps<T>>) => {
  const [local, others] = splitProps(rawProps as EmptyProps, ["class", "children"])
  return (
    <div
      class={cn(
        "cn-empty flex w-full min-w-0 flex-1 flex-col items-center justify-center text-balance text-center",
        local.class
      )}
      data-slot="empty"
      {...others}
    >
      {local.children}
    </div>
  )
}

type EmptyHeaderProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const EmptyHeader = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, EmptyHeaderProps<T>>
) => {
  const [local, others] = splitProps(rawProps as EmptyHeaderProps, ["class", "children"])
  return (
    <div
      class={cn("cn-empty-header flex max-w-sm flex-col items-center", local.class)}
      data-slot="empty-header"
      {...others}
    >
      {local.children}
    </div>
  )
}

const emptyMediaVariants = cva(
  "cn-empty-media flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cn-empty-media-default",
        icon: "cn-empty-media-icon"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

type EmptyMediaProps<T extends ValidComponent = "div"> = ComponentProps<T> &
  VariantProps<typeof emptyMediaVariants> & {
    class?: string | undefined
    children?: JSX.Element
  }

const EmptyMedia = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, EmptyMediaProps<T>>
) => {
  const props = mergeProps({ variant: "default" as const }, rawProps)
  const [local, others] = splitProps(props as EmptyMediaProps, ["class", "children", "variant"])
  return (
    <div
      class={cn(emptyMediaVariants({ variant: local.variant, className: local.class }))}
      data-slot="empty-icon"
      data-variant={local.variant}
      {...others}
    >
      {local.children}
    </div>
  )
}

type EmptyTitleProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const EmptyTitle = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, EmptyTitleProps<T>>
) => {
  const [local, others] = splitProps(rawProps as EmptyTitleProps, ["class", "children"])
  return (
    <div class={cn("cn-empty-title", local.class)} data-slot="empty-title" {...others}>
      {local.children}
    </div>
  )
}

type EmptyDescriptionProps<T extends ValidComponent = "p"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const EmptyDescription = <T extends ValidComponent = "p">(
  rawProps: PolymorphicProps<T, EmptyDescriptionProps<T>>
) => {
  const [local, others] = splitProps(rawProps as EmptyDescriptionProps, ["class", "children"])
  return (
    <div
      class={cn(
        "cn-empty-description text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        local.class
      )}
      data-slot="empty-description"
      {...others}
    >
      {local.children}
    </div>
  )
}

type EmptyContentProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const EmptyContent = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, EmptyContentProps<T>>
) => {
  const [local, others] = splitProps(rawProps as EmptyContentProps, ["class", "children"])
  return (
    <div
      class={cn(
        "cn-empty-content flex w-full min-w-0 max-w-sm flex-col items-center text-balance",
        local.class
      )}
      data-slot="empty-content"
      {...others}
    >
      {local.children}
    </div>
  )
}

export { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia }
