import type { Component, ComponentProps, JSX, ParentProps, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import * as MenubarPrimitive from "@kobalte/core/menubar"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

type MenubarProps = ParentProps<
  MenubarPrimitive.MenubarRootProps & {
    class?: string | undefined
  }
>

const Menubar: Component<MenubarProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Root
      class={cn("cn-menubar flex items-center", local.class)}
      data-slot="menubar"
      {...others}
    />
  )
}

const MenubarMenu: Component<MenubarPrimitive.MenubarMenuProps> = (props) => {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

type MenubarGroupProps = ParentProps<MenubarPrimitive.MenubarGroupProps>

const MenubarGroup: Component<MenubarGroupProps> = (props) => {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

const MenubarPortal: Component<MenubarPrimitive.MenubarPortalProps> = (props) => {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

type MenubarTriggerProps<T extends ValidComponent = "button"> =
  MenubarPrimitive.MenubarTriggerProps<T> & {
    class?: string | undefined
  }

const MenubarTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, MenubarTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarTriggerProps, ["class"])
  return (
    <MenubarPrimitive.Trigger
      class={cn(
        "cn-menubar-trigger flex items-center outline-hidden select-none",
        local.class
      )}
      data-slot="menubar-trigger"
      {...others}
    />
  )
}

type MenubarContentProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarContentProps<T> & {
    class?: string | undefined
  }

const MenubarContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarContentProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarContentProps, ["class"])
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        class={cn("cn-menubar-content cn-menu-target", local.class)}
        data-slot="menubar-content"
        {...others}
      />
    </MenubarPrimitive.Portal>
  )
}

type MenubarItemProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarItemProps<T> & {
    class?: string | undefined
    inset?: boolean
    variant?: "default" | "destructive"
  }

const MenubarItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarItemProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarItemProps, [
    "class",
    "inset",
    "variant"
  ])
  return (
    <MenubarPrimitive.Item
      class={cn("cn-menubar-item group/menubar-item", local.class)}
      data-inset={local.inset}
      data-slot="menubar-item"
      data-variant={local.variant}
      {...others}
    />
  )
}

type MenubarCheckboxItemProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarCheckboxItemProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const MenubarCheckboxItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarCheckboxItemProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarCheckboxItemProps, [
    "class",
    "children"
  ])
  return (
    <MenubarPrimitive.CheckboxItem
      class={cn(
        "cn-menubar-checkbox-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="menubar-checkbox-item"
      {...others}
    >
      <span class="cn-menubar-checkbox-item-indicator pointer-events-none absolute flex items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <svg
            class="size-4"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </MenubarPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenubarPrimitive.CheckboxItem>
  )
}

type MenubarRadioGroupProps<T extends ValidComponent = "div"> = ParentProps<
  MenubarPrimitive.MenubarRadioGroupProps<T> & {
    class?: string | undefined
  }
>

const MenubarRadioGroup = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarRadioGroupProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarRadioGroupProps, ["class"])
  return (
    <MenubarPrimitive.RadioGroup
      class={local.class}
      data-slot="menubar-radio-group"
      {...others}
    />
  )
}

type MenubarRadioItemProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarRadioItemProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const MenubarRadioItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarRadioItemProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarRadioItemProps, [
    "class",
    "children"
  ])
  return (
    <MenubarPrimitive.RadioItem
      class={cn(
        "cn-menubar-radio-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="menubar-radio-item"
      {...others}
    >
      <span class="cn-menubar-radio-item-indicator pointer-events-none absolute flex items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <svg
            class="size-4"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </MenubarPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenubarPrimitive.RadioItem>
  )
}

type MenubarLabelProps = ComponentProps<"div"> & {
  class?: string | undefined
  inset?: boolean
}

const MenubarLabel: Component<MenubarLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "inset"])
  return (
    <div
      class={cn("cn-menubar-label", local.class)}
      data-inset={local.inset}
      data-slot="menubar-label"
      {...others}
    />
  )
}

type MenubarSeparatorProps<T extends ValidComponent = "hr"> =
  MenubarPrimitive.MenubarSeparatorProps<T> & {
    class?: string | undefined
  }

const MenubarSeparator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, MenubarSeparatorProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarSeparatorProps, ["class"])
  return (
    <MenubarPrimitive.Separator
      class={cn("cn-menubar-separator -mx-1 my-1 h-px", local.class)}
      data-slot="menubar-separator"
      {...others}
    />
  )
}

type MenubarShortcutProps = ComponentProps<"span"> & {
  class?: string | undefined
}

const MenubarShortcut: Component<MenubarShortcutProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <span
      class={cn("cn-menubar-shortcut ml-auto", local.class)}
      data-slot="menubar-shortcut"
      {...others}
    />
  )
}

type MenubarSubProps = ParentProps<MenubarPrimitive.MenubarSubProps>

const MenubarSub: Component<MenubarSubProps> = (props) => {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

type MenubarSubTriggerProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarSubTriggerProps<T> & {
    class?: string | undefined
    inset?: boolean
    children?: JSX.Element
  }

const MenubarSubTrigger = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarSubTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarSubTriggerProps, [
    "class",
    "inset",
    "children"
  ])
  return (
    <MenubarPrimitive.SubTrigger
      class={cn("cn-menubar-sub-trigger", local.class)}
      data-inset={local.inset}
      data-slot="menubar-sub-trigger"
      {...others}
    >
      {local.children}
      <svg
        class="ml-auto size-4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </MenubarPrimitive.SubTrigger>
  )
}

type MenubarSubContentProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarSubContentProps<T> & {
    class?: string | undefined
  }

const MenubarSubContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarSubContentProps<T>>
) => {
  const [local, others] = splitProps(props as MenubarSubContentProps, ["class"])
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        class={cn("cn-menubar-sub-content", local.class)}
        data-slot="menubar-sub-content"
        {...others}
      />
    </MenubarPrimitive.Portal>
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent
}
