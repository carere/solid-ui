import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export default function InputWithLabel() {
  return (
    <div class="grid w-full max-w-sm items-center gap-3">
      <Label for="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
