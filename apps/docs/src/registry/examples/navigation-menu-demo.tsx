import { For } from "solid-js"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuItemDescription,
  NavigationMenuItemLabel,
  NavigationMenuLink,
  NavigationMenuMenu,
  NavigationMenuTrigger
} from "~/registry/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuMenu>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent class="md:w-[400px] lg:w-[500px]">
          <ul class="grid gap-3 p-4 md:grid-cols-2">
            <li class="row-span-3">
              <NavigationMenuLink
                class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                href="/"
              >
                <div class="mb-2 mt-4 text-lg font-medium">solid-ui</div>
                <p class="text-muted-foreground text-sm leading-tight">
                  Beautifully designed components built with Kobalte and Tailwind CSS.
                </p>
              </NavigationMenuLink>
            </li>
            <ListItem href="/docs" title="Introduction">
              Re-usable components built using Kobalte and Tailwind CSS.
            </ListItem>
            <ListItem href="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem href="/docs/components/typography" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuMenu>
      <NavigationMenuMenu>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent class="md:w-[500px] lg:w-[600px]">
          <ul class="grid w-full gap-3 p-4 md:grid-cols-2">
            <For each={components}>
              {(component) => (
                <ListItem title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              )}
            </For>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuMenu>
      <NavigationMenuMenu>
        <NavigationMenuLink
          class="group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          href="/docs"
        >
          Documentation
        </NavigationMenuLink>
      </NavigationMenuMenu>
    </NavigationMenu>
  )
}

function ListItem(props: { title: string; href: string; children: string }) {
  return (
    <li>
      <NavigationMenuItem
        as="a"
        href={props.href}
        class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors select-none"
      >
        <NavigationMenuItemLabel>{props.title}</NavigationMenuItemLabel>
        <NavigationMenuItemDescription>{props.children}</NavigationMenuItemDescription>
      </NavigationMenuItem>
    </li>
  )
}
