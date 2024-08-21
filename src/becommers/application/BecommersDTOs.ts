import { PartialType } from '@nestjs/mapped-types';
import { Becommer } from '../domain/Becommer';
import { Badge } from 'src/badges/domain/Badge';
import { Event } from 'src/events/domain/Event';
import { Interest } from 'src/interests/domain/Interest';
import {
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
import { BadgeDTO } from 'src/badges/application/BadgeDTO';
import { EventDTO } from 'src/events/application/EventDTO';
import { InterestDTO } from 'src/interests/application/InteresDTO';

export class CreateBecommerDto extends Becommer {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsBoolean()
  readonly allowMailNotifications: boolean;

  @IsBoolean()
  readonly allowSMSNotifications: boolean;

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InterestDTO)
  readonly interests: Interest[];

  @IsArray()
  @IsString({ each: true })
  readonly goals: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BadgeDTO)
  readonly badges: Badge[];

  @IsBoolean()
  readonly isPremium: boolean;

  @IsArray()
  readonly contacts: Becommer[];

  @IsNumber()
  @IsPositive()
  readonly points: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EventDTO)
  readonly interestedEvents: Event[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EventDTO)
  readonly assistedEvents: Event[];

  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly lastConnection: Date;
}

export class UpdateBecommerDto extends PartialType(CreateBecommerDto) {}
