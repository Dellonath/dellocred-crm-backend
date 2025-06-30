import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DeleteResult, FindOptionsWhere, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User | null> {
    return this.usersService.create(user);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  
  @Get(':uuid')
  findOne(@Param('uuid') uuid: FindOptionsWhere<User>): Promise<User | null> {
    return this.usersService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() user: UpdateUserDto) : Promise<UpdateResult | null> {
    return this.usersService.update(uuid, user);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string): Promise<DeleteResult | void> {
    return this.usersService.remove(uuid);
  }
}
