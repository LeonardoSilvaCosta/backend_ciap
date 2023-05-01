-- DropForeignKey
ALTER TABLE "client_records" DROP CONSTRAINT "client_records_fk_status_id_fkey";

-- AddForeignKey
ALTER TABLE "client_records" ADD CONSTRAINT "client_records_fk_status_id_fkey" FOREIGN KEY ("fk_status_id") REFERENCES "record_status"("id") ON DELETE CASCADE ON UPDATE CASCADE;
