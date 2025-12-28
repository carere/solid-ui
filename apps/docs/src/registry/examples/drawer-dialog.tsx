import { type ComponentProps, createSignal, Show, splitProps } from "solid-js"

import { useIsMobile } from "~/hooks/use-mobile"
import { cn } from "~/lib/utils"
import { Button } from "~/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/registry/ui/dialog"
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
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export default function DrawerDialogDemo() {
  const [open, setOpen] = createSignal(false)
  const isMobile = useIsMobile()

  return (
    <Show
      when={isMobile()}
      fallback={
        <Dialog open={open()} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      }
    >
      <Drawer open={open()} onOpenChange={setOpen}>
        <DrawerTrigger as={Button} variant="outline">
          Edit Profile
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader class="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm class="px-4" />
          <DrawerFooter class="pt-2">
            <DrawerClose as={Button} variant="outline">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Show>
  )
}

function ProfileForm(props: ComponentProps<"form">) {
  const [local, others] = splitProps(props, ["class"])
  return (
    <form class={cn("grid items-start gap-4", local.class)} {...others}>
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input type="email" id="email" value="shadcn@example.com" />
      </div>
      <div class="grid gap-2">
        <Label for="username">Username</Label>
        <Input id="username" value="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
