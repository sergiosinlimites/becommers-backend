import { IsNotEmpty, IsString } from 'class-validator';
import { Interest } from '../domain/Interest';

export class InterestDTO implements Interest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  emoji: string;
}
