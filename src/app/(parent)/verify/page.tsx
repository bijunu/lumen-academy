import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  type ConsumeResult,
  getParentalVerification,
} from '@/lib/auth/parentalVerification'

export const dynamic = 'force-dynamic'

type SearchParams = { token?: string | string[] }

const REASON_COPY: Record<
  Extract<ConsumeResult, { ok: false }>['reason'],
  { title: string; body: string }
> = {
  'not-found': {
    title: 'Link not recognised',
    body: 'We could not find that verification link. Please check you have the latest one and try again.',
  },
  expired: {
    title: 'Link has expired',
    body: 'Verification links last for 24 hours. Ask the learner to send a fresh one.',
  },
  'already-consumed': {
    title: 'Link already used',
    body: 'This verification link has already been used. No further action is needed.',
  },
  'user-missing': {
    title: 'Learner account not found',
    body: 'We could not match this link to a learner account. The learner may have signed up again. Please request a new link.',
  },
}

function pickToken(value: string | string[] | undefined): string | null {
  if (!value) return null
  const token = Array.isArray(value) ? value[0] : value
  return typeof token === 'string' && token.length > 0 ? token : null
}

export default async function ParentVerifyPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const token = pickToken(searchParams.token)

  if (!token) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verify your child&apos;s account</CardTitle>
          <CardDescription>
            This page confirms parental consent for a Welldrum Academy learner.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Open the verification link the learner sent you. It will include a token
          that proves you intended to grant consent.
        </CardContent>
      </Card>
    )
  }

  const result = await getParentalVerification().consumeToken(token)

  if (result.ok) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Consent recorded</CardTitle>
          <CardDescription>Thank you for verifying.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          The learner&apos;s account is now flagged as parent verified. They can
          continue using Welldrum Academy with progress saved to their profile.
        </CardContent>
      </Card>
    )
  }

  const copy = REASON_COPY[result.reason]
  return (
    <Card>
      <CardHeader>
        <CardTitle>{copy.title}</CardTitle>
        <CardDescription>We could not complete verification.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{copy.body}</CardContent>
    </Card>
  )
}
