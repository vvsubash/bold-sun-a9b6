import { todos } from "../../database/schema/todo";
import { useDb } from "../../utils/database_connction";
export default defineEventHandler(async ({ context }) => {
  try {
    return await useDb().select().from(todos).all();
  } catch (error) {
    throw error;
  }
});
