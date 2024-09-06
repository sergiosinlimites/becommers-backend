import { Module } from '@nestjs/common';
import { InterestsController } from './infrastructure/interests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interest } from './infrastructure/interest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interest])],
  controllers: [InterestsController],
  exports: [TypeOrmModule],
})
export class InterestsModule {}
