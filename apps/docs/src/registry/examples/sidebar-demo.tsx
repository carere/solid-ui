import { For } from "solid-js"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "~/registry/ui/sidebar"

const items = [
  { title: "Home", url: "#" },
  { title: "Inbox", url: "#" },
  { title: "Calendar", url: "#" },
  { title: "Search", url: "#" },
  { title: "Settings", url: "#" }
]

export default function SidebarDemo() {
  return (
    <SidebarProvider class="min-h-[400px]">
      <Sidebar>
        <SidebarHeader>
          <div class="flex items-center gap-2 px-2 py-2">
            <div class="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              A
            </div>
            <span class="font-semibold">Acme Inc</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <For each={items}>
                  {(item) => (
                    <SidebarMenuItem>
                      <SidebarMenuButton as="a" href={item.url}>
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </For>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div class="p-2 text-xs text-muted-foreground">Footer</div>
        </SidebarFooter>
      </Sidebar>
      <main class="flex flex-1 flex-col p-4">
        <SidebarTrigger />
        <div class="mt-4 flex-1 rounded-lg border bg-muted/50 p-4">
          <h2 class="text-lg font-semibold">Main Content</h2>
          <p class="text-muted-foreground">
            This is the main content area. Press the trigger button or use Cmd+B to toggle
            the sidebar.
          </p>
        </div>
      </main>
    </SidebarProvider>
  )
}
