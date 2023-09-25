import { sqliteTable, text, integer} from "drizzle-orm/sqlite-core"

export const employees = sqliteTable('employee', {
    id: integer('id').primaryKey({autoIncrement: true, onConflict: "rollback"}),
    first_name: text('first_name').notNull(),
    aadhar_card_number: text('aadhar_card_number').notNull(),
})

