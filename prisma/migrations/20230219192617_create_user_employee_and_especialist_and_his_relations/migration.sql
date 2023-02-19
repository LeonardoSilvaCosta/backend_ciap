/*
  Warnings:

  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `employees` table. All the data in the column will be lost.
  - Added the required column `alias` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeement_status_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inclusion_date` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_id` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "employees_email_key";

-- AlterTable
ALTER TABLE "employees" DROP CONSTRAINT "employees_pkey",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "administrative_role_id" INTEGER,
ADD COLUMN     "alias" TEXT NOT NULL,
ADD COLUMN     "employeement_status_id" INTEGER NOT NULL,
ADD COLUMN     "inclusion_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "personnel_id" INTEGER,
ADD COLUMN     "rank_id" INTEGER NOT NULL,
ADD COLUMN     "unit_id" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "employees_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "employees_id_seq";

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,
    "birthdate" TIMESTAMP(3),
    "cpf" TEXT,
    "fk_gender" INTEGER NOT NULL,
    "email" TEXT,
    "fk_marital_level" INTEGER,
    "fk_education_level" INTEGER,
    "number_of_children" INTEGER,
    "birthplace" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_registrant" BIGINT NOT NULL,
    "fk_update_information" BIGINT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialists" (
    "userId" BIGINT NOT NULL,
    "fk_specialty" INTEGER NOT NULL,
    "concil_registration" TEXT NOT NULL,

    CONSTRAINT "especialists_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "telefones" (
    "id" BIGINT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "telefones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" BIGSERIAL NOT NULL,
    "postal_code" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "userId" BIGINT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marital_status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "marital_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education_levels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "education_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administrative_roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "administrative_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employeement_status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "employeement_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ranks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ranks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personnels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "personnels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "especialists_concil_registration_key" ON "especialists"("concil_registration");

-- CreateIndex
CREATE UNIQUE INDEX "telefones_telefone_key" ON "telefones"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_userId_key" ON "addresses"("userId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fk_gender_fkey" FOREIGN KEY ("fk_gender") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "employees" ADD CONSTRAINT "employees_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "especialists" ADD CONSTRAINT "especialists_fk_specialty_fkey" FOREIGN KEY ("fk_specialty") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "especialists" ADD CONSTRAINT "especialists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "telefones_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
