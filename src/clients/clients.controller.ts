import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ClientsService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { CreateClientNoteDto } from './dto/client.note.dto';
import { Client } from './entities/clients.entity';
import { ClientNote } from './entities/clients.notes.entity';

@Controller('clients')
export class ClientsController {

  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(dto);
  }

  @Post('notes')
  createClientNote(@Body() dto: CreateClientNoteDto): Promise<ClientNote> {
    return this.clientsService.createClientNote(dto);
  }

  @Get('notes')
  async findAllClientsNotes(): Promise<ClientNote[]> {
    return await this.clientsService.findAllClientsNotes();
  }

  @Get('notes/:clientUuid')
  async findAllClientNotes(@Param('clientUuid') clientUuid: string): Promise<ClientNote[]> {
    return await this.clientsService.findAllClientNotes(clientUuid);
  }

  @Post('form')
  createByForm(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.createByForm(dto);
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
  async findOneByGovId(@Param('govId') govId: string): Promise<Client> {
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
