import { Module } from '@nestjs/common';
import { BecommersController } from './infraestructure/becommers.controller';
import { BecommerService } from './application/becommer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infraestructure/user.entity';
import { UserInterest } from './infraestructure/user-interest.entity';
import { Connection } from './infraestructure/connection.entity';
import { InterestsModule } from 'src/interests/interests.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Connection, UserInterest]),
    InterestsModule,
  ],
  controllers: [BecommersController],
  providers: [BecommerService],
})
export class BecommersModule {}
