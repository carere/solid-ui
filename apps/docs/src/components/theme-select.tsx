import { type THEME, THEMES, useTheme } from "~/components/theme-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/registry/v1/ui/select"

export function ThemeSelect() {
  const { theme, setTheme } = useTheme()

  return (
    <Select<THEME>
      itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
      onChange={(value) => {
        if (value) setTheme(value)
      }}
      options={[...THEMES]}
      value={theme()}
    >
      <SelectTrigger aria-label="Theme">
        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
      </SelectTrigger>
      <SelectContent />
    </Select>
  )
}
