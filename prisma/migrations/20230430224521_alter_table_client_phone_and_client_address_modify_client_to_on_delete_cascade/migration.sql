-- DropForeignKey
ALTER TABLE "client_addresses" DROP CONSTRAINT "client_addresses_clientId_fkey";

-- DropForeignKey
ALTER TABLE "client_phones" DROP CONSTRAINT "client_phones_clientId_fkey";

-- DropForeignKey
ALTER TABLE "client_updates" DROP CONSTRAINT "client_updates_associated_with_fkey";

-- AddForeignKey
ALTER TABLE "client_phones" ADD CONSTRAINT "client_phones_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_addresses" ADD CONSTRAINT "client_addresses_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_updates" ADD CONSTRAINT "client_updates_associated_with_fkey" FOREIGN KEY ("associated_with") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
