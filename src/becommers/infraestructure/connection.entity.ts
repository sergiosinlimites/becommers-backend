import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

import { User } from './user.entity';

@Entity({ name: 'connections' })
export class Connection {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  connectionId: number;

  @Column({ length: 20, default: 'pending' })
  status: string;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.connections, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => User, (user) => user.connections, { onDelete: 'CASCADE' })
  connection: User;
}
