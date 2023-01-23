/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { employee as EmployeeModel } from '@prisma/client';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  async read(): Promise<EmployeeModel[]> {
    return await this.prismaService.employee.findMany({
      orderBy: {
        id: 'asc',
      },
      include: {
        department: true,
      },
      where: {
        is_delete: false,
      },
    });
  }

  async readyById(id: number): Promise<EmployeeModel> {
    return await this.prismaService.employee.findUnique({
      where: { id },
    });
  }

  async create(data: EmployeeDto): Promise<EmployeeModel> {
    const { name, contact, dept_id } = data;
    return await this.prismaService.employee.create({
      data: { name, contact, dept_id: dept_id },
    });
  }

  async update(id: number, data: EmployeeDto): Promise<EmployeeModel> {
    const { name, contact, dept_id } = data;
    return await this.prismaService.employee.update({
      where: { id },
      data: { name, contact, dept_id },
    });
  }

  async delete(id: number): Promise<EmployeeModel> {
    console.log(id);

    return await this.prismaService.employee.update({
      where: { id },
      data: { is_delete: true },
    });
  }
}
