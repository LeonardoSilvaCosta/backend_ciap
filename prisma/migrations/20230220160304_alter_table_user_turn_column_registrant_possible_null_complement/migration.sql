-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_registrant_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "fk_registrant" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_registrant_fkey" FOREIGN KEY ("fk_registrant") REFERENCES "employees"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
