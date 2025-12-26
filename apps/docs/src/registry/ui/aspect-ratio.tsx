import type { ComponentProps, ValidComponent } from "solid-js"
import { AspectRatio as AspectRatioPrimitive } from "@kobalte/core/aspect-ratio"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

type AspectRatioProps<T extends ValidComponent = "div"> = ComponentProps<
  typeof AspectRatioPrimitive
>

const AspectRatio = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AspectRatioProps<T>>
) => {
  return <AspectRatioPrimitive data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
