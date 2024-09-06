import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from '../infraestructure/user.entity';
import { DeleteResult } from 'typeorm';

export interface IBecommersApplication {
  getBecommer(id: number): Promise<User>;
  createBecommer(newBecommer: CreateUserDto): Promise<User>;
  updateBecommer(id: number, becommer: UpdateUserDto): Promise<User>;
  deleteBecommer(id: string): Promise<DeleteResult>;
}
