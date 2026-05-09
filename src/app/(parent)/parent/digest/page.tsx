import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { auth } from '@/lib/auth/authOptions'
import { renderDigestHtml } from '@/lib/parent/digest'
import {
  loadWeeklyDigest,
  parseWeekEndingParam,
} from '@/lib/parent/digestService'

export const dynamic = 'force-dynamic'

interface ParentDigestPageProps {
  searchParams?: { weekEnding?: string | string[] }
}

function pickParam(value: string | string[] | undefined): string | null {
  if (!value) return null
  return Array.isArray(value) ? (value[0] ?? null) : value
}

export default async function ParentDigestPage({
  searchParams,
}: ParentDigestPageProps) {
  const session = await auth()
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/parent/digest')
  }

  const requested = parseWeekEndingParam(pickParam(searchParams?.weekEnding))
  const weekEnding = requested ?? new Date()

  const digest = await loadWeeklyDigest({
    userId: session.user.id,
    weekEnding,
    learnerLabel: session.user.name ?? session.user.email ?? undefined,
  })
  const html = renderDigestHtml(digest)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Weekly digest preview</h2>
          <p className="text-sm text-muted-foreground">
            {digest.weekStart} to {digest.weekEnd}. This is what the email will
            look like once sending is enabled.
          </p>
        </div>
        <Link
          href="/parent"
          className="text-sm text-muted-foreground hover:underline"
        >
          Back to dashboard
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email preview</CardTitle>
          <CardDescription>
            Rendered with the same template the future digest job will use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <iframe
            title="Weekly digest preview"
            srcDoc={html}
            className="h-[720px] w-full rounded-md border bg-white"
            data-testid="digest-preview-iframe"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Send to my email</CardTitle>
          <CardDescription>
            Sending is not yet wired up. We will switch this on once a transactional
            email provider is configured.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            disabled
            title="Email sending is not yet configured"
            aria-disabled="true"
          >
            Send digest now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
