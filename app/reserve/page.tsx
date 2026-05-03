import ReservePageClient from '@/components/ReservePageClient'
import { getTenant } from '@/lib/tenant'

export default function ReservePage() {
  const tenant = getTenant()

  return <ReservePageClient tenant={tenant} />
}
