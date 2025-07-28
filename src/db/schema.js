import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema.js",
    out : "./drizzle",
    dialect: "postgresql",
    dbCredentials : {
        url : "postgresql://postgres.rghgoleydvtbuuwgmkrt:sijangiri123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
    }
})