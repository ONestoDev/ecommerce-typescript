import "dotenv/config";
import { defineConfig } from "prisma/config";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL não definida no ambiente.");
}

export default defineConfig({
  schema: "src/main/infra/database/orm/prisma/schema.prisma",
  migrations: {
    path: "src/main/infra/database/orm/prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
