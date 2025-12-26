import type { Component, JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import * as ComboboxPrimitive from "@kobalte/core/combobox"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const Combobox = <Option, OptGroup = never, T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxPrimitive.ComboboxRootProps<Option, OptGroup, T>>
) => {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />
}

type ComboboxControlProps<T extends ValidComponent = "div"> =
  ComboboxPrimitive.ComboboxControlProps<T> & {
    class?: string | undefined
  }

const ComboboxControl = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxControlProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxControlProps, ["class"])
  return (
    <ComboboxPrimitive.Control
      class={cn(
        "cn-combobox-control flex h-9 w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 dark:bg-input/30 dark:hover:bg-input/50",
        local.class
      )}
      data-slot="combobox-control"
      {...others}
    />
  )
}

type ComboboxInputProps<T extends ValidComponent = "input"> =
  ComboboxPrimitive.ComboboxInputProps<T> & {
    class?: string | undefined
  }

const ComboboxInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, ComboboxInputProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxInputProps, ["class"])
  return (
    <ComboboxPrimitive.Input
      class={cn(
        "cn-combobox-input flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      data-slot="combobox-input"
      {...others}
    />
  )
}

type ComboboxTriggerProps<T extends ValidComponent = "button"> =
  ComboboxPrimitive.ComboboxTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const ComboboxTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ComboboxTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxTriggerProps, ["class", "children"])
  return (
    <ComboboxPrimitive.Trigger
      class={cn(
        "cn-combobox-trigger flex size-6 shrink-0 items-center justify-center rounded-sm opacity-50 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
        local.class
      )}
      data-slot="combobox-trigger"
      {...others}
    >
      {local.children ?? (
        <ComboboxPrimitive.Icon
          as="svg"
          class="size-4"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 9l4 -4l4 4" />
          <path d="M16 15l-4 4l-4 -4" />
        </ComboboxPrimitive.Icon>
      )}
    </ComboboxPrimitive.Trigger>
  )
}

type ComboboxContentProps<T extends ValidComponent = "div"> =
  ComboboxPrimitive.ComboboxContentProps<T> & {
    class?: string | undefined
  }

const ComboboxContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxContentProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxContentProps, ["class"])
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Content
        class={cn(
          "cn-combobox-content data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95 relative z-50 min-w-[8rem] origin-(--kb-combobox-content-transform-origin) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[expanded]:animate-in",
          local.class
        )}
        data-slot="combobox-content"
        {...others}
      />
    </ComboboxPrimitive.Portal>
  )
}

type ComboboxListboxProps<Option, OptGroup = never, T extends ValidComponent = "ul"> =
  ComboboxPrimitive.ComboboxListboxProps<Option, OptGroup, T> & {
    class?: string | undefined
  }

const ComboboxListbox = <Option, OptGroup = never, T extends ValidComponent = "ul">(
  props: PolymorphicProps<T, ComboboxListboxProps<Option, OptGroup, T>>
) => {
  const [local, others] = splitProps(props as ComboboxListboxProps<Option, OptGroup>, ["class"])
  return (
    <ComboboxPrimitive.Listbox
      class={cn("cn-combobox-list m-0 max-h-[300px] overflow-y-auto p-1", local.class)}
      data-slot="combobox-list"
      {...others}
    />
  )
}

type ComboboxItemProps<T extends ValidComponent = "li"> = ComboboxPrimitive.ComboboxItemProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const ComboboxItem = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, ComboboxItemProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxItemProps, ["class", "children"])
  return (
    <ComboboxPrimitive.Item
      class={cn(
        "cn-combobox-item relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
        local.class
      )}
      data-slot="combobox-item"
      {...others}
    >
      <ComboboxPrimitive.ItemIndicator class="cn-combobox-item-indicator absolute right-2 flex size-3.5 items-center justify-center">
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
      </ComboboxPrimitive.ItemIndicator>
      <ComboboxPrimitive.ItemLabel class="cn-combobox-item-text">{local.children}</ComboboxPrimitive.ItemLabel>
    </ComboboxPrimitive.Item>
  )
}

type ComboboxSectionProps<T extends ValidComponent = "li"> =
  ComboboxPrimitive.ComboboxSectionProps<T> & {
    class?: string | undefined
  }

const ComboboxSection = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, ComboboxSectionProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxSectionProps, ["class"])
  return (
    <ComboboxPrimitive.Section
      class={cn("cn-combobox-section overflow-hidden p-1 text-foreground", local.class)}
      data-slot="combobox-section"
      {...others}
    />
  )
}

type ComboboxLabelProps = {
  class?: string | undefined
  children?: JSX.Element
}

const ComboboxLabel: Component<ComboboxLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn(
        "cn-combobox-label px-2 py-1.5 font-medium text-muted-foreground text-xs",
        local.class
      )}
      data-slot="combobox-label"
      {...others}
    />
  )
}

type ComboboxDescriptionProps<T extends ValidComponent = "div"> =
  ComboboxPrimitive.ComboboxDescriptionProps<T> & {
    class?: string | undefined
  }

const ComboboxDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxDescriptionProps, ["class"])
  return (
    <ComboboxPrimitive.Description
      class={cn("cn-combobox-description text-muted-foreground text-sm", local.class)}
      data-slot="combobox-description"
      {...others}
    />
  )
}

type ComboboxErrorMessageProps<T extends ValidComponent = "div"> =
  ComboboxPrimitive.ComboboxErrorMessageProps<T> & {
    class?: string | undefined
  }

const ComboboxErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxErrorMessageProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxErrorMessageProps, ["class"])
  return (
    <ComboboxPrimitive.ErrorMessage
      class={cn("cn-combobox-error-message text-destructive text-sm", local.class)}
      data-slot="combobox-error-message"
      {...others}
    />
  )
}

export {
  Combobox,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxListbox,
  ComboboxItem,
  ComboboxSection,
  ComboboxLabel,
  ComboboxDescription,
  ComboboxErrorMessage
}
