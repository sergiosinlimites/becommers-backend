import { Injectable } from '@nestjs/common';
import { IBecommersApplication } from './IBecommerApplication';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../infraestructure/user.entity';
import { DeleteResult, In, Repository } from 'typeorm';
import { UserInterest } from '../infraestructure/user-interest.entity';
import { Interest } from 'src/interests/infrastructure/interest.entity';

@Injectable()
export class BecommerService implements IBecommersApplication {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(UserInterest)
    private userInterestRepo: Repository<UserInterest>,
    @InjectRepository(Interest) private interestRepo: Repository<Interest>,
  ) {}
  getBecommer(id: number): Promise<User> {
    return this.userRepo.findOneBy({ id });
  }

  async createBecommer(newUser: CreateUserDto): Promise<User> {
    const { interests, ...userData } = newUser;
    const user = this.userRepo.create(userData);
    const createdUser = await this.userRepo.save(user);
    if (interests && interests.length > 0) {
      const userInterests = interests.map((interest) => {
        const userInterest = this.userInterestRepo.create({
          user: { id: user.id } as User,
          interest: { id: interest } as Interest,
        });
        return userInterest;
      });
      await this.userInterestRepo.save(userInterests);
    }
    return createdUser; //await this.userRepo.findOneBy({ id: createdUser.id });
  }

  async updateBecommer(id: number, changes: UpdateUserDto): Promise<User> {
    const { interests, ...userData } = changes;
    const user = await this.userRepo.findOneBy({ id });
    this.userRepo.merge(user, userData);
    if (interests && interests.length > 0) {
      const interestsEntities = await this.interestRepo.findBy({
        id: In(interests),
      });
      const userInterests = interestsEntities.map((interest) => {
        const userInterest = this.userInterestRepo.create({
          user,
          interest,
        });
        return userInterest;
      });
      await this.userInterestRepo.save(userInterests);
    }
    return this.userRepo.save(user);
  }

  deleteBecommer(id: string): Promise<DeleteResult> {
    return this.userRepo.delete(id);
  }
}
