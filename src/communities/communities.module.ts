import { Module } from '@nestjs/common';
import { CommunitiesController } from './infrastructure/communities.controller';

@Module({
  controllers: [CommunitiesController],
})
export class CommunitiesModule {}
