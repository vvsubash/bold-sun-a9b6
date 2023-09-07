import { sqliteTable, text, integer, } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"
import { employees } from "./employees"


export const payments = sqliteTable('payments', {
    id: integer('id'),
    type: text('payment_type'),
    // add relationship later
    employee_id: integer('employee_id'),
    amount: integer('amount'),
})

export const employeeRelations = relations(payments, ({ one }) => ({
    employee: one(employees, {
        fields: [payments.employee_id],
        references: [employees.id],
    })
}))