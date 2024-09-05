import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Event } from './event.entity';
import { Interest } from 'src/interests/infrastructure/interest.entity';

@Entity({ name: 'event-interests' })
export class EventInterest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.interests, { onDelete: 'CASCADE' })
  event: Event;

  @ManyToOne(() => Interest, (interest) => interest.eventInterests, {
    onDelete: 'CASCADE',
  })
  interest: Interest;
}
