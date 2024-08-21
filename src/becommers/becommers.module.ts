import { Module } from '@nestjs/common';
import { BecommersController } from './infraestructure/becommers.controller';
import { BecommerService } from './application/becommer.service';

@Module({
  controllers: [BecommersController],
  providers: [BecommerService],
})
export class BecommersModule {}
