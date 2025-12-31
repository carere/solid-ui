import { createSignal } from "solid-js"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "~/registry/ui/select"

export default function SelectDemo() {
  const [value, setValue] = createSignal("")
  return (
    <Select
      itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
      onChange={setValue}
      options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
      placeholder="Select a fruit"
      value={value()}
    >
      <SelectTrigger aria-label="Fruit" class="w-[180px]">
        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
