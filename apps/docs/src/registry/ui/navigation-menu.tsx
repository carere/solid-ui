import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import * as NavigationMenuPrimitive from "@kobalte/core/navigation-menu"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

type NavigationMenuProps<T extends ValidComponent = "nav"> =
  NavigationMenuPrimitive.NavigationMenuRootProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const NavigationMenu = <T extends ValidComponent = "nav">(
  rawProps: PolymorphicProps<T, NavigationMenuProps<T>>
) => {
  const props = mergeProps({ gutter: 4 }, rawProps)
  const [local, others] = splitProps(props as NavigationMenuProps, ["class", "children"])
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      class={cn(
        "cn-navigation-menu group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        local.class
      )}
      {...others}
    >
      {local.children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
}

type NavigationMenuMenuProps<T extends ValidComponent = "div"> =
  NavigationMenuPrimitive.NavigationMenuMenuProps<T> & {
    class?: string | undefined
  }

const NavigationMenuMenu = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationMenuMenuProps<T>>
) => {
  const [local, others] = splitProps(props as NavigationMenuMenuProps, ["class"])
  return (
    <NavigationMenuPrimitive.Menu
      data-slot="navigation-menu-menu"
      class={cn("cn-navigation-menu-item relative", local.class)}
      {...others}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "cn-navigation-menu-trigger group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none"
)

type NavigationMenuTriggerProps<T extends ValidComponent = "button"> =
  NavigationMenuPrimitive.NavigationMenuTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const NavigationMenuTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, NavigationMenuTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as NavigationMenuTriggerProps, ["class", "children"])
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      class={cn(navigationMenuTriggerStyle(), "group", local.class)}
      {...others}
    >
      {local.children}{" "}
      <NavigationMenuPrimitive.Icon aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="cn-navigation-menu-trigger-icon"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </NavigationMenuPrimitive.Icon>
    </NavigationMenuPrimitive.Trigger>
  )
}

type NavigationMenuContentProps<T extends ValidComponent = "div"> =
  NavigationMenuPrimitive.NavigationMenuContentProps<T> & {
    class?: string | undefined
  }

const NavigationMenuContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationMenuContentProps<T>>
) => {
  const [local, others] = splitProps(props as NavigationMenuContentProps, ["class"])
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Content
        data-slot="navigation-menu-content"
        class={cn(
          "cn-navigation-menu-content h-full w-auto **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
          local.class
        )}
        {...others}
      />
    </NavigationMenuPrimitive.Portal>
  )
}

type NavigationMenuViewportProps<T extends ValidComponent = "div"> =
  NavigationMenuPrimitive.NavigationMenuViewportProps<T> & {
    class?: string | undefined
  }

const NavigationMenuViewport = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, NavigationMenuViewportProps<T>>
) => {
  const props = mergeProps({}, rawProps)
  const [local, others] = splitProps(props as NavigationMenuViewportProps, ["class"])
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot="navigation-menu-viewport"
      class={cn("cn-navigation-menu-viewport", local.class)}
      {...others}
    />
  )
}

type NavigationMenuLinkProps<T extends ValidComponent = "a"> =
  NavigationMenuPrimitive.NavigationMenuItemProps<T> & {
    class?: string | undefined
  }

const NavigationMenuLink = <T extends ValidComponent = "a">(
  props: PolymorphicProps<T, NavigationMenuLinkProps<T>>
) => {
  const [local, others] = splitProps(props as NavigationMenuLinkProps, ["class"])
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-link"
      class={cn("cn-navigation-menu-link", local.class)}
      {...others}
    />
  )
}

type NavigationMenuIndicatorProps<T extends ValidComponent = "div"> =
  NavigationMenuPrimitive.NavigationMenuIconProps<T> & {
    class?: string | undefined
  }

const NavigationMenuIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationMenuIndicatorProps<T>>
) => {
  const [local, others] = splitProps(props as NavigationMenuIndicatorProps, ["class"])
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      class={cn(
        "cn-navigation-menu-indicator top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        local.class
      )}
      {...others}
    >
      <div class="cn-navigation-menu-indicator-arrow relative top-[60%] h-2 w-2 rotate-45" />
    </NavigationMenuPrimitive.Icon>
  )
}

type NavigationMenuItemProps<T extends ValidComponent = "div"> =
  NavigationMenuPrimitive.NavigationMenuItemProps<T> & {
    class?: string | undefined
  }

const NavigationMenuItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NavigationMenuItemProps<T>>
) => {
  const [local, others] = splitProps(props as NavigationMenuItemProps, ["class"])
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      class={cn(local.class)}
      {...others}
    />
  )
}

type NavigationMenuItemLabelProps = ComponentProps<"div"> & {
  class?: string | undefined
}

const NavigationMenuItemLabel: Component<NavigationMenuItemLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <NavigationMenuPrimitive.ItemLabel
      data-slot="navigation-menu-item-label"
      class={cn("text-sm font-medium leading-none", local.class)}
      {...others}
    />
  )
}

type NavigationMenuItemDescriptionProps = ComponentProps<"div"> & {
  class?: string | undefined
}

const NavigationMenuItemDescription: Component<NavigationMenuItemDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <NavigationMenuPrimitive.ItemDescription
      data-slot="navigation-menu-item-description"
      class={cn("text-muted-foreground text-sm leading-snug", local.class)}
      {...others}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuItemLabel,
  NavigationMenuItemDescription,
  NavigationMenuLink,
  NavigationMenuMenu,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
}
