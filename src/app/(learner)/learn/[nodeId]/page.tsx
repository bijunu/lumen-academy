import { getContentRepository } from '@/lib/content'
import { notFound } from 'next/navigation'
import { LearnPageClient } from './LearnPageClient'

interface LearnPageProps {
  params: { nodeId: string }
}

export default async function LearnPage({ params }: LearnPageProps) {
  const node = await getContentRepository().getNode(params.nodeId)

  if (!node) {
    notFound()
  }

  return <LearnPageClient node={node} />
}
