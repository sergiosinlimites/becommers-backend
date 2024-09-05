import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { User } from 'src/becommers/infraestructure/user.entity';
import { Event } from './event.entity';

@Entity({ name: 'event-comments' })
export class EventComment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.comments, { onDelete: 'CASCADE' })
  event: Event;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  author: User;

  @Column({ type: 'integer' })
  stars: number;

  @Column({ type: 'character varying', length: 255 })
  description: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
