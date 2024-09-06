import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'pg';
import { UserInterest } from 'src/becommers/infraestructure/user-interest.entity';
import { User } from 'src/becommers/infraestructure/user.entity';
import { Challenge } from 'src/communities/infrastructure/challenge.entity';
import { Community } from 'src/communities/infrastructure/community.entity';
import { Enrollment } from 'src/communities/infrastructure/enrollment.entity';
import config from 'src/config';
import { EventAssistant } from 'src/events/infrastructure/event-asistant.entity';
import { EventComment } from 'src/events/infrastructure/event-comment.entity';
import { EventInterest } from 'src/events/infrastructure/event-interest.entity';
import { Event } from 'src/events/infrastructure/event.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, database, port, user, password } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database,
          synchronize: true,
          entities: [
            Enrollment,
            Event,
            EventAssistant,
            EventComment,
            EventInterest,
          ],
          autoLoadEntities: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
