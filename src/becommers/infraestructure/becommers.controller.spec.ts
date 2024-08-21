import { Test, TestingModule } from '@nestjs/testing';
import { BecommersController } from './becommers.controller';

describe('BecommersController', () => {
  let controller: BecommersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BecommersController],
    }).compile();

    controller = module.get<BecommersController>(BecommersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
