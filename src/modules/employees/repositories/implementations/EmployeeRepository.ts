import { prisma } from '../../../../prisma';
import { Employee, EmployeePhone } from "@prisma/client";
import { IEmployeeRepository } from '../IEmployeeRepository';
import { ICreateEmployeeRequestDTO } from '../../dtos/ICreateEmployeeRequestDTO';
import { IEmployeeResponseDTO } from '../../dtos/IEmployeeResponseDTO';

export class EmployeeRepository implements IEmployeeRepository {

  async create(employee: ICreateEmployeeRequestDTO): Promise<IEmployeeResponseDTO> {
    console.log(employee)
    const response = await prisma.employee.create({
      data: {
        avatar: employee.avatar,
        fullname: employee.fullname,
        birthdate: employee.birthdate,
        cpf: employee.cpf,
        fkGender: employee.gender_id,
        email: employee.email,
        fkMaritalStatus: employee.marital_status_id,
        fkEducationLevel: employee.education_level_id,
        numberOfChildren: employee.number_of_children,
        birthplace: employee.birthplace,
        codeName: employee.code_name,
        fkUnit: employee.unit_id,
        fkAdministrativeRole: employee.administrative_role_id,
        fkJobStatus: employee.job_status_id,
        militaryId: employee.military_id,
        fkRank: employee.rank_id,
        fkBoard: employee.board_id,
        fkSpecialty: employee.specialty_id,
        password: employee.password
      },
      include: {
        Phones: true,
        Address: true,
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        Specialty: true,
        CreatedBy: true,
      }
    })

    return {
      id: response.id,
      avatar: response.avatar,
      fullname: response.fullname,
      birthdate: response.birthdate,
      cpf: response.cpf,
      gender: response.Gender.name,
      email: response.email,
      phones: response.Phones.map((e: EmployeePhone) => {
        return e.phone
      }),
      address: response.Address,
      marital_status: response.MaritalStatus.name,
      education_level: response.EducationLevel.name,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit.name,
      administrative_role: response.AdministrativeRole?.name,
      job_status: response.JobStatus.name,
      military_id: response.militaryId,
      rank: response.Rank?.name,
      board: response.Board?.name,
      specialty: response.Specialty?.name,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    }
  }

  async findByEmail(email: string): Promise<Employee | null> {
    const employee = await prisma.employee.findUnique({
      where: {
        email
      }
    })

    return employee;
  }

  async findById(id: string | undefined): Promise<IEmployeeResponseDTO | null> {
    const response = await prisma.employee.findUniqueOrThrow({
      where: { id },
      include: {
        Phones: true,
        Address: true,
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        EmployeeUpdates: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        Specialty: true,
        CreatedBy: true,
      }
    })

    return {
      id: response.id,
      avatar: response.avatar,
      fullname: response.fullname,
      birthdate: response.birthdate,
      cpf: response.cpf,
      gender: response.Gender.name,
      email: response.email,
      phones: response.Phones.map((e: EmployeePhone) => {
        return e.phone
      }),
      address: response.Address,
      marital_status: response.MaritalStatus.name,
      education_level: response.EducationLevel.name,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit.name,
      administrative_role: response.AdministrativeRole?.name,
      job_status: response.JobStatus.name,
      military_id: response.militaryId,
      rank: response.Rank?.name,
      board: response.Board?.name,
      specialty: response.Specialty?.name,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    };
  }

  async list(): Promise<IEmployeeResponseDTO[]> {
    const response = await prisma.employee.findMany({
      include: {
        Phones: true,
        Address: true,
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        EmployeeUpdates: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        Specialty: true,
        CreatedBy: true,
      }
    });

    const formattedEmployees = response.map((e) => {
      return {
        id: e.id,
        avatar: e.avatar,
        fullname: e.fullname,
        birthdate: e.birthdate,
        cpf: e.cpf,
        gender: e.Gender.name,
        email: e.email,
        phones: e.Phones.map((i: EmployeePhone) => {
          return i.phone
        }),
        address: e.Address,
        marital_status: e.MaritalStatus.name,
        education_level: e.EducationLevel.name,
        number_of_children: e.numberOfChildren,
        birthplace: e.birthplace,
        code_name: e.codeName,
        unit: e.Unit.name,
        administrative_role: e.AdministrativeRole?.name,
        job_status: e.JobStatus.name,
        military_id: e.militaryId,
        rank: e.Rank?.name,
        board: e.Board?.name,
        specialty: e.Specialty?.name,
        created_at: e.createdAt,
        created_by: e.CreatedBy?.id
      }
    })

    return formattedEmployees;
  }

}