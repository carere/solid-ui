import { useDesignSystem } from "~/components/design-system-provider"
import { STYLES, type Style } from "~/registry/styles"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/registry/ui/select"

export function StyleSelect() {
  const { style, setStyle } = useDesignSystem()

  return (
    <>
      <div>Style</div>
      <Select
        itemComponent={(props) => (
          <SelectItem class="flex" item={props.item}>
            {props.item.rawValue.icon}
            {props.item.rawValue.title}
          </SelectItem>
        )}
        onChange={(value) => {
          if (value) setStyle(value)
        }}
        options={[...STYLES]}
        optionTextValue="title"
        optionValue="name"
        value={style()}
      >
        <SelectTrigger aria-label="Style">
          <SelectValue<Style>>{(state) => state.selectedOption().icon}</SelectValue>
        </SelectTrigger>
        <SelectContent />
      </Select>
    </>
  )
}
