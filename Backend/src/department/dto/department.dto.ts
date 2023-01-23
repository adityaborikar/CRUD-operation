/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from 'class-validator';

export class DepartmentDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  isdelete?: boolean;
}
