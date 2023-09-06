import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { relations } from 'drizzle-orm'
import { payments } from "./payments"
export const employees = sqliteTable('employee', {
    id: integer('id').primaryKey(),
    first_name: text('first_name').notNull(),
    aadhar_card_number: text('aadhar_card_number').notNull(),
})

export const paymentsRelations = relations(employees, ({many}) => ({
    payments: many(payments)
}))

