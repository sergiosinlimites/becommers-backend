import { QueryResult } from 'pg';
import { CreateBecommerDto, UpdateBecommerDto } from './BecommersDTOs';

export interface IBecommersApplication {
  createBecommer(newBecommer: CreateBecommerDto): Promise<CreateBecommerDto>;
  updateBecommer(becommer: UpdateBecommerDto): Promise<UpdateBecommerDto>;
  deleteBecommer(id: string): Promise<boolean>;
  getTasks(): Promise<QueryResult<any>>;
}
