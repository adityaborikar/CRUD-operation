import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { department } from '@prisma/client';
import { DepartmentService } from './department.service';
import { DepartmentDto } from './dto/department.dto';
import { Response } from '../Interface/response';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

@Controller('department')
@UseGuards(JwtAuthGuard)
export class DepartmentController {
  private logger = new Logger('DepartmentController');
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async getAll(): Promise<Response<department[]>> {
    try {
      const departments = await this.departmentService.read();
      return {
        success: true,
        message: 'Departments Feteched',
        data: departments,
      };
    } catch (error) {
      console.log(error);
      this.logger.error(error);
    }
  }

  @Get('/:id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Response<department>> {
    try {
      const departments = await this.departmentService.readById(id);
      return {
        success: true,
        message: 'Department Fetched',
        data: departments,
      };
    } catch (error) {
      console.log(error);
      this.logger.error(error);
    }
  }

  @Post()
  async create(@Body() data: DepartmentDto): Promise<Response<department>> {
    try {
      const departments = await this.departmentService.create(data);
      return {
        success: true,
        message: 'Department Created',
        data: departments,
      };
    } catch (error) {
      console.log(error);
      this.logger.error(error);
    }
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: DepartmentDto,
  ): Promise<Response<department>> {
    try {
      const departments = await this.departmentService.update(id, data);
      return {
        success: true,
        message: 'Department Updated',
        data: departments,
      };
    } catch (error) {
      console.log(error);
      this.logger.error(error);
    }
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Response<department>> {
    try {
      const departments = await this.departmentService.delete(id);
      return {
        success: true,
        message: 'Department Deleted',
        data: departments,
      };
    } catch (error) {
      console.log(error);
      this.logger.error(error);
    }
  }
}
