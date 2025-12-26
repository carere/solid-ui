import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { mergeProps, Show, splitProps } from "solid-js"

import * as DialogPrimitive from "@kobalte/core/dialog"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const Dialog: Component<DialogPrimitive.DialogRootProps> = (props) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
)

const DialogTrigger: Component<DialogPrimitive.DialogTriggerProps> = (props) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
)

const DialogClose = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, DialogPrimitive.DialogCloseButtonProps<T>>
) => <DialogPrimitive.CloseButton data-slot="dialog-close" {...props} />

const DialogPortal: Component<DialogPrimitive.DialogPortalProps> = (props) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

type DialogOverlayProps<T extends ValidComponent = "div"> =
  DialogPrimitive.DialogOverlayProps<T> & { class?: string | undefined }

const DialogOverlay = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DialogOverlayProps<T>>
) => {
  const [local, others] = splitProps(props as DialogOverlayProps, ["class"])
  return (
    <DialogPrimitive.Overlay
      class={cn("cn-dialog-overlay fixed inset-0 isolate z-50", local.class)}
      data-slot="dialog-overlay"
      {...others}
    />
  )
}

type DialogContentProps<T extends ValidComponent = "div"> =
  DialogPrimitive.DialogContentProps<T> & {
    class?: string | undefined
    children?: JSX.Element
    showCloseButton?: boolean
  }

const DialogContent = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, DialogContentProps<T>>
) => {
  const props = mergeProps({ showCloseButton: true }, rawProps)
  const [local, others] = splitProps(props as DialogContentProps, [
    "class",
    "children",
    "showCloseButton"
  ])
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        class={cn(
          "cn-dialog-content fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2",
          local.class
        )}
        data-slot="dialog-content"
        {...others}
      >
        {local.children}
        <Show when={local.showCloseButton}>
          <DialogPrimitive.CloseButton
            class="cn-dialog-close"
            data-slot="dialog-close"
          >
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span class="sr-only">Close</span>
          </DialogPrimitive.CloseButton>
        </Show>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

type DialogHeaderProps = ComponentProps<"div"> & {
  class?: string | undefined
}

const DialogHeader: Component<DialogHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn("cn-dialog-header flex flex-col", local.class)}
      data-slot="dialog-header"
      {...others}
    />
  )
}

type DialogFooterProps = ComponentProps<"div"> & {
  class?: string | undefined
  children?: JSX.Element
  showCloseButton?: boolean
}

const DialogFooter: Component<DialogFooterProps> = (rawProps) => {
  const props = mergeProps({ showCloseButton: false }, rawProps)
  const [local, others] = splitProps(props, ["class", "children", "showCloseButton"])
  return (
    <div
      class={cn(
        "cn-dialog-footer flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        local.class
      )}
      data-slot="dialog-footer"
      {...others}
    >
      {local.children}
      <Show when={local.showCloseButton}>
        <DialogPrimitive.CloseButton
          class="cn-button cn-button-variant-outline cn-button-size-default"
          data-slot="button"
        >
          Close
        </DialogPrimitive.CloseButton>
      </Show>
    </div>
  )
}

type DialogTitleProps<T extends ValidComponent = "h2"> = DialogPrimitive.DialogTitleProps<T> & {
  class?: string | undefined
}

const DialogTitle = <T extends ValidComponent = "h2">(
  props: PolymorphicProps<T, DialogTitleProps<T>>
) => {
  const [local, others] = splitProps(props as DialogTitleProps, ["class"])
  return (
    <DialogPrimitive.Title
      class={cn("cn-dialog-title", local.class)}
      data-slot="dialog-title"
      {...others}
    />
  )
}

type DialogDescriptionProps<T extends ValidComponent = "p"> =
  DialogPrimitive.DialogDescriptionProps<T> & {
    class?: string | undefined
  }

const DialogDescription = <T extends ValidComponent = "p">(
  props: PolymorphicProps<T, DialogDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as DialogDescriptionProps, ["class"])
  return (
    <DialogPrimitive.Description
      class={cn("cn-dialog-description", local.class)}
      data-slot="dialog-description"
      {...others}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
}
