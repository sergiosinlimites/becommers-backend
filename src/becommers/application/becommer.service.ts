import { Injectable } from '@nestjs/common';
import { IBecommersApplication } from './IBecommerApplication';
import { CreateBecommerDto, UpdateBecommerDto } from './BecommersDTOs';

@Injectable()
export class BecommerService implements IBecommersApplication {
  createBecommer(newBecommer: CreateBecommerDto): Promise<CreateBecommerDto> {
    throw new Error('Method not implemented.');
  }
  updateBecommer(becommer: UpdateBecommerDto): Promise<UpdateBecommerDto> {
    throw new Error('Method not implemented.');
  }

  deleteBecommer(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
