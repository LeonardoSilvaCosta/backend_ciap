/*
  Warnings:

  - You are about to drop the column `fk_update_information` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "fk_update_information";

-- CreateTable
CREATE TABLE "update_informations" (
    "fkEmployee" BIGINT NOT NULL,
    "fkUser" BIGINT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "update_informations_pkey" PRIMARY KEY ("fkEmployee","fkUser")
);

-- CreateIndex
CREATE UNIQUE INDEX "update_informations_fkEmployee_key" ON "update_informations"("fkEmployee");

-- CreateIndex
CREATE UNIQUE INDEX "update_informations_fkUser_key" ON "update_informations"("fkUser");

-- AddForeignKey
ALTER TABLE "update_informations" ADD CONSTRAINT "update_informations_fkEmployee_fkey" FOREIGN KEY ("fkEmployee") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "update_informations" ADD CONSTRAINT "update_informations_fkUser_fkey" FOREIGN KEY ("fkUser") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
