import { Test, TestingModule } from '@nestjs/testing';
import { BecommerService } from './becommer.service';

describe('BecommerService', () => {
  let service: BecommerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BecommerService],
    }).compile();

    service = module.get<BecommerService>(BecommerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
