import { IsNotEmpty, IsString } from 'class-validator';
import { Event } from '../domain/Event';

export class EventDTO implements Event {
  @IsString()
  @IsNotEmpty()
  name: string;
}
