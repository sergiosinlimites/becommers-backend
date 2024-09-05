import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from './user.entity';
import { Interest } from 'src/interests/infrastructure/interest.entity';

@Entity({ name: 'user-interests' })
export class UserInterest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.interests, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Interest, (interest) => interest.userInterests, {
    onDelete: 'CASCADE',
  })
  interest: Interest;
}
