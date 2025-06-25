import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindOptionsWhere, UpdateResult, Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto): Promise<User | null> {

    if (!user.firstName || !user.email) {
      throw new BadRequestException('Both name and email must be provided');
    }
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(uuid: FindOptionsWhere<User>): Promise<User | null> {
  return this.usersRepository.findOneBy(uuid);
}
  
  update(uuid: string, user: UpdateUserDto): Promise<UpdateResult | null> {
    return this.usersRepository.update(uuid, user);
  }

  remove(uuid: string): Promise<DeleteResult | void> {
    return this.usersRepository.delete(uuid);
  }
}
