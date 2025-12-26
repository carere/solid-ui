import { AspectRatio } from "~/registry/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div class="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}
