import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Community } from 'src/communities/infrastructure/community.entity';
import { EventAssistant } from './event-asistant.entity';
import { EventComment } from './event-comment.entity';
import { EventInterest } from './event-interest.entity';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', default: () => 'gen_random_uuid()' })
  eventUuid: string;

  @ManyToOne(() => Community, (community) => community.events, {
    onDelete: 'NO ACTION',
  })
  community: Community;

  @Column({ type: 'character varying', length: 100 })
  name: string;

  @Column({ type: 'timestamptz' })
  startTime: Date;

  @Column({ type: 'timestamptz' })
  endTime: Date;

  @Column({ length: 400 })
  description: string;

  @Column({ type: 'int', nullable: true })
  maxCapacity: number;

  @Column({ type: 'boolean', default: false })
  participantsShown: boolean;

  @Column({
    type: 'character varying',
    array: true,
    length: 255,
    nullable: true,
  })
  activities: string[];

  @Column({ type: 'character varying', length: 50 })
  eventType: string;

  @Column({ type: 'boolean', default: false })
  approvalRequired: boolean;

  @Column({
    type: 'character varying',
    array: true,
    length: 255,
    nullable: true,
  })
  questionsBeforeEvent: string[];

  @Column({ type: 'boolean', default: false })
  isOnline: boolean;

  @Column({ type: 'character varying', length: 255, nullable: true })
  link: string;

  @Column({ type: 'boolean', default: false })
  locationHidden: boolean;

  @Column({ type: 'point', nullable: true })
  location: string;

  @Column({ type: 'boolean', default: false })
  payToAssist: boolean;

  @Column({ type: 'numeric', nullable: true })
  assistancePrice: number;

  @Column({ type: 'boolean', default: false })
  useDiscountCode: boolean;

  @Column({ type: 'character varying', length: 400, nullable: true })
  rules: string;

  @Column({
    type: 'character varying',
    array: true,
    length: 255,
    nullable: true,
  })
  photosPrev: string[];

  @Column({
    type: 'character varying',
    array: true,
    length: 255,
    nullable: true,
  })
  photosAfter: string[];

  @Column({ type: 'integer', nullable: true })
  likes: number;

  @OneToMany(() => EventAssistant, (assistant) => assistant.event)
  assistants: EventAssistant[];

  @OneToMany(() => EventComment, (comment) => comment.event)
  comments: EventComment[];

  @OneToMany(() => EventInterest, (interest) => interest.event)
  interests: EventInterest[];
}
