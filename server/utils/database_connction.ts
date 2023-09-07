import { drizzle as drizzleD1, DrizzleD1Database } from 'drizzle-orm/d1'
import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
// @ts-ignore
import Database from 'better-sqlite3'
import { join } from 'pathe'

let _db: DrizzleD1Database| BetterSQLite3Database| null = null;

export const useDb = () => {
    if(process.env.bold_sun) {
        _db = drizzleD1(process.env.bold_sun)
    } else if (process.dev) {
        const {dbDir} = useRuntimeConfig()
        const sqlite = new Database(join(dbDir, "./db.sqlite"))
        _db = drizzle(sqlite)
    } else {
        throw new Error('No database found')
    }
    return _db
} 