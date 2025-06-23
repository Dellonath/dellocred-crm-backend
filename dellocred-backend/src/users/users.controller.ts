import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../database/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    const users = await this.usersService.findAll()
    return users;
  }
}
