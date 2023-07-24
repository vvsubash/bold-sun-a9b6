import type { Config } from "drizzle-kit";

export default {
    schema: "./server/database/schema",
    out: "./server/database/migrations"
} as Config;