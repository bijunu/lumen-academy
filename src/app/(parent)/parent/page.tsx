import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth/authOptions'

export const dynamic = 'force-dynamic'

export default async function ParentPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/parent')
  }

  return (
    <p className="text-muted-foreground">
      Parent dashboard coming soon. You will be able to view weekly progress, set time caps, and
      configure subject focus weeks.
    </p>
  )
}
