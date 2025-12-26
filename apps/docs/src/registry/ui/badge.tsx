import type { Component, ComponentProps, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"
import { cva, type VariantProps } from "class-variance-authority"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const badgeVariants = cva(
  "cn-badge inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "cn-badge-variant-default",
        secondary: "cn-badge-variant-secondary",
        destructive: "cn-badge-variant-destructive",
        outline: "cn-badge-variant-outline",
        ghost: "cn-badge-variant-ghost",
        link: "cn-badge-variant-link",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type BadgeProps<T extends ValidComponent = "span"> = ComponentProps<T> &
  VariantProps<typeof badgeVariants> & {
    class?: string | undefined
  }

const Badge = <T extends ValidComponent = "span">(
  rawProps: PolymorphicProps<T, BadgeProps<T>>
) => {
  const [local, others] = splitProps(rawProps as BadgeProps, [
    "class",
    "variant",
  ])

  return (
    <span
      data-slot="badge"
      data-variant={local.variant}
      class={cn(badgeVariants({ variant: local.variant }), local.class)}
      {...others}
    />
  )
}

export { Badge, badgeVariants }
