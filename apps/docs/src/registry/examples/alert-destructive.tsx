import { AlertCircle } from "lucide-solid"
import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle class="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
