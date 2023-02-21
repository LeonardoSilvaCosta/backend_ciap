/*
  Warnings:

  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `telefones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "telefones" DROP CONSTRAINT "telefones_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_fk_gender_fkey";

-- DropTable
DROP TABLE "genres";

-- DropTable
DROP TABLE "telefones";

-- CreateTable
CREATE TABLE "phones" (
    "id" BIGINT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "phones_telefone_key" ON "phones"("telefone");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_gender_fkey" FOREIGN KEY ("fk_gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
