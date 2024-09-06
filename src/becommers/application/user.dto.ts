import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsStrongPassword,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInterestDto } from './user-interest.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstNames: string;

  @IsString()
  @IsNotEmpty()
  readonly lastNames: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsBoolean()
  readonly allowMailNotifications: boolean;

  @IsBoolean()
  readonly allowSmsNotifications: boolean;

  @IsBoolean()
  readonly allowWhatsappNotifications: boolean;

  @IsNumber()
  @IsPositive()
  readonly gradeByPeers: number;

  @IsStrongPassword()
  @IsNotEmpty()
  readonly password: string;

  @IsStrongPassword()
  readonly recoveryPassword: string;

  @IsUrl()
  readonly profilePicture: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsNumber()
  @IsPositive()
  readonly points: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  readonly interests: number[];

  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly lastConnection: Date;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
