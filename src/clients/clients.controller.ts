import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
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
    return await this.clientsService.create(client);
  }

  @Post('batch')
  async createBatch(
    @Body() clients: CreateClientDto[]
  ): Promise<{ client: CreateClientDto; status: HttpStatus; message: string }[]> {

    return await this.clientsService.createBatch(clients);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return await this.clientsService.findAll();
  }

  @Get('actives')
  async findAllActives(): Promise<Client[]> {
    return await this.clientsService.findAllActives();
  }

  @Get(':gov_id')
  async findOne(@Param('gov_id') gov_id: FindOptionsWhere<Client>): Promise<Client | null> {
    return await this.clientsService.findOne(gov_id);
  }

  @Patch(':uuid')
  async update(@Param('uuid') uuid: string, @Body() client: UpdateClientDto) : Promise<UpdateResult | null> {
    return await this.clientsService.update(uuid, client);
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string): Promise<DeleteResult | void> {
    return await this.clientsService.remove(uuid);
  }
}
