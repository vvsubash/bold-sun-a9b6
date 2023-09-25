import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database('./server/database/db.sqlite');
const db = drizzle(sqlite);

migrate(db, {
  migrationsFolder: './server/database/migrations/'
})
