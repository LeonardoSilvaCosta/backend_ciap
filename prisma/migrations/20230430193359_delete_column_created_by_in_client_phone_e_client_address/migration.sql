/*
  Warnings:

  - You are about to drop the column `created_by` on the `client_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `client_phones` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "client_addresses" DROP CONSTRAINT "client_addresses_created_by_fkey";

-- DropForeignKey
ALTER TABLE "client_phones" DROP CONSTRAINT "client_phones_created_by_fkey";

-- AlterTable
ALTER TABLE "client_addresses" DROP COLUMN "created_by";

-- AlterTable
ALTER TABLE "client_phones" DROP COLUMN "created_by";
