import { For } from "solid-js"

import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "~/registry/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

export default function SheetSide() {
  return (
    <div class="grid grid-cols-2 gap-2">
      <For each={SHEET_SIDES}>
        {(side) => (
          <Sheet>
            <SheetTrigger as={Button} variant="outline">
              {side}
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div class="grid gap-4 px-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label for={`name-${side}`} class="text-right">
                    Name
                  </Label>
                  <Input
                    id={`name-${side}`}
                    value="Pedro Duarte"
                    class="col-span-3"
                  />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label for={`username-${side}`} class="text-right">
                    Username
                  </Label>
                  <Input
                    id={`username-${side}`}
                    value="@peduarte"
                    class="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose as={Button}>Save changes</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
      </For>
    </div>
  )
}
