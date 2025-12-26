import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import { ChevronRight, MoreHorizontal } from "lucide-solid"

import { cn } from "~/lib/utils"

type BreadcrumbProps<T extends ValidComponent = "nav"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const Breadcrumb = <T extends ValidComponent = "nav">(
  rawProps: PolymorphicProps<T, BreadcrumbProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbProps, [
    "class",
    "children"
  ])
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      class={cn("cn-breadcrumb", local.class)}
      {...others}
    >
      {local.children}
    </nav>
  )
}

type BreadcrumbListProps<T extends ValidComponent = "ol"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const BreadcrumbList = <T extends ValidComponent = "ol">(
  rawProps: PolymorphicProps<T, BreadcrumbListProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbListProps, [
    "class",
    "children"
  ])
  return (
    <ol
      data-slot="breadcrumb-list"
      class={cn(
        "cn-breadcrumb-list flex flex-wrap items-center break-words",
        local.class
      )}
      {...others}
    >
      {local.children}
    </ol>
  )
}

type BreadcrumbItemProps<T extends ValidComponent = "li"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const BreadcrumbItem = <T extends ValidComponent = "li">(
  rawProps: PolymorphicProps<T, BreadcrumbItemProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbItemProps, [
    "class",
    "children"
  ])
  return (
    <li
      data-slot="breadcrumb-item"
      class={cn("cn-breadcrumb-item inline-flex items-center", local.class)}
      {...others}
    >
      {local.children}
    </li>
  )
}

type BreadcrumbLinkProps<T extends ValidComponent = "a"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const BreadcrumbLink = <T extends ValidComponent = "a">(
  rawProps: PolymorphicProps<T, BreadcrumbLinkProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbLinkProps, [
    "class",
    "children"
  ])
  return (
    <a
      data-slot="breadcrumb-link"
      class={cn("cn-breadcrumb-link", local.class)}
      {...others}
    >
      {local.children}
    </a>
  )
}

type BreadcrumbPageProps<T extends ValidComponent = "span"> = ComponentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const BreadcrumbPage = <T extends ValidComponent = "span">(
  rawProps: PolymorphicProps<T, BreadcrumbPageProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbPageProps, [
    "class",
    "children"
  ])
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      class={cn("cn-breadcrumb-page", local.class)}
      {...others}
    >
      {local.children}
    </span>
  )
}

type BreadcrumbSeparatorProps<T extends ValidComponent = "li"> =
  ComponentProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const BreadcrumbSeparator = <T extends ValidComponent = "li">(
  rawProps: PolymorphicProps<T, BreadcrumbSeparatorProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbSeparatorProps, [
    "class",
    "children"
  ])
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      class={cn("cn-breadcrumb-separator", local.class)}
      {...others}
    >
      {local.children ?? <ChevronRight />}
    </li>
  )
}

type BreadcrumbEllipsisProps<T extends ValidComponent = "span"> =
  ComponentProps<T> & {
    class?: string | undefined
  }

const BreadcrumbEllipsis = <T extends ValidComponent = "span">(
  rawProps: PolymorphicProps<T, BreadcrumbEllipsisProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BreadcrumbEllipsisProps, [
    "class"
  ])
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      class={cn(
        "cn-breadcrumb-ellipsis flex items-center justify-center",
        local.class
      )}
      {...others}
    >
      <MoreHorizontal />
      <span class="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
}
