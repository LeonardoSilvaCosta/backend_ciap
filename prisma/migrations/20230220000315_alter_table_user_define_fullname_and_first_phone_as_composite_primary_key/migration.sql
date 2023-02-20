/*
  Warnings:

  - You are about to drop the column `userId` on the `addresses` table. All the data in the column will be lost.
  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `employees` table. All the data in the column will be lost.
  - The primary key for the `especialists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `especialists` table. All the data in the column will be lost.
  - The primary key for the `phones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `phones` table. All the data in the column will be lost.
  - The primary key for the `update_informations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fkEmployee` on the `update_informations` table. All the data in the column will be lost.
  - You are about to drop the column `fkUser` on the `update_informations` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_fullname,user_first_phone]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_fullname,user_first_phone]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[employee_fullname,employee_first_phone]` on the table `especialists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_fullname,user_first_phone]` on the table `phones` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[employee_fullname,employee_first_phone]` on the table `update_informations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_fullname,user_first_phone]` on the table `update_informations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_first_phone` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_fullname` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_first_phone` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_fullname` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_first_phone` to the `especialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_fullname` to the `especialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_first_phone` to the `phones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_fullname` to the `phones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_first_phone` to the `update_informations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_fullname` to the `update_informations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_first_phone` to the `update_informations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_fullname` to the `update_informations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_userId_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_id_fkey";

-- DropForeignKey
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_userId_fkey";

-- DropForeignKey
ALTER TABLE "phones" DROP CONSTRAINT "phones_id_fkey";

-- DropForeignKey
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_fkEmployee_fkey";

-- DropForeignKey
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_fkUser_fkey";

-- DropIndex
DROP INDEX "addresses_userId_key";

-- DropIndex
DROP INDEX "update_informations_fkEmployee_key";

-- DropIndex
DROP INDEX "update_informations_fkUser_key";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "userId",
ADD COLUMN     "user_first_phone" TEXT NOT NULL,
ADD COLUMN     "user_fullname" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "employees" DROP CONSTRAINT "employees_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_first_phone" TEXT NOT NULL,
ADD COLUMN     "user_fullname" VARCHAR(255) NOT NULL,
ADD CONSTRAINT "employees_pkey" PRIMARY KEY ("user_fullname", "user_first_phone");

-- AlterTable
ALTER TABLE "especialists" DROP CONSTRAINT "especialists_pkey",
DROP COLUMN "userId",
ADD COLUMN     "employee_first_phone" TEXT NOT NULL,
ADD COLUMN     "employee_fullname" VARCHAR(255) NOT NULL,
ADD CONSTRAINT "especialists_pkey" PRIMARY KEY ("employee_fullname", "employee_first_phone");

-- AlterTable
ALTER TABLE "phones" DROP CONSTRAINT "phones_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_first_phone" TEXT NOT NULL,
ADD COLUMN     "user_fullname" VARCHAR(255) NOT NULL,
ADD CONSTRAINT "phones_pkey" PRIMARY KEY ("user_fullname", "user_first_phone");

-- AlterTable
ALTER TABLE "update_informations" DROP CONSTRAINT "update_informations_pkey",
DROP COLUMN "fkEmployee",
DROP COLUMN "fkUser",
ADD COLUMN     "employee_first_phone" TEXT NOT NULL,
ADD COLUMN     "employee_fullname" VARCHAR(255) NOT NULL,
ADD COLUMN     "user_first_phone" TEXT NOT NULL,
ADD COLUMN     "user_fullname" VARCHAR(255) NOT NULL,
ADD CONSTRAINT "update_informations_pkey" PRIMARY KEY ("employee_fullname", "employee_first_phone", "user_fullname", "user_first_phone");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("fullname", "first_phone");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_user_fullname_user_first_phone_key" ON "addresses"("user_fullname", "user_first_phone");

-- CreateIndex
CREATE UNIQUE INDEX "employees_user_fullname_user_first_phone_key" ON "employees"("user_fullname", "user_first_phone");

-- CreateIndex
CREATE UNIQUE INDEX "especialists_employee_fullname_employee_first_phone_key" ON "especialists"("employee_fullname", "employee_first_phone");

-- CreateIndex
CREATE UNIQUE INDEX "phones_user_fullname_user_first_phone_key" ON "phones"("user_fullname", "user_first_phone");

-- CreateIndex
CREATE UNIQUE INDEX "update_informations_employee_fullname_employee_first_phone_key" ON "update_informations"("employee_fullname", "employee_first_phone");

-- CreateIndex
CREATE UNIQUE INDEX "update_informations_user_fullname_user_first_phone_key" ON "update_informations"("user_fullname", "user_first_phone");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_fullname_user_first_phone_fkey" FOREIGN KEY ("user_fullname", "user_first_phone") REFERENCES "users"("fullname", "first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "especialists" ADD CONSTRAINT "especialists_employee_fullname_employee_first_phone_fkey" FOREIGN KEY ("employee_fullname", "employee_first_phone") REFERENCES "employees"("user_fullname", "user_first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_user_fullname_user_first_phone_fkey" FOREIGN KEY ("user_fullname", "user_first_phone") REFERENCES "users"("fullname", "first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_fullname_user_first_phone_fkey" FOREIGN KEY ("user_fullname", "user_first_phone") REFERENCES "users"("fullname", "first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "update_informations" ADD CONSTRAINT "update_informations_employee_fullname_employee_first_phone_fkey" FOREIGN KEY ("employee_fullname", "employee_first_phone") REFERENCES "employees"("user_fullname", "user_first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "update_informations" ADD CONSTRAINT "update_informations_user_fullname_user_first_phone_fkey" FOREIGN KEY ("user_fullname", "user_first_phone") REFERENCES "users"("fullname", "first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;
