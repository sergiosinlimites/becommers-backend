import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserInterestDto {
  @IsNumber()
  @IsNotEmpty()
  readonly user: number;

  @IsNumber()
  @IsNotEmpty()
  readonly interest: number;
}

export class UpdateUserInterestDto extends PartialType(CreateUserInterestDto) {}
