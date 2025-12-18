import { IconGitBranch } from "~/components/icons"
import { Button } from "~/registry/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button size="sm" variant="outline">
      <IconGitBranch /> New Branch
    </Button>
  )
}
