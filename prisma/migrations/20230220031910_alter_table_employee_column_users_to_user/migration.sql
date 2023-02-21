/*
  Warnings:

  - A unique constraint covering the columns `[fk_registrant]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_fk_registrant_key" ON "users"("fk_registrant");
