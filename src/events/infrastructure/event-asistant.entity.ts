import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { User } from 'src/becommers/infraestructure/user.entity';
import { Event } from './event.entity';

@Entity({ name: 'event-assistants' })
export class EventAssistant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.eventAssistants, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Event, (event) => event.assistants, { onDelete: 'CASCADE' })
  event: Event;

  @Column({ type: 'character varying', length: 20, default: 'pending' })
  status: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
