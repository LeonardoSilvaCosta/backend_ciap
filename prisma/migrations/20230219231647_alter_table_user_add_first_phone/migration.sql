/*
  Warnings:

  - Added the required column `first_phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "first_phone" TEXT NOT NULL;
