/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from 'class-validator';

export class EmployeeDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @IsString()
  contact: string;

  dept_id?: number;

  is_delete?: boolean;
}
