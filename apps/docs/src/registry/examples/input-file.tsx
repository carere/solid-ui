import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export default function InputFile() {
  return (
    <div class="grid w-full max-w-sm items-center gap-3">
      <Label for="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
