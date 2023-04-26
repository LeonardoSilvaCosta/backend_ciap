import { prisma } from '../../../../prisma';
import { Employee } from "@prisma/client";
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
        Address: true,
        Phones: true,
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
      gender: response.Gender,
      email: response.email,
      phones: response.Phones,
      address: response.Address,
      marital_status: response.MaritalStatus,
      education_level: response.EducationLevel,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit,
      administrative_role: response.AdministrativeRole,
      job_status: response.JobStatus,
      military_id: response.militaryId,
      rank: response.Rank,
      board: response.Board,
      specialty: response.Specialty,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    }
  }

  // async findByFullNameAndPhone(fullname: string, firstPhone: string): Promise<Employee | null> {
  //   const user = await prisma.employee.findUnique({
  //     where: {
  //       fullname_firstPhone: {
  //         fullname,
  //         firstPhone
  //       }
  //     },
  //   })

  //   return user
  // }

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
        Gender: true,
        Address: true,
        MaritalStatus: true,
        EducationLevel: true,
        Phones: true,
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
      gender: response.Gender,
      email: response.email,
      address: response.Address,
      marital_status: response.MaritalStatus,
      education_level: response.EducationLevel,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit,
      administrative_role: response.AdministrativeRole,
      job_status: response.JobStatus,
      military_id: response.militaryId,
      rank: response.Rank,
      board: response.Board,
      specialty: response.Specialty,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    };
  }

  async list(): Promise<IEmployeeResponseDTO[]> {
    const response = await prisma.employee.findMany({
      include: {
        Gender: true,
        Address: true,
        MaritalStatus: true,
        EducationLevel: true,
        Phones: true,
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
        gender: e.Gender,
        email: e.email,
        address: e.Address,
        marital_status: e.MaritalStatus,
        education_level: e.EducationLevel,
        number_of_children: e.numberOfChildren,
        birthplace: e.birthplace,
        code_name: e.codeName,
        unit: e.Unit,
        administrative_role: e.AdministrativeRole,
        job_status: e.JobStatus,
        military_id: e.militaryId,
        rank: e.Rank,
        board: e.Board,
        specialty: e.Specialty,
        created_at: e.createdAt,
        created_by: e.CreatedBy?.id
      }
    })

    return formattedEmployees;
  }

  // async findById(id: string | undefined): Promise<IGetEmployeeResponseDTO | null> {
  //   const user_with_selected_relations = await prisma.employee.findUniqueOrThrow({
  //     where: { id },
  //     select: {
  //       id: true,
  //       fullname: true,
  //       firstPhone: true,
  //       birthdate: true,
  //       cpf: true,
  //       email: true,
  //       numberOfChildren: true,
  //       birthplace: true,
  //       createdAt: true,
  //       Gender: {
  //         select: {
  //           name: true,
  //         }
  //       },
  //       Address: {
  //         select: {
  //           postalCode: true,
  //           number: true,
  //         }
  //       },
  //       MaritalStatus: {
  //         select: {
  //           name: true,
  //         }
  //       },
  //       EducationLevel: {
  //         select: {
  //           name: true,
  //         }
  //       },
  //       Registrant: {
  //         select: {
  //           userId: true
  //         }
  //       },
  //       Phone: {
  //         select: {
  //           telefone: true
  //         }
  //       },
  //       UpdateInformation: {
  //         select: {
  //           createdAt: true,
  //           employeeId: true
  //         }
  //       },
  //     },
  //   })

  //   const phones = user_with_selected_relations.Phone.map((e) => {
  //     return {
  //       phone: e.telefone
  //     }
  //   })

  //   const update_information = user_with_selected_relations.UpdateInformation.map((e) => {
  //     return {
  //       created_at: e.createdAt,
  //       employee_id: e.employeeId
  //     }
  //   })

  //   return {
  //     id: user_with_selected_relations?.id,
  //     fullname: user_with_selected_relations?.fullname,
  //     firstPhone: user_with_selected_relations.firstPhone,
  //     birthdate: user_with_selected_relations.birthdate,
  //     cpf: user_with_selected_relations.cpf,
  //     gender: user_with_selected_relations.Gender,
  //     email: user_with_selected_relations.email,
  //     address: user_with_selected_relations.Address,
  //     marital_status: user_with_selected_relations.MaritalStatus,
  //     education_level: user_with_selected_relations.EducationLevel,
  //     number_of_children: user_with_selected_relations.numberOfChildren,
  //     birthplace: user_with_selected_relations.birthplace,
  //     created_at: user_with_selected_relations.createdAt,
  //     registrant_id: user_with_selected_relations.Registrant,
  //     phones,
  //     update_information,
  //   };
  // }

  // async list(): Promise<IGetEmployeeResponseDTO[]> {
  //   const users_with_selected_relations = await prisma.user.findMany({
  //     select: {
  //       id: true,
  //       fullname: true,
  //       firstPhone: true,
  //       birthdate: true,
  //       cpf: true,
  //       email: true,
  //       numberOfChildren: true,
  //       birthplace: true,
  //       createdAt: true,
  //       Gender: {
  //         select: {
  //           name: true,
  //         }
  //       },
  //       Address: {
  //         select: {
  //           postalCode: true,
  //           number: true,
  //         }
  //       },
  //       MaritalStatus: {
  //         select: {
  //           name: true,
  //         }
  //       },
  //       EducationLevel: {
  //         select: {
  //           name: true,
  //         }
  //       },
  //       Registrant: {
  //         select: {
  //           userId: true
  //         }
  //       },
  //       Phone: {
  //         select: {
  //           telefone: true
  //         }
  //       },
  //       UpdateInformation: {
  //         select: {
  //           createdAt: true,
  //           employeeId: true
  //         }
  //       },
  //     },
  //   });

  //   const phones = users_with_selected_relations.flatMap((e) => {
  //     return e.Phone.map((item) => {
  //       return {
  //         phone: item.telefone
  //       }
  //     })
  //   })

  //   const update_information = users_with_selected_relations.flatMap((e) => {
  //     return e.UpdateInformation.map((item) => {
  //       return {
  //         created_at: item.createdAt,
  //         employee_id: item.employeeId
  //       }
  //     })
  //   })

  //   const formattedUsers = users_with_selected_relations.map((e) => {
  //     return {
  //       id: e.id,
  //       fullname: e.fullname,
  //       firstPhone: e.firstPhone,
  //       birthdate: e.birthdate,
  //       cpf: e.cpf,
  //       gender: e.Gender,
  //       email: e.email,
  //       address: e.Address,
  //       marital_status: e.MaritalStatus,
  //       education_level: e.EducationLevel,
  //       number_of_children: e.numberOfChildren,
  //       birthplace: e.birthplace,
  //       created_at: e.createdAt,
  //       registrant_id: e.Registrant,
  //       phones,
  //       update_information,
  //     }
  //   })

  //   return formattedUsers;
  // }

}