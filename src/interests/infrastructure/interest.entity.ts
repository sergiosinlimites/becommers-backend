import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { EventInterest } from 'src/events/infrastructure/event-interest.entity';
import { UserInterest } from 'src/becommers/infraestructure/user-interest.entity';

@Entity({ name: 'interests' })
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'character varying', length: 100 })
  name: string;

  @Column({ type: 'character varying', length: 100 })
  category: string;

  @Column({ length: 100, nullable: true })
  emoji: string;

  @OneToMany(() => EventInterest, (eventInterest) => eventInterest.interest)
  eventInterests: EventInterest[];

  @OneToMany(() => UserInterest, (userInterest) => userInterest.interest)
  userInterests: UserInterest[];
}
