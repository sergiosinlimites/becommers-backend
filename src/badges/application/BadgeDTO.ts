import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Badge } from '../domain/Badge';

export class BadgeDTO implements Badge {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsNumber()
  @IsNotEmpty()
  pointsForWinning: number;

  @IsDateString()
  @IsNotEmpty()
  createdBy: string;

  @IsNumber()
  @IsNotEmpty()
  numberToComplete: string;

  @IsString()
  @IsNotEmpty()
  measuredBy: string;
}
