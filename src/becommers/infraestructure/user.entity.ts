import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Connection } from './connection.entity';
import { Enrollment } from 'src/communities/infrastructure/enrollment.entity';
import { EventAssistant } from 'src/events/infrastructure/event-asistant.entity';
import { EventComment } from 'src/events/infrastructure/event-comment.entity';
import { UserInterest } from './user-interest.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'character varying', length: 40 })
  firstNames: string;

  @Column({ type: 'character varying', length: 40 })
  lastNames: string;

  @Column({ type: 'character varying', length: 255 })
  email: string;

  @Column({ default: true })
  allowMailNotifications: boolean;

  @Column({ default: true })
  allowSmsNotifications: boolean;

  @Column({ default: true })
  allowWhatsappNotifications: boolean;

  @Column({ type: 'numeric', default: 0 })
  gradeByPeers: number;

  @Column({ type: 'character varying', length: 255 })
  password: string;

  @Column({ type: 'character varying', length: 255, nullable: true })
  recoveryPassword: string;

  @Column({ type: 'character varying', length: 255, nullable: true })
  profilePicture: string;

  @Column({ type: 'character varying', length: 32 })
  username: string;

  @Column({ type: 'integer', default: 0 })
  points: number;

  @Column({ type: 'timestamptz', nullable: true })
  lastConnection: Date;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @OneToMany(() => Connection, (connection) => connection.user)
  connections: Connection[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.user)
  enrollments: Enrollment[];

  @OneToMany(() => EventAssistant, (assistant) => assistant.user)
  eventAssistants: EventAssistant[];

  @OneToMany(() => EventComment, (comment) => comment.author)
  comments: EventComment[];

  @OneToMany(() => UserInterest, (userInterest) => userInterest.user)
  interests: UserInterest[];
}
