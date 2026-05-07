import { MongoClient, type Db, type MongoClientOptions } from 'mongodb'

const DEFAULT_DB_NAME = 'lumen-academy'

const clientOptions: MongoClientOptions = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10_000,
}

declare global {
  // eslint-disable-next-line no-var
  var __lumenMongoClientPromise: Promise<MongoClient> | undefined
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Add it to .env.local for development or to the deployment environment.'
    )
  }
  return new MongoClient(uri, clientOptions).connect()
}

function getClientPromise(): Promise<MongoClient> {
  if (process.env.NODE_ENV === 'development') {
    if (!globalThis.__lumenMongoClientPromise) {
      globalThis.__lumenMongoClientPromise = createClientPromise()
    }
    return globalThis.__lumenMongoClientPromise
  }
  return createClientPromise()
}

export async function getMongoClient(): Promise<MongoClient> {
  return getClientPromise()
}

export async function getMongoDb(): Promise<Db> {
  const client = await getClientPromise()
  return client.db(process.env.MONGODB_DB_NAME ?? DEFAULT_DB_NAME)
}
