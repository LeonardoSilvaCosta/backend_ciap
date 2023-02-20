/*
  Warnings:

  - The primary key for the `addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_first_phone` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `user_fullname` on the `addresses` table. All the data in the column will be lost.
  - The primary key for the `administrative_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `education_levels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `employeement_status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_first_phone` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `user_fullname` on the `employees` table. All the data in the column will be lost.
  - The primary key for the `especialists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employee_first_phone` on the `especialists` table. All the data in the column will be lost.
  - You are about to drop the column `employee_fullname` on the `especialists` table. All the data in the column will be lost.
  - The primary key for the `genders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `marital_status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `personnels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `phones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_first_phone` on the `phones` table. All the data in the column will be lost.
  - You are about to drop the column `user_fullname` on the `phones` table. All the data in the column will be lost.
  - The primary key for the `ranks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `specialties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `units` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `update_informations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employee_first_phone` on the `update_informations` table. All the data in the column will be lost.
  - You are about to drop the column `employee_fullname` on the `update_informations` table. All the data in the column will be lost.
  - You are about to drop the column `user_first_phone` on the `update_informations` table. All the data in the column will be lost.
  - You are about to drop the column `user_fullname` on the `update_informations` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employe_fullname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `employee_first_phone` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fk_user]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,telefone]` on the table `phones` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[employee_id]` on the table `update_informations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `update_informations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fullname,first_phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_user` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `especialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `phones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `update_informations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `update_informations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_registrant` to the `users` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_user_fullname_user_first_phone_fkey";

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
ALTER TABLE "employees" DROP CONSTRAINT "employees_user_fullname_user_first_phone_fkey";

-- DropForeignKey
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_employee_fullname_employee_first_phone_fkey";

-- DropForeignKey
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_fk_specialty_fkey";

-- DropForeignKey
ALTER TABLE "phones" DROP CONSTRAINT "phones_user_fullname_user_first_phone_fkey";

-- DropForeignKey
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_employee_fullname_employee_first_phone_fkey";

-- DropForeignKey
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_user_fullname_user_first_phone_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_employe_fullname_employee_first_phone_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_education_level_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_gender_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_marital_level_fkey";

-- DropIndex
DROP INDEX "addresses_user_fullname_user_first_phone_key";

-- DropIndex
DROP INDEX "employees_user_fullname_user_first_phone_key";

-- DropIndex
DROP INDEX "especialists_employee_fullname_employee_first_phone_key";

-- DropIndex
DROP INDEX "phones_telefone_key";

-- DropIndex
DROP INDEX "phones_user_fullname_user_first_phone_key";

-- DropIndex
DROP INDEX "update_informations_employee_fullname_employee_first_phone_key";

-- DropIndex
DROP INDEX "update_informations_user_fullname_user_first_phone_key";

-- AlterTable
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_pkey",
DROP COLUMN "user_first_phone",
DROP COLUMN "user_fullname",
ADD COLUMN     "fk_user" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "addresses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "addresses_id_seq";

-- AlterTable
ALTER TABLE "administrative_roles" DROP CONSTRAINT "administrative_roles_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "administrative_roles_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "administrative_roles_id_seq";

-- AlterTable
ALTER TABLE "education_levels" DROP CONSTRAINT "education_levels_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "education_levels_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "education_levels_id_seq";

-- AlterTable
ALTER TABLE "employeement_status" DROP CONSTRAINT "employeement_status_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "employeement_status_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "employeement_status_id_seq";

-- AlterTable
ALTER TABLE "employees" DROP CONSTRAINT "employees_pkey",
DROP COLUMN "user_first_phone",
DROP COLUMN "user_fullname",
ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "administrative_role_id" SET DATA TYPE TEXT,
ALTER COLUMN "employeement_status_id" SET DATA TYPE TEXT,
ALTER COLUMN "personnel_id" SET DATA TYPE TEXT,
ALTER COLUMN "rank_id" SET DATA TYPE TEXT,
ALTER COLUMN "unit_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "employees_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_pkey",
DROP COLUMN "employee_first_phone",
DROP COLUMN "employee_fullname",
ADD COLUMN     "employee_id" TEXT NOT NULL,
ALTER COLUMN "fk_specialty" SET DATA TYPE TEXT,
ADD CONSTRAINT "especialists_pkey" PRIMARY KEY ("employee_id");

-- AlterTable
ALTER TABLE "genders" DROP CONSTRAINT "genders_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "genders_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "genders_id_seq";

-- AlterTable
ALTER TABLE "marital_status" DROP CONSTRAINT "marital_status_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "marital_status_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "marital_status_id_seq";

-- AlterTable
ALTER TABLE "personnels" DROP CONSTRAINT "personnels_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "personnels_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "personnels_id_seq";

-- AlterTable
ALTER TABLE "phones" DROP CONSTRAINT "phones_pkey",
DROP COLUMN "user_first_phone",
DROP COLUMN "user_fullname",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "phones_pkey" PRIMARY KEY ("user_id", "telefone");

-- AlterTable
ALTER TABLE "ranks" DROP CONSTRAINT "ranks_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ranks_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ranks_id_seq";

-- AlterTable
ALTER TABLE "specialties" DROP CONSTRAINT "specialties_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "specialties_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "specialties_id_seq";

-- AlterTable
ALTER TABLE "units" DROP CONSTRAINT "units_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "units_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "units_id_seq";

-- AlterTable
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_pkey",
DROP COLUMN "employee_first_phone",
DROP COLUMN "employee_fullname",
DROP COLUMN "user_first_phone",
DROP COLUMN "user_fullname",
ADD COLUMN     "employee_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "update_informations_pkey" PRIMARY KEY ("employee_id", "user_id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "employe_fullname",
DROP COLUMN "employee_first_phone",
ADD COLUMN     "fk_registrant" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "fk_gender" SET DATA TYPE TEXT,
ALTER COLUMN "fk_marital_level" SET DATA TYPE TEXT,
ALTER COLUMN "fk_education_level" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_fk_user_key" ON "addresses"("fk_user");

-- CreateIndex
CREATE UNIQUE INDEX "phones_user_id_telefone_key" ON "phones"("user_id", "telefone");

-- CreateIndex
CREATE UNIQUE INDEX "update_informations_employee_id_key" ON "update_informations"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "update_informations_user_id_key" ON "update_informations"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_fullname_first_phone_key" ON "users"("fullname", "first_phone");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_registrant_fkey" FOREIGN KEY ("fk_registrant") REFERENCES "employees"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_gender_fkey" FOREIGN KEY ("fk_gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_marital_level_fkey" FOREIGN KEY ("fk_marital_level") REFERENCES "marital_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_education_level_fkey" FOREIGN KEY ("fk_education_level") REFERENCES "education_levels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_administrative_role_id_fkey" FOREIGN KEY ("administrative_role_id") REFERENCES "administrative_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_employeement_status_id_fkey" FOREIGN KEY ("employeement_status_id") REFERENCES "employeement_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_rank_id_fkey" FOREIGN KEY ("rank_id") REFERENCES "ranks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_personnel_id_fkey" FOREIGN KEY ("personnel_id") REFERENCES "personnels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "especialists" ADD CONSTRAINT "especialists_fk_specialty_fkey" FOREIGN KEY ("fk_specialty") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "especialists" ADD CONSTRAINT "especialists_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "update_informations" ADD CONSTRAINT "update_informations_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "update_informations" ADD CONSTRAINT "update_informations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
