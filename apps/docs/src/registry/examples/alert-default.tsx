import { CheckCircle } from "lucide-solid"
import { Alert, AlertTitle } from "~/registry/ui/alert"

export default function AlertDefault() {
  return (
    <Alert>
      <CheckCircle class="size-4" />
      <AlertTitle>Your account has been verified!</AlertTitle>
    </Alert>
  )
}
