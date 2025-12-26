import { createSignal } from "solid-js"

import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxListbox,
  ComboboxTrigger
} from "~/registry/ui/combobox"

type Framework = {
  value: string
  label: string
}

const frameworks: Framework[] = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solid-start", label: "SolidStart" }
]

export default function ComboboxDemo() {
  const [value, setValue] = createSignal<Framework | null>(null)

  return (
    <div class="flex flex-col gap-2">
      <Combobox<Framework>
        options={frameworks}
        optionValue={(option) => option.value}
        optionTextValue={(option) => option.label}
        optionLabel={(option) => option.label}
        placeholder="Select a framework..."
        onChange={setValue}
        itemComponent={(props) => (
          <ComboboxItem item={props.item}>{props.item.rawValue.label}</ComboboxItem>
        )}
      >
        <ComboboxControl class="w-[200px]">
          <ComboboxInput />
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxContent>
          <ComboboxListbox />
        </ComboboxContent>
      </Combobox>
      <p class="text-muted-foreground text-sm">
        Selected: {value()?.label ?? "None"}
      </p>
    </div>
  )
}
