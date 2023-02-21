import { prisma } from "../src/prisma";
import { hash } from "bcrypt";
import { parse } from 'date-fns';


async function main() {

  const adminPasswordHash = await hash("admin", 8);
  const userPasswordHash = await hash("102030", 8);

  const gender = await prisma.gender.create({
    data: {
      id: "760d485c-a905-46d7-b570-11779a5ca4ba",
      name: "Masculino"
    }
  })

  const maritalStauts = await prisma.maritalStatus.create({
    data: {
      id: "fe5fe045-7f76-4daf-863f-dc7ce62bca49",
      name: "Solteiro(a)"
    }
  })

  const superiorIncompletoId = "12243cb0-c920-4d25-a414-d16f4f9342cc";
  const superiorCompletoId = "8ccfa318-a60d-4df0-839b-c851c64dcf5a";

  const educationLevels = await prisma.educationLevel.createMany({
    data: [
      {
        id: superiorIncompletoId,
        name: "Superior incompleto"
      },
      {
        id: superiorCompletoId,
        name: "Superior completo"
      },
    ],
  })


  const admin = await prisma.user.create({
    data: {
      fullname: "Leonardo da Silva Costa",
      firstPhone: "91988165507",
      birthdate: parse('20/01/1992', 'dd/MM/yyyy', new Date()),
      cpf: "98264567215",
      fkGender: gender.id,
      email: "leonardocostapsi@gmail.com",
      fkMaritalStatus: maritalStauts.id,
      fkEducationLevel: superiorCompletoId,
      numberOfChildren: 0,
      birthplace: "Belém-PA",
      password: adminPasswordHash,
      createdAt: new Date(),
    }
  })

  const user = await prisma.user.create({
    data: {
      fullname: "Enzo Gabriel Pinheiro de Leão",
      firstPhone: "91991611201",
      birthdate: parse('20/01/1992', 'dd/MM/yyyy', new Date()),
      cpf: "02401417252",
      fkGender: gender.id,
      email: "enzopinheiro6@gmail.com",
      fkMaritalStatus: maritalStauts.id,
      fkEducationLevel: superiorIncompletoId,
      numberOfChildren: 0,
      birthplace: "Belém-PA",
      password: userPasswordHash,
      fkRegistrant: admin.id,
      createdAt: new Date(),
    }
  })

  await prisma.address.create({
    data: {
      number: 53,
      postalCode: "66635510",
      fkUser: admin.id
    }
  })

  await prisma.address.create({
    data: {
      number: 19,
      postalCode: "67125600",
      fkUser: user.id
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