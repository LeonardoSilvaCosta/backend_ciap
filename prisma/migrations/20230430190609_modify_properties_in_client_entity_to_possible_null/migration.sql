-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_fk_education_level_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_fk_job_status_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_fk_marital_level_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_fk_unit_fkey";

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "birthdate" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "fk_marital_level" DROP NOT NULL,
ALTER COLUMN "fk_education_level" DROP NOT NULL,
ALTER COLUMN "number_of_children" DROP NOT NULL,
ALTER COLUMN "birthplace" DROP NOT NULL,
ALTER COLUMN "code_name" DROP NOT NULL,
ALTER COLUMN "fk_unit" DROP NOT NULL,
ALTER COLUMN "fk_job_status" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_marital_level_fkey" FOREIGN KEY ("fk_marital_level") REFERENCES "marital_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_education_level_fkey" FOREIGN KEY ("fk_education_level") REFERENCES "education_levels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_unit_fkey" FOREIGN KEY ("fk_unit") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_job_status_fkey" FOREIGN KEY ("fk_job_status") REFERENCES "job_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;
