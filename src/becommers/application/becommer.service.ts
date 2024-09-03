import { Inject, Injectable } from '@nestjs/common';
import { IBecommersApplication } from './IBecommerApplication';
import { CreateBecommerDto, UpdateBecommerDto } from './BecommersDTOs';
import { Client, QueryResult } from 'pg';

@Injectable()
export class BecommerService implements IBecommersApplication {
  constructor(@Inject('PG') private clientPg: Client) {}

  createBecommer(newBecommer: CreateBecommerDto): Promise<CreateBecommerDto> {
    throw new Error('Method not implemented.');
  }
  updateBecommer(becommer: UpdateBecommerDto): Promise<UpdateBecommerDto> {
    throw new Error('Method not implemented.');
  }

  deleteBecommer(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getTasks(): Promise<QueryResult<any>> {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
}
