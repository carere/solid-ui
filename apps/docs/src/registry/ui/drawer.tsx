import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"
import type { Portal } from "solid-js/web"

import type {
  ContentProps,
  DescriptionProps,
  DynamicProps,
  LabelProps,
  OverlayProps,
  PortalProps,
  RootProps,
  TriggerProps
} from "@corvu/drawer"
import DrawerPrimitive from "@corvu/drawer"

import { cn } from "~/lib/utils"

const Drawer: Component<RootProps> = (props) => (
  <DrawerPrimitive data-slot="drawer" {...props} />
)

const DrawerTrigger = <T extends ValidComponent = "button">(
  props: DynamicProps<T, TriggerProps<T>>
) => <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />

const DrawerPortal: Component<PortalProps & ComponentProps<typeof Portal>> = (props) => (
  <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
)

const DrawerClose = <T extends ValidComponent = "button">(
  props: DynamicProps<T, TriggerProps<T>>
) => <DrawerPrimitive.Close data-slot="drawer-close" {...props} />

type DrawerOverlayProps<T extends ValidComponent = "div"> = OverlayProps<T> & {
  class?: string | undefined
}

const DrawerOverlay = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerOverlayProps<T>>
) => {
  const [local, others] = splitProps(props as DrawerOverlayProps, ["class"])
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      class={cn("cn-drawer-overlay fixed inset-0 z-50", local.class)}
      {...others}
    />
  )
}

type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const DrawerContent = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerContentProps<T>>
) => {
  const [local, others] = splitProps(props as DrawerContentProps, ["class", "children"])
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        class={cn("cn-drawer-content group/drawer-content fixed z-50", local.class)}
        {...others}
      >
        <div class="cn-drawer-handle bg-muted mx-auto hidden shrink-0 group-data-[side=bottom]/drawer-content:block" />
        {local.children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

type DrawerHeaderProps = ComponentProps<"div"> & {
  class?: string | undefined
}

const DrawerHeader: Component<DrawerHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="drawer-header"
      class={cn("cn-drawer-header flex flex-col", local.class)}
      {...others}
    />
  )
}

type DrawerFooterProps = ComponentProps<"div"> & {
  class?: string | undefined
}

const DrawerFooter: Component<DrawerFooterProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="drawer-footer"
      class={cn("cn-drawer-footer mt-auto flex flex-col", local.class)}
      {...others}
    />
  )
}

type DrawerTitleProps<T extends ValidComponent = "div"> = LabelProps<T> & {
  class?: string | undefined
}

const DrawerTitle = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerTitleProps<T>>
) => {
  const [local, others] = splitProps(props as DrawerTitleProps, ["class"])
  return (
    <DrawerPrimitive.Label
      data-slot="drawer-title"
      class={cn("cn-drawer-title", local.class)}
      {...others}
    />
  )
}

type DrawerDescriptionProps<T extends ValidComponent = "div"> = DescriptionProps<T> & {
  class?: string | undefined
}

const DrawerDescription = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as DrawerDescriptionProps, ["class"])
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      class={cn("cn-drawer-description", local.class)}
      {...others}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
}
