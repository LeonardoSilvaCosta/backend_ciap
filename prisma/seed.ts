import { prisma } from "../src/prisma";
import { hash } from "bcrypt";

async function main() {

  const adminPasswordHash = await hash("admin", 8);
  const adminBirthDate = "20/01/1992";
  const employeePasswordHash = await hash("102030", 8);
  const employeeBirthDate = "25/07/1989"

  const superiorIncompletoId = "12243cb0-c920-4d25-a414-d16f4f9342cc";
  const superiorCompletoId = "8ccfa318-a60d-4df0-839b-c851c64dcf5a";


  const gender = await prisma.gender.create({
    data: {
      id: "760d485c-a905-46d7-b570-11779a5ca4ba",
      name: "Masculino",
      createdAt: new Date()
    }
  })

 const educationLevel = await prisma.educationLevel.createMany({
    data: [
      {
        id: superiorIncompletoId,
        name: "Superior incompleto",
        createdAt: new Date()
      },
      {
        id: superiorCompletoId,
        name: "Superior completo",
        createdAt: new Date()
      },
    ],
  })

  const unit = await prisma.unit.create({
    data: {
      id: "ef893f51-c045-4b18-8f21-c14d2a0b5043",
      name: "Solteiro(a)",
      createdAt: new Date()
    }
  })

  const administrativeRole = await prisma.administrativeRole.create({
    data: {
      id: "3403b8c9-fe79-44f5-a8c5-b84a488b7715",
      name: "P1",
      createdAt: new Date()
    }
  })

  const jobStatus = await prisma.jobStatus.create({
    data: {
      id: "ceb69fcc-ce40-4152-ace0-b45e38b8e437",
      name: "Ativo(a)",
      createdAt: new Date()
    }
  })

  const rank = await prisma.rank.create({
    data: {
      id: "40daffff-083f-426e-8bcd-fd6b0af16457",
      name: "1º TEN",
      createdAt: new Date()
    }
  })

  const specialty = await prisma.specialty.create({
    data: {
      id: "1c4376d7-5f79-47fc-bb53-d4b32ed6c54b",
      name: "Psicólogo(a)",
      createdAt: new Date()
    }
  })

  const board = await prisma.board.create({
    data: {
      id: "045f77db-0b57-42d4-87f7-d9da872ba141",
      name: "QCOPM",
      createdAt: new Date()
    }
  })

  const maritalStatus = await prisma.maritalStatus.create({
    data: {
      id: "fe5fe045-7f76-4daf-863f-dc7ce62bca49",
      name: "Solteiro(a)",
      createdAt: new Date()
    }
  })


  const admin = await prisma.employee.create({
    data: {
      avatar: "",
      fullname: "Leonardo da Silva Costa",
      birthdate: adminBirthDate,
      cpf: "982.645.672-15",
      fkGender: gender.id,
      email: "sir.costa@yahoo.com.br",
      fkMaritalStatus: maritalStatus.id,
      fkEducationLevel: educationLevel[1].id,
      numberOfChildren: 0,
      birthplace: "Belém-PA",
      codeName: "Leonardo",
      fkUnit: unit.id,
      fkAdministrativeRole: administrativeRole.id,
      fkJobStatus: jobStatus.id,
      militaryId: "40897",
      fkRank: rank.id,
      fkBoard: board.id,
      fkSpecialty: specialty.id,
      password: adminPasswordHash,
      createdAt: new Date()
    }
  })

  const employee = await prisma.employee.create({
    data: {
      avatar: "",
      fullname: "Leonardo da Silva Costa",
      birthdate: employeeBirthDate,
      cpf: "982.645.672-15",
      fkGender: gender.id,
      email: "sir.costa@yahoo.com.br",
      fkMaritalStatus: maritalStatus.id,
      fkEducationLevel: educationLevel[1].id,
      numberOfChildren: 0,
      birthplace: "Belém-PA",
      codeName: "Leonardo",
      fkUnit: unit.id,
      fkAdministrativeRole: administrativeRole.id,
      fkJobStatus: jobStatus.id,
      militaryId: "40897",
      fkRank: rank.id,
      fkBoard: board.id,
      fkSpecialty: specialty.id,
      password: employeePasswordHash,
      createdAt: new Date(),
      createdBy: admin.id
    }
  })

  await prisma.employeeAddress.create({
    data: {
      number: 53,
      postalCode: "66635510",
      employeeId: admin.id
    }
  })

  await prisma.employeeAddress.create({
    data: {
      number: 19,
      postalCode: "67125600",
      employeeId: employee.id
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })