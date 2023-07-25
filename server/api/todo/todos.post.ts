import { todos  } from '../../database/schema/todo'
import { drizzle as drizzleD1, DrizzleD1Database} from "drizzle-orm/d1"
export default defineEventHandler(async ({context}) => {
    try {
        if(context?.cloudflare?.env) {
            const db:DrizzleD1Database = drizzleD1(context.cloudflare.env.bold_sun)
            return await db.insert(todos).values(
                {
                    task:"Scratch Bunty Back"
                }
            ).returning()
        } else {
          return "Not in cloudflare env"
        }
      } catch (error) {
        throw(error)
      }

})