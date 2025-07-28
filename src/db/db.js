import postgres from "postgres"
import { drizzle } from "drizzle-orm"

const connectionString = "postgresql://postgres.rghgoleydvtbuuwgmkrt:sijangiri123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
const connection = postgres(connectionString)
export const db = drizzle(connection)