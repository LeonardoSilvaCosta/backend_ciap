import { EducationLevel, Employee, Gender, MaritalStatus } from "@prisma/client";

export interface ICreateEmployeeDTO {
  userId: string
  alias                string
  unitId               String   @map("unit_id")
  administrativeRoleId String?  @map("administrative_role_id")
  employeementStatusId String   @map("employeement_status_id")
  rankId               String   @map("rank_id")
  personnelId          String?  @map("personnel_id")
  inclusionDate        DateTime @map("inclusion_date")

  Unit               Unit                @relation(fields: [unitId], references: [id])
  AdministrativeRole AdministrativeRole? @relation(fields: [administrativeRoleId], references: [id])
  EmployeementStatus EmployeementStatus  @relation(fields: [employeementStatusId], references: [id])
  Rank               Rank                @relation(fields: [rankId], references: [id])
  Personnel          Personnel?          @relation(fields: [personnelId], references: [id])
  User               User                @relation(fields: [userId], references: [id])

  Especialist            Especialist[]
  UpdateInformation      UpdateInformation?
  RegisteredUsers        User?              @relation(name: "registrant")
  employeeUserFullname   String             @db.VarChar(255)
  employeeUserFirstPhone String
}