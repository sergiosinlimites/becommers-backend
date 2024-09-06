import { Module } from '@nestjs/common';
import { CommunitiesController } from './infrastructure/communities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './infrastructure/community.entity';
import { Challenge } from './infrastructure/challenge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community, Challenge])],
  controllers: [CommunitiesController],
})
export class CommunitiesModule {}
