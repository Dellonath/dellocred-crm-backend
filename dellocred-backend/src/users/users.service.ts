import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private readonly users: CreateUserDto[] = [];

  create(user: CreateUserDto) {

    if (!user.name || !user.email) {
      throw new BadRequestException('Both name and email must be provided');
    }
    this.users.push(user);
  }

  findAll(): string {
    return 'All users were returned!';
  }

  findOne(id: number): string {
    return `User with id ${id} was found`;
  }
  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number): string {
    return `User with id ${id} was removed`;
  }
}
