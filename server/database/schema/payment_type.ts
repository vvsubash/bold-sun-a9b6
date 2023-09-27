import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const payment_type = sqliteTable("payment_type", {
    id: integer('id').primaryKey({autoIncrement: true, onConflict: "rollback"})
})