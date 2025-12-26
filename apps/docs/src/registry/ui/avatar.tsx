import type { Component, ComponentProps, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"
import * as AvatarPrimitive from "@kobalte/core/avatar"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

type AvatarRootProps<T extends ValidComponent = "span"> = ComponentProps<
	typeof AvatarPrimitive.Root
> & {
	class?: string | undefined
	size?: "default" | "sm" | "lg"
}

const Avatar = <T extends ValidComponent = "span">(
	props: PolymorphicProps<T, AvatarRootProps<T>>
) => {
	const [local, others] = splitProps(props as AvatarRootProps, [
		"class",
		"size"
	])
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			data-size={local.size ?? "default"}
			class={cn(
				"cn-avatar after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten",
				local.class
			)}
			{...others}
		/>
	)
}

type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image> & {
	class?: string | undefined
}

const AvatarImage: Component<AvatarImageProps> = (props) => {
	const [local, others] = splitProps(props, ["class"])
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			class={cn(
				"cn-avatar-image aspect-square size-full object-cover",
				local.class
			)}
			{...others}
		/>
	)
}

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback> & {
	class?: string | undefined
}

const AvatarFallback: Component<AvatarFallbackProps> = (props) => {
	const [local, others] = splitProps(props, ["class"])
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			class={cn(
				"cn-avatar-fallback flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs",
				local.class
			)}
			{...others}
		/>
	)
}

type AvatarBadgeProps = ComponentProps<"span"> & {
	class?: string | undefined
}

const AvatarBadge: Component<AvatarBadgeProps> = (props) => {
	const [local, others] = splitProps(props, ["class"])
	return (
		<span
			data-slot="avatar-badge"
			class={cn(
				"cn-avatar-badge absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none",
				"group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
				"group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
				"group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
				local.class
			)}
			{...others}
		/>
	)
}

type AvatarGroupProps = ComponentProps<"div"> & {
	class?: string | undefined
}

const AvatarGroup: Component<AvatarGroupProps> = (props) => {
	const [local, others] = splitProps(props, ["class"])
	return (
		<div
			data-slot="avatar-group"
			class={cn(
				"cn-avatar-group *:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2",
				local.class
			)}
			{...others}
		/>
	)
}

type AvatarGroupCountProps = ComponentProps<"div"> & {
	class?: string | undefined
}

const AvatarGroupCount: Component<AvatarGroupCountProps> = (props) => {
	const [local, others] = splitProps(props, ["class"])
	return (
		<div
			data-slot="avatar-group-count"
			class={cn(
				"cn-avatar-group-count ring-background relative flex shrink-0 items-center justify-center ring-2",
				"",
				local.class
			)}
			{...others}
		/>
	)
}

export {
	Avatar,
	AvatarImage,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarBadge
}
