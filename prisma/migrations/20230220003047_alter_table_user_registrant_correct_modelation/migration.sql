/*
  Warnings:

  - You are about to drop the column `fk_registrant` on the `users` table. All the data in the column will be lost.
  - Added the required column `employeeUserFirstPhone` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeUserFullname` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employe_fullname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_first_phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "employeeUserFirstPhone" TEXT NOT NULL,
ADD COLUMN     "employeeUserFullname" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "fk_registrant",
ADD COLUMN     "employe_fullname" TEXT NOT NULL,
ADD COLUMN     "employee_first_phone" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_employe_fullname_employee_first_phone_fkey" FOREIGN KEY ("employe_fullname", "employee_first_phone") REFERENCES "employees"("user_fullname", "user_first_phone") ON DELETE RESTRICT ON UPDATE CASCADE;
