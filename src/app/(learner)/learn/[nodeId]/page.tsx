import { localContent } from '@/lib/content/localContentRepository'
import { notFound } from 'next/navigation'
import { LearnPageClient } from './LearnPageClient'

interface LearnPageProps {
  params: { nodeId: string }
}

export default async function LearnPage({ params }: LearnPageProps) {
  const node = await localContent.getNode(params.nodeId)

  if (!node) {
    notFound()
  }

  return <LearnPageClient node={node} />
}
