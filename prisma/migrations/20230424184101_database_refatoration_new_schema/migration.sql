/*
  Warnings:

  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `administrative_role_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `alias` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `employeeUserFirstPhone` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `employeeUserFullname` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `employeement_status_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `inclusion_date` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `personnel_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `rank_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `unit_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employeement_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `especialists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personnels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `update_informations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[created_by]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `created_by` to the `administrative_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `education_levels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthplace` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code_name` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_education_level` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_gender` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_job_status` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_marital_level` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_unit` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `employees` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `employees` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `number_of_children` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `genders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `marital_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `ranks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `specialties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_fk_user_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_administrative_role_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_employeement_status_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_personnel_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_rank_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_unit_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_user_id_fkey";

-- DropForeignKey
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_fk_specialty_fkey";

-- DropForeignKey
ALTER TABLE "phones" DROP CONSTRAINT "phones_user_id_fkey";

-- DropForeignKey
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_education_level_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_gender_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_marital_level_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_registrant_fkey";

-- AlterTable
ALTER TABLE "administrative_roles" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "education_levels" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "employees" DROP CONSTRAINT "employees_pkey",
DROP COLUMN "administrative_role_id",
DROP COLUMN "alias",
DROP COLUMN "employeeUserFirstPhone",
DROP COLUMN "employeeUserFullname",
DROP COLUMN "employeement_status_id",
DROP COLUMN "inclusion_date",
DROP COLUMN "personnel_id",
DROP COLUMN "rank_id",
DROP COLUMN "unit_id",
DROP COLUMN "user_id",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "birthplace" TEXT NOT NULL,
ADD COLUMN     "code_name" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fk_board" TEXT,
ADD COLUMN     "fk_education_level" TEXT NOT NULL,
ADD COLUMN     "fk_function" TEXT,
ADD COLUMN     "fk_gender" TEXT NOT NULL,
ADD COLUMN     "fk_job_status" TEXT NOT NULL,
ADD COLUMN     "fk_marital_level" TEXT NOT NULL,
ADD COLUMN     "fk_rank" TEXT,
ADD COLUMN     "fk_specialyy" TEXT,
ADD COLUMN     "fk_unit" TEXT NOT NULL,
ADD COLUMN     "fullname" VARCHAR(255) NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "military_id" TEXT,
ADD COLUMN     "number_of_children" INTEGER NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD CONSTRAINT "employees_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "genders" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "marital_status" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ranks" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "specialties" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "units" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL;

-- DropTable
DROP TABLE "addresses";

-- DropTable
DROP TABLE "employeement_status";

-- DropTable
DROP TABLE "especialists";

-- DropTable
DROP TABLE "personnels";

-- DropTable
DROP TABLE "phones";

-- DropTable
DROP TABLE "update_informations";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "employee_phones" (
    "employee_id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "employee_phones_pkey" PRIMARY KEY ("employee_id","phone")
);

-- CreateTable
CREATE TABLE "employee_addresses" (
    "employee_id" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "employee_addresses_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "employee_updates" (
    "id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "associated_with" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "employee_updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "job_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boards" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_phones_employee_id_phone_key" ON "employee_phones"("employee_id", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "employee_updates_created_by_key" ON "employee_updates"("created_by");

-- CreateIndex
CREATE UNIQUE INDEX "job_status_name_key" ON "job_status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "boards_name_key" ON "boards"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_cpf_key" ON "employees"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_created_by_key" ON "employees"("created_by");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_gender_fkey" FOREIGN KEY ("fk_gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_marital_level_fkey" FOREIGN KEY ("fk_marital_level") REFERENCES "marital_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_education_level_fkey" FOREIGN KEY ("fk_education_level") REFERENCES "education_levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_unit_fkey" FOREIGN KEY ("fk_unit") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_function_fkey" FOREIGN KEY ("fk_function") REFERENCES "administrative_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_job_status_fkey" FOREIGN KEY ("fk_job_status") REFERENCES "job_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_rank_fkey" FOREIGN KEY ("fk_rank") REFERENCES "ranks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_board_fkey" FOREIGN KEY ("fk_board") REFERENCES "boards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_fk_specialyy_fkey" FOREIGN KEY ("fk_specialyy") REFERENCES "specialties"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_phones" ADD CONSTRAINT "employee_phones_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_phones" ADD CONSTRAINT "employee_phones_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_addresses" ADD CONSTRAINT "employee_addresses_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_addresses" ADD CONSTRAINT "employee_addresses_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_updates" ADD CONSTRAINT "employee_updates_associated_with_fkey" FOREIGN KEY ("associated_with") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_updates" ADD CONSTRAINT "employee_updates_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "genders" ADD CONSTRAINT "genders_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marital_status" ADD CONSTRAINT "marital_status_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education_levels" ADD CONSTRAINT "education_levels_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "administrative_roles" ADD CONSTRAINT "administrative_roles_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_status" ADD CONSTRAINT "job_status_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ranks" ADD CONSTRAINT "ranks_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boards" ADD CONSTRAINT "boards_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specialties" ADD CONSTRAINT "specialties_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
