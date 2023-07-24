interface Itodo {
    id: number
    task: string
}
const Itodos:Itodo[] = [
    {
        id: 1,
        task: "bring Milk"
    },
    {
        id: 2,
        task: "take bunty to walk"
    }
]

import { todos  } from '../../database/schema/todo'
import { drizzle as drizzleD1, DrizzleD1Database} from "drizzle-orm/d1"
export default defineEventHandler(async ({context}) => {
    const db:DrizzleD1Database = drizzleD1(context.cloudflare.env.DB)
    try {
        if(context.cloudflare.env) {
          return await db.select().from(todos).all()
        } else {
          return Itodos
        }
      } catch (error) {
        throw(error)
      }
    // return todos
})