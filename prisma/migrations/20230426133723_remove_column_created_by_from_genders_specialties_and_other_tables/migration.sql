/*
  Warnings:

  - You are about to drop the column `created_by` on the `administrative_roles` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `client_records` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `education_levels` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `employee_updates` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `genders` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `job_status` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `marital_status` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `ranks` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `record_status` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `specialties` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `type_of_bonds` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `units` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "administrative_roles" DROP CONSTRAINT "administrative_roles_created_by_fkey";

-- DropForeignKey
ALTER TABLE "boards" DROP CONSTRAINT "boards_created_by_fkey";

-- DropForeignKey
ALTER TABLE "client_records" DROP CONSTRAINT "client_records_created_by_fkey";

-- DropForeignKey
ALTER TABLE "education_levels" DROP CONSTRAINT "education_levels_created_by_fkey";

-- DropForeignKey
ALTER TABLE "employee_updates" DROP CONSTRAINT "employee_updates_created_by_fkey";

-- DropForeignKey
ALTER TABLE "genders" DROP CONSTRAINT "genders_created_by_fkey";

-- DropForeignKey
ALTER TABLE "job_status" DROP CONSTRAINT "job_status_created_by_fkey";

-- DropForeignKey
ALTER TABLE "marital_status" DROP CONSTRAINT "marital_status_created_by_fkey";

-- DropForeignKey
ALTER TABLE "ranks" DROP CONSTRAINT "ranks_created_by_fkey";

-- DropForeignKey
ALTER TABLE "record_status" DROP CONSTRAINT "record_status_created_by_fkey";

-- DropForeignKey
ALTER TABLE "specialties" DROP CONSTRAINT "specialties_created_by_fkey";

-- DropForeignKey
ALTER TABLE "type_of_bonds" DROP CONSTRAINT "type_of_bonds_created_by_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_created_by_fkey";

-- DropIndex
DROP INDEX "client_records_created_by_key";

-- DropIndex
DROP INDEX "employee_updates_created_by_key";

-- AlterTable
ALTER TABLE "administrative_roles" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "boards" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "client_records" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "education_levels" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "employee_updates" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "genders" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "job_status" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "marital_status" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "ranks" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "record_status" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "specialties" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "type_of_bonds" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "units" DROP COLUMN "created_by";
