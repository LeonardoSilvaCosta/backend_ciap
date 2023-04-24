-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "avatar" TEXT,
    "fullname" VARCHAR(255) NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "fk_gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fk_marital_level" TEXT NOT NULL,
    "fk_education_level" TEXT NOT NULL,
    "number_of_children" INTEGER NOT NULL,
    "birthplace" TEXT NOT NULL,
    "code_name" TEXT NOT NULL,
    "fk_unit" TEXT NOT NULL,
    "fk_function" TEXT,
    "fk_job_status" TEXT NOT NULL,
    "military_id" TEXT,
    "fk_rank" TEXT,
    "fk_board" TEXT,
    "fk_policy_holder" TEXT,
    "fk_type_of_bond" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_phones" (
    "clientId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "client_phones_pkey" PRIMARY KEY ("clientId","phone")
);

-- CreateTable
CREATE TABLE "client_addresses" (
    "clientId" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "client_addresses_pkey" PRIMARY KEY ("clientId")
);

-- CreateTable
CREATE TABLE "client_updates" (
    "id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "associated_with" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "client_updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_records" (
    "id" TEXT NOT NULL,
    "fk_client_id" TEXT NOT NULL,
    "fk_status_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "client_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "record_status" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "record_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_of_bonds" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "type_of_bonds_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_created_by_key" ON "clients"("created_by");

-- CreateIndex
CREATE UNIQUE INDEX "client_phones_clientId_phone_key" ON "client_phones"("clientId", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "client_updates_created_by_key" ON "client_updates"("created_by");

-- CreateIndex
CREATE UNIQUE INDEX "client_records_created_by_key" ON "client_records"("created_by");

-- CreateIndex
CREATE UNIQUE INDEX "record_status_name_key" ON "record_status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_of_bonds_name_key" ON "type_of_bonds"("name");

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_gender_fkey" FOREIGN KEY ("fk_gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_marital_level_fkey" FOREIGN KEY ("fk_marital_level") REFERENCES "marital_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_education_level_fkey" FOREIGN KEY ("fk_education_level") REFERENCES "education_levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_unit_fkey" FOREIGN KEY ("fk_unit") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_function_fkey" FOREIGN KEY ("fk_function") REFERENCES "administrative_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_job_status_fkey" FOREIGN KEY ("fk_job_status") REFERENCES "job_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_rank_fkey" FOREIGN KEY ("fk_rank") REFERENCES "ranks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_board_fkey" FOREIGN KEY ("fk_board") REFERENCES "boards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_policy_holder_fkey" FOREIGN KEY ("fk_policy_holder") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk_type_of_bond_fkey" FOREIGN KEY ("fk_type_of_bond") REFERENCES "type_of_bonds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_phones" ADD CONSTRAINT "client_phones_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_phones" ADD CONSTRAINT "client_phones_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_addresses" ADD CONSTRAINT "client_addresses_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_addresses" ADD CONSTRAINT "client_addresses_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_updates" ADD CONSTRAINT "client_updates_associated_with_fkey" FOREIGN KEY ("associated_with") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_updates" ADD CONSTRAINT "client_updates_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_records" ADD CONSTRAINT "client_records_fk_status_id_fkey" FOREIGN KEY ("fk_status_id") REFERENCES "record_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_records" ADD CONSTRAINT "client_records_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record_status" ADD CONSTRAINT "record_status_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "type_of_bonds" ADD CONSTRAINT "type_of_bonds_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
