import { createSignal, For } from "solid-js"

import { IconMinus, IconPlus } from "~/components/icons"
import { Button } from "~/registry/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "~/registry/ui/drawer"

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 }
]

export default function DrawerDemo() {
  const [goal, setGoal] = createSignal(350)

  const onClick = (adjustment: number) => {
    setGoal((prevGoal) => Math.max(200, Math.min(400, prevGoal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger as={Button} variant="outline">
        Open Drawer
      </DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div class="p-4 pb-0">
            <div class="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                class="size-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal() <= 200}
              >
                <IconMinus class="size-4" />
                <span class="sr-only">Decrease</span>
              </Button>
              <div class="flex-1 text-center">
                <div class="text-7xl font-bold tracking-tighter">{goal()}</div>
                <div class="text-muted-foreground text-[0.70rem] uppercase">Calories/day</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                class="size-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal() >= 400}
              >
                <IconPlus class="size-4" />
                <span class="sr-only">Increase</span>
              </Button>
            </div>
            <div class="mt-3 h-[120px]">
              <div class="flex h-full items-end gap-1">
                <For each={data}>
                  {(item) => (
                    <div
                      class="flex-1 rounded-sm bg-primary opacity-90"
                      style={{ height: `${(item.goal / 400) * 100}%` }}
                    />
                  )}
                </For>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose as={Button} variant="outline">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
