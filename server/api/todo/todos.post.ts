import { todos } from "../../database/schema/todo";
import { drizzle as drizzleD1, DrizzleD1Database } from "drizzle-orm/d1";
export default defineEventHandler(({ context }) => {
  try {
    if (context?.cloudflare?.env) {
      const db: DrizzleD1Database = drizzleD1(context.cloudflare.env.bold_sun);
      db.insert(todos).values({
        id: 3,
        task: "Scratch 🐩 Back",
      });
      return "data inserted into cloudflare D1 database";
    } else {
      return "Not in cloudflare env";
    }
  } catch (error) {
    throw error;
  }
});
