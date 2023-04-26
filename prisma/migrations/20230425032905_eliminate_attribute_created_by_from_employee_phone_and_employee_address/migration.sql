/*
  Warnings:

  - You are about to drop the column `created_by` on the `employee_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `employee_phones` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employee_addresses" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "employee_phones" DROP COLUMN "created_by";
