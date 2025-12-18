import { Button } from "~/registry/ui/button"
import { Spinner } from "~/registry/ui/spinner"

export default function ButtonLoading() {
  return (
    <Button disabled size="sm" variant="outline">
      <Spinner /> Submit
    </Button>
  )
}
