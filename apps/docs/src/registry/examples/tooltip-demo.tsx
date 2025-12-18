import { Button } from "~/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger as={Button<"button">} variant="outline">
        Hover
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
