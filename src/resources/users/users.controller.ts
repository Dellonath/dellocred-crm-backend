import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { DeleteResult, FindOptionsWhere, UpdateResult } from 'typeorm';
import { ZodValidationPipe } from '../../zod-validation.pipe';
import {
  CreateUserDto,
  CreateUserSchema,
  UpdateUserDto,
  UpdateUserSchema
} from './dto/user.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateUserSchema))
  async create(@Body() user: CreateUserDto): Promise<User | null> {
    return this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  
  @Get(':uuid')
  async findOne(@Param('uuid') uuid: FindOptionsWhere<User>): Promise<User | null> {
    return this.usersService.findOne(uuid);
  }

  @Patch(':uuid')
  @UsePipes(new ZodValidationPipe(UpdateUserSchema))
  update(@Param('uuid') uuid: string, @Body() dto: UpdateUserDto) : Promise<UpdateResult | null> {
    return this.usersService.update(uuid, dto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string): Promise<DeleteResult | void> {
    return this.usersService.remove(uuid);
  }
}
