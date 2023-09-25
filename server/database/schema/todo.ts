import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"
import { employees } from "./employees"

export const todos = sqliteTable('todo', {
    id: integer('id').primaryKey(),
    task: text('task').notNull(),
    priority: integer('priority').notNull().default(1),
    belongs_to_employee: integer('employee_id'),
})

export const employeeTodosRelations = relations(employees, ({one}) => {
    employee: one(employees, {
        fields: [todos.belongs_to_employee],
        references: [employees.id],
    })
})