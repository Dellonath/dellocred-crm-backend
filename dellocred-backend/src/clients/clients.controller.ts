import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeleteResult, UpdateResult, FindOptionsWhere } from 'typeorm';
import { ClientsService } from './clients.service';
import { Client } from './clients.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() client: CreateClientDto): Promise<Client | null> {
    return this.clientsService.create(client);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }
  
  @Get(':uuid')
  findOne(@Param('uuid') uuid: FindOptionsWhere<Client>): Promise<Client | null> {
    return this.clientsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() client: UpdateClientDto) : Promise<UpdateResult | null> {
    return this.clientsService.update(uuid, client);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string): Promise<DeleteResult | void> {
    return this.clientsService.remove(uuid);
  }
}
