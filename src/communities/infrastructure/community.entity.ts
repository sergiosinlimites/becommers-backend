import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Challenge } from './challenge.entity';
import { Event } from 'src/events/infrastructure/event.entity';
import { Enrollment } from './enrollment.entity';

@Entity()
export class Community {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'character varying', length: 255 })
  name: string;

  @Column({ type: 'character varying', length: 500 })
  description: string;

  @Column({ type: 'character varying', length: 50 })
  country: string;

  @Column({ type: 'integer', nullable: true })
  numMembers: number;

  @Column({ type: 'boolean', default: false })
  privateCommunity: boolean;

  @Column({ type: 'boolean', default: false })
  requiredApproval: boolean;

  @Column({
    type: 'character varying',
    array: true,
    length: 255,
    nullable: true,
  })
  approvalQuestions: string[];

  @Column({ type: 'character varying' })
  paymentType: string;

  @Column({ type: 'numeric', nullable: true })
  price: number;

  @Column({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'character varying', length: 255, nullable: true })
  whatsappLink: string;

  @Column({ type: 'uuid', default: () => 'gen_random_uuid()' })
  communityUuid: string;

  @OneToMany(() => Challenge, (challenge) => challenge.community)
  challenges: Challenge[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.community)
  enrollments: Enrollment[];

  @OneToMany(() => Event, (event) => event.community)
  events: Event[];
}
