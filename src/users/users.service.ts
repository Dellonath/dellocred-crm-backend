import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto): Promise<User | null> {
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(uuid: FindOptionsWhere<User>): Promise<User | null> {
  return await this.usersRepository.findOneBy(uuid);
}
  
  update(uuid: string, user: UpdateUserDto): Promise<UpdateResult | null> {
    return this.usersRepository.update(uuid, user);
  }

  remove(uuid: string): Promise<DeleteResult | void> {
    return this.usersRepository.delete(uuid);
  }
}
