import type { ComponentProps, JSX, ValidComponent } from "solid-js"
import { createContext, Show, splitProps, useContext } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import OtpField from "@corvu/otp-field"
import type {
  RootChildrenProps as OtpFieldRootChildrenProps,
  RootProps as OtpFieldRootProps
} from "@corvu/otp-field"

import { cn } from "~/lib/utils"

type InputOTPContextValue = {
  slots: {
    char: string | null
    hasFakeCaret: boolean
    isActive: boolean
  }[]
}

const InputOTPContext = createContext<InputOTPContextValue>()

const useInputOTPContext = () => {
  const context = useContext(InputOTPContext)
  if (!context) {
    throw new Error("useInputOTPContext must be used within an InputOTP")
  }
  return context
}

type InputOTPProps = OtpFieldRootProps & {
  class?: string | undefined
  containerClass?: string | undefined
  children?: JSX.Element
}

const InputOTP = (rawProps: InputOTPProps) => {
  const [local, others] = splitProps(rawProps, [
    "class",
    "containerClass",
    "children"
  ])

  return (
    <OtpField
      data-slot="input-otp"
      class={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        local.containerClass
      )}
      {...others}
    >
      {(ctx: OtpFieldRootChildrenProps) => {
        const slots = () =>
          Array.from({ length: ctx.maxLength }).map((_, index) => ({
            char: ctx.value[index] ?? null,
            hasFakeCaret: ctx.isInserting && ctx.activeSlots.includes(index),
            isActive: ctx.activeSlots.includes(index)
          }))

        return (
          <InputOTPContext.Provider value={{ get slots() { return slots() } }}>
            <OtpField.Input
              class={cn("disabled:cursor-not-allowed", local.class)}
              data-slot="input-otp-input"
            />
            {local.children}
          </InputOTPContext.Provider>
        )
      }}
    </OtpField>
  )
}

type InputOTPGroupProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
}

const InputOTPGroup = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, InputOTPGroupProps<T>>
) => {
  const [local, others] = splitProps(rawProps as InputOTPGroupProps, ["class"])
  return (
    <div
      data-slot="input-otp-group"
      class={cn("flex items-center", local.class)}
      {...others}
    />
  )
}

type InputOTPSlotProps = ComponentProps<"div"> & {
  class?: string | undefined
  index: number
}

const InputOTPSlot = (rawProps: InputOTPSlotProps) => {
  const [local, others] = splitProps(rawProps, ["class", "index"])
  const context = useInputOTPContext()

  const slot = () => context.slots[local.index] ?? { char: null, hasFakeCaret: false, isActive: false }

  return (
    <div
      data-slot="input-otp-slot"
      data-active={slot().isActive}
      class={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        local.class
      )}
      {...others}
    >
      {slot().char}
      <Show when={slot().hasFakeCaret}>
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      </Show>
    </div>
  )
}

type InputOTPSeparatorProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
  class?: string | undefined
}

const InputOTPSeparator = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, InputOTPSeparatorProps<T>>
) => {
  const [, others] = splitProps(rawProps as InputOTPSeparatorProps, ["class"])
  return (
    <div data-slot="input-otp-separator" role="separator" {...others}>
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
        <path d="M5 12h14" />
      </svg>
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
