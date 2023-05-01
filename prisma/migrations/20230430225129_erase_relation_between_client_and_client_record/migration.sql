/*
  Warnings:

  - A unique constraint covering the columns `[fk_client_id]` on the table `client_records` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "client_records_fk_client_id_key" ON "client_records"("fk_client_id");

-- AddForeignKey
ALTER TABLE "client_records" ADD CONSTRAINT "client_records_fk_client_id_fkey" FOREIGN KEY ("fk_client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
