import { todos } from "../../database/schema/todo";
import { useDb } from "../../utils/database_connction";

export default defineEventHandler(async ({ context }) => {
  try {
    let data = await useDb()
      .insert(todos)
      .values({
        id: 2,
        task: "Scratch Bunty Back",
      })
      .returning()
      .get();
    return data;
  } catch (error) {
    throw error;
  }
});
