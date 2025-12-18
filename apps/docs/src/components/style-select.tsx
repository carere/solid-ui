import { Dynamic, Show } from "solid-js/web"

import { useDesignSystem } from "~/components/design-system-provider"
import { STYLES, type Style } from "~/registry/styles"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/registry/ui/select"

export function StyleSelect() {
  const { style, setStyle } = useDesignSystem()

  return (
    <Select
      itemComponent={(props) => {
        const style = props.item.rawValue
        return (
          <SelectItem class="flex" item={props.item}>
            <div class="flex items-start gap-2">
              <Show when={style.icon}>
                {(icon) => (
                  <div class="flex size-4 translate-y-0.5 items-center justify-center">
                    <Dynamic class="size-4" component={icon} />
                  </div>
                )}
              </Show>
              <div class="flex flex-col justify-start pointer-coarse:gap-1">
                <div>{style.title}</div>
                <div class="pointer-coarse:text-sm text-muted-foreground text-xs">
                  {style.description}
                </div>
              </div>
            </div>
          </SelectItem>
        )
      }}
      onChange={(value) => {
        if (value) setStyle(value)
      }}
      options={[...STYLES]}
      optionTextValue="title"
      optionValue="name"
      value={style()}
    >
      <SelectTrigger aria-label="Style">
        <span class="font-medium">Style:</span>
        <SelectValue<Style>>{(state) => state.selectedOption().title}</SelectValue>
      </SelectTrigger>
      <SelectContent class="md:w-64" />
    </Select>
  )
}
