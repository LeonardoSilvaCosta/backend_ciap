-- DropForeignKey
ALTER TABLE "employee_addresses" DROP CONSTRAINT "employee_addresses_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "employee_phones" DROP CONSTRAINT "employee_phones_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "employee_updates" DROP CONSTRAINT "employee_updates_associated_with_fkey";

-- AddForeignKey
ALTER TABLE "employee_phones" ADD CONSTRAINT "employee_phones_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_addresses" ADD CONSTRAINT "employee_addresses_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_updates" ADD CONSTRAINT "employee_updates_associated_with_fkey" FOREIGN KEY ("associated_with") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
