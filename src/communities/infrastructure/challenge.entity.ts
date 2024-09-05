import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Community } from './community.entity';

@Entity({ name: 'challenges' })
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Community, (community) => community.challenges, {
    onDelete: 'CASCADE',
  })
  community: Community;

  @Column({ type: 'timestamptz' })
  startDate: Date;

  @Column({ type: 'timestamptz' })
  endDate: Date;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 400 })
  description: string;

  @Column({ default: true })
  isFree: boolean;

  @Column({ type: 'numeric', nullable: true })
  price: number;

  @Column({ default: false })
  hasDiscountCode: boolean;

  @Column({ type: 'timestamptz', array: true, nullable: true })
  checkpoints: Date[];

  @Column({ length: 400, nullable: true })
  instructions: string;

  @Column({ length: 400, nullable: true })
  rewards: string;
}
