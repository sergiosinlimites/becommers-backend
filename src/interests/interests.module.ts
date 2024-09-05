import { Module } from '@nestjs/common';
import { InterestsController } from './infrastructure/interests.controller';

@Module({
  controllers: [InterestsController],
})
export class InterestsModule {}
