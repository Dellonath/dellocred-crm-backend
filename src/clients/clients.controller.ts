import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/clients.entity';

@Controller('clients')
export class ClientsController {

  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(dto);
  }

  @Post('form')
  createFromForm(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.createFromForm(dto);
  }

  @Post('batch')
  @HttpCode(207)
  async createByBatch(@Body() dto: CreateClientDto[]): Promise<{ statusCode?: HttpStatus, error?: string }[]> {
    return await this.clientsService.createByBatch(dto);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return await this.clientsService.findAll();
  }

  @Get('actives')
  async findAllActives(): Promise<Client[]> {
    return await this.clientsService.findAllActives();
  }

  @Get(':govId')
  async findOneByGovId(@Param('govId') govId: string): Promise<Client | null> {
    return await this.clientsService.findOneByGovId(govId);
  }

  @Patch(':govId')
  async update(@Param('govId') govId: string, @Body() dto: UpdateClientDto) : Promise<UpdateResult | null> {
    return await this.clientsService.update(govId, dto);
  }

  @Delete(':govId')
  async remove(@Param('govId') govId: string): Promise<DeleteResult | void> {
    return await this.clientsService.remove(govId);
  }
}
