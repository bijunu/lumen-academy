import type { Db } from 'mongodb'
import type { ContentRepository } from './contentRepository'
import type { SkillNode, Zone } from '@/types/content'
import type { RealmId } from '@/lib/constants/realms'
import { getMongoDb } from '@/lib/db/mongoClient'

export const NODES_COLLECTION = 'content_nodes'
export const ZONES_COLLECTION = 'content_zones'

type NodeDoc = SkillNode & { _id?: unknown }
type ZoneDoc = Zone & { _id?: unknown }

function stripId<T extends { _id?: unknown }>(doc: T | null): Omit<T, '_id'> | null {
  if (!doc) return null
  const { _id, ...rest } = doc
  void _id
  return rest
}

export class MongoContentRepository implements ContentRepository {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  private async nodes() {
    const db = await this.dbPromise
    return db.collection<NodeDoc>(NODES_COLLECTION)
  }

  private async zones() {
    const db = await this.dbPromise
    return db.collection<ZoneDoc>(ZONES_COLLECTION)
  }

  async getNode(id: string): Promise<SkillNode | null> {
    const col = await this.nodes()
    const doc = await col.findOne({ id })
    return stripId(doc) as SkillNode | null
  }

  async getZoneNodes(zoneId: string): Promise<SkillNode[]> {
    const col = await this.nodes()
    const docs = await col.find({ zoneId }).toArray()
    return docs.map(d => stripId(d)) as SkillNode[]
  }

  async getRealmZones(realmId: RealmId): Promise<Zone[]> {
    const col = await this.zones()
    const docs = await col.find({ realm: realmId }).toArray()
    return docs.map(d => stripId(d)) as Zone[]
  }

  async getAllNodes(): Promise<SkillNode[]> {
    const col = await this.nodes()
    const docs = await col.find({}).toArray()
    return docs.map(d => stripId(d)) as SkillNode[]
  }
}
