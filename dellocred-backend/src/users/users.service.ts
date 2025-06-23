import { Injectable, Inject } from '@nestjs/common';
import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {

    await this.userRepository.insert({
        name: 'test2',
        age: 23,
        gov_id: 1
    })

    return this.userRepository.find();
  }
}
