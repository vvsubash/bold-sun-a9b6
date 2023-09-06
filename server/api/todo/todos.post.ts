import { todos } from "../../database/schema/todo";
import { useDb } from "../../utils/database_connction";


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    let data = await useDb()
      .insert(todos)
      .values(body)
      .returning()
      .get();
    return data;
  } catch (error) {
    throw error;
  }
});
