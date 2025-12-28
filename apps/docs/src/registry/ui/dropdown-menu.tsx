import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import * as DropdownMenuPrimitive from "@kobalte/core/dropdown-menu"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const DropdownMenu: Component<DropdownMenuPrimitive.DropdownMenuRootProps> = (props) => {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" gutter={4} {...props} />
}

const DropdownMenuPortal: Component<DropdownMenuPrimitive.DropdownMenuPortalProps> = (props) => (
  <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
)

const DropdownMenuTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, DropdownMenuPrimitive.DropdownMenuTriggerProps<T>>
) => <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />

type DropdownMenuContentProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuContentProps<T> & {
    class?: string | undefined
  }

const DropdownMenuContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuContentProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuContentProps, ["class"])
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        class={cn("cn-dropdown-menu-content", local.class)}
        data-slot="dropdown-menu-content"
        {...others}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

const DropdownMenuGroup: Component<DropdownMenuPrimitive.DropdownMenuGroupProps> = (props) => (
  <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
)

type DropdownMenuItemProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuItemProps<T> & {
    class?: string | undefined
    inset?: boolean
    variant?: "default" | "destructive"
  }

const DropdownMenuItem = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, DropdownMenuItemProps<T>>
) => {
  const props = mergeProps({ variant: "default" }, rawProps)
  const [local, others] = splitProps(props as DropdownMenuItemProps, [
    "class",
    "inset",
    "variant"
  ])
  return (
    <DropdownMenuPrimitive.Item
      class={cn(
        "cn-dropdown-menu-item group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="dropdown-menu-item"
      data-inset={local.inset}
      data-variant={local.variant}
      {...others}
    />
  )
}

type DropdownMenuLabelProps<T extends ValidComponent = "span"> =
  DropdownMenuPrimitive.DropdownMenuGroupLabelProps<T> & {
    class?: string | undefined
    inset?: boolean
  }

const DropdownMenuLabel = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, DropdownMenuLabelProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuLabelProps, ["class", "inset"])
  return (
    <DropdownMenuPrimitive.GroupLabel
      class={cn("cn-dropdown-menu-label data-[inset]:pl-8", local.class)}
      data-slot="dropdown-menu-label"
      data-inset={local.inset}
      {...others}
    />
  )
}

type DropdownMenuSeparatorProps<T extends ValidComponent = "hr"> =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps<T> & {
    class?: string | undefined
  }

const DropdownMenuSeparator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, DropdownMenuSeparatorProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuSeparatorProps, ["class"])
  return (
    <DropdownMenuPrimitive.Separator
      class={cn("cn-dropdown-menu-separator", local.class)}
      data-slot="dropdown-menu-separator"
      {...others}
    />
  )
}

const DropdownMenuShortcut: Component<ComponentProps<"span">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <span
      class={cn("cn-dropdown-menu-shortcut", local.class)}
      data-slot="dropdown-menu-shortcut"
      {...others}
    />
  )
}

const DropdownMenuSub: Component<DropdownMenuPrimitive.DropdownMenuSubProps> = (props) => (
  <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
)

type DropdownMenuSubTriggerProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuSubTriggerProps<T> & {
    class?: string | undefined
    inset?: boolean
    children?: JSX.Element
  }

const DropdownMenuSubTrigger = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuSubTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuSubTriggerProps, [
    "class",
    "inset",
    "children"
  ])
  return (
    <DropdownMenuPrimitive.SubTrigger
      class={cn(
        "cn-dropdown-menu-sub-trigger flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="dropdown-menu-sub-trigger"
      data-inset={local.inset}
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
    </DropdownMenuPrimitive.SubTrigger>
  )
}

type DropdownMenuSubContentProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuSubContentProps<T> & {
    class?: string | undefined
  }

const DropdownMenuSubContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuSubContentProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuSubContentProps, ["class"])
  return (
    <DropdownMenuPrimitive.SubContent
      class={cn("cn-dropdown-menu-sub-content", local.class)}
      data-slot="dropdown-menu-sub-content"
      {...others}
    />
  )
}

type DropdownMenuCheckboxItemProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const DropdownMenuCheckboxItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuCheckboxItemProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuCheckboxItemProps, ["class", "children"])
  return (
    <DropdownMenuPrimitive.CheckboxItem
      class={cn(
        "cn-dropdown-menu-checkbox-item relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="dropdown-menu-checkbox-item"
      {...others}
    >
      <span
        class="cn-dropdown-menu-item-indicator pointer-events-none"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
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
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

type DropdownMenuRadioGroupProps<
  T extends ValidComponent = "div",
  TValue = string
> = DropdownMenuPrimitive.DropdownMenuRadioGroupProps<T, TValue>

const DropdownMenuRadioGroup = <T extends ValidComponent = "div", TValue = string>(
  props: PolymorphicProps<T, DropdownMenuRadioGroupProps<T, TValue>>
) => <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />

type DropdownMenuRadioItemProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuRadioItemProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const DropdownMenuRadioItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuRadioItemProps<T>>
) => {
  const [local, others] = splitProps(props as DropdownMenuRadioItemProps, ["class", "children"])
  return (
    <DropdownMenuPrimitive.RadioItem
      class={cn(
        "cn-dropdown-menu-radio-item relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="dropdown-menu-radio-item"
      {...others}
    >
      <span
        class="cn-dropdown-menu-item-indicator pointer-events-none"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
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
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
}
