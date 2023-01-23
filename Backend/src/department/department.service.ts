/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { department as DepartmentModel } from '@prisma/client';
import { DepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly prismaService: PrismaService) {}

  read() {
    return this.prismaService.department.findMany();
  }

  async readById(id: number): Promise<DepartmentModel> {
    return await this.prismaService.department.findUnique({
      where: { id },
    });
  }

  async create(data: DepartmentDto): Promise<DepartmentModel> {
    const { name } = data;
    return await this.prismaService.department.create({
      data: { name },
    });
  }

  async update(id: number, data: DepartmentDto): Promise<DepartmentModel> {
    const { name } = data;
    return await this.prismaService.department.update({
      where: { id },
      data: { name },
    });
  }

  async delete(id: number): Promise<DepartmentModel> {
    return await this.prismaService.department.update({
      where: { id },
      data: { is_delete: true },
    });
  }
}
