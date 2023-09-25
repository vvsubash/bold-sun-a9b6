import { employees } from "~/server/database/schema/employees.1";
import { useDb } from "../../utils/database_connection";


export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {name,  aadhar_card_number}: {name: string, aadhar_card_number: string} = body
  try {
    let data = await useDb()
      .insert(employees)
      .values({
        first_name: name,
        aadhar_card_number: aadhar_card_number
      })
      .returning()
      .get();
    return body;
  } catch (error) {
    throw error;
  }
});
