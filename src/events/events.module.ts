import { Module } from '@nestjs/common';
import { EventsController } from './infrastructure/events.controller';

@Module({
  controllers: [EventsController],
})
export class EventsModule {}
