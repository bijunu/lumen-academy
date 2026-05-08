import type { RealmId } from '@/lib/constants/realms'

import type { StrugglingTopic } from './strugglingTopics'

export const CONVERSATION_PROMPTS_DEFAULT_LIMIT = 3

const TEMPLATES_BY_REALM: Record<RealmId, readonly string[]> = {
  numerica: [
    'Ask your child to walk you through {topic} using something around the house.',
    'Try a quick maths chat about {topic} on the way to school.',
    'Get them to set you a {topic} problem and check your working.',
  ],
  vitalia: [
    'Ask your child to teach you how {topic} works in their own words.',
    'Spot something at home that links to {topic} and ask them to explain it.',
    'Talk about {topic} over dinner and see what questions come up.',
  ],
  elementia: [
    'Ask your child to give you a real life example of {topic}.',
    'See if {topic} comes up at the supermarket on your next shop.',
    'Ask them to draw out what they remember about {topic}.',
  ],
  mechanica: [
    'Ask your child to point out {topic} on a walk or a car journey.',
    'Get them to demo {topic} using a toy or kitchen item.',
    'Ask them what surprised them about {topic} the first time they learnt it.',
  ],
}

export interface ConversationPrompt {
  text: string
  realm: RealmId
  nodeId: string
}

export function suggestConversationPrompts(
  topics: readonly StrugglingTopic[],
  max: number = CONVERSATION_PROMPTS_DEFAULT_LIMIT
): ConversationPrompt[] {
  if (max <= 0) return []
  const out: ConversationPrompt[] = []
  for (const topic of topics) {
    if (out.length >= max) break
    const family = TEMPLATES_BY_REALM[topic.realm]
    const idx = stableIndex(topic.nodeId, family.length)
    const template = family[idx]
    out.push({
      text: template.replace('{topic}', topic.title.toLowerCase()),
      realm: topic.realm,
      nodeId: topic.nodeId,
    })
  }
  return out
}

function stableIndex(seed: string, modulo: number): number {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return Math.abs(h) % modulo
}
