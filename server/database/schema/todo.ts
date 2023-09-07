import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const todos = sqliteTable('todo', {
    id: integer('id').primaryKey(),
    task: text('task').notNull(),
    priority: integer('priority').notNull().default(1)
})