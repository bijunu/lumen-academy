import type { ContentRepository } from './contentRepository'
import { LocalContentRepository } from './localContentRepository'
import { MongoContentRepository } from './mongoContentRepository'
import { logger } from '@/lib/logger'

export type { ContentRepository } from './contentRepository'
export { LocalContentRepository } from './localContentRepository'
export { MongoContentRepository } from './mongoContentRepository'

let cached: ContentRepository | null = null

export function getContentRepository(): ContentRepository {
  if (cached) return cached

  if (process.env.MONGODB_URI) {
    logger.info('content', 'Using MongoContentRepository (MONGODB_URI present)')
    cached = new MongoContentRepository()
  } else {
    logger.info('content', 'Using LocalContentRepository (no MONGODB_URI set)')
    cached = new LocalContentRepository()
  }
  return cached
}

export function __resetContentRepositoryForTests(): void {
  cached = null
}
