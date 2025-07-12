import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ZodValidationPipe } from '../../zod-validation.pipe';
import { ClientsService } from './clients.service';
import {
  CreateClientDto,
  CreateClientSchema,
  UpdateClientDto,
  UpdateClientSchema,
} from './dto/client.dto';
import {
  CreateClientNoteDto,
  CreateClientNoteSchema,
} from './dto/client.note.dto';
import { Client } from './entities/clients.entity';
import { ClientNote } from './entities/clients.notes.entity';
import z from 'zod';

const findAllClienteQueryParamsSchema = z.object({
  status: z.enum(['all', 'active', 'inactive']).optional(),
  govId: z.string().optional(),
  page: z.coerce.number().default(1),
});

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateClientSchema))
  create(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(dto);
  }

  @Post('form')
  createByForm(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.createByForm(dto);
  }

  @Post('batch')
  @HttpCode(207)
  @UsePipes(new ZodValidationPipe(CreateClientSchema))
  async createByBatch(
    @Body() dto: CreateClientDto[],
  ): Promise<{ statusCode?: HttpStatus; error?: string }[]> {
    return await this.clientsService.createByBatch(dto);
  }

  @Get()
  @UsePipes(new ZodValidationPipe(findAllClienteQueryParamsSchema))
  async findAll(
    @Query() query: z.infer<typeof findAllClienteQueryParamsSchema>,
  ): Promise<Client[]> {
    const { govId, status, page } = query;

    return await this.clientsService.findAll({
      govId,
      status,
      page,
    });
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
  @UsePipes(new ZodValidationPipe(UpdateClientSchema))
  async update(
    @Param('govId') govId: string,
    @Body() dto: UpdateClientDto,
  ): Promise<UpdateResult | null> {
    return await this.clientsService.update(govId, dto);
  }

  @Delete(':govId')
  async remove(@Param('govId') govId: string): Promise<DeleteResult | void> {
    return await this.clientsService.remove(govId);
  }

  @Post('notes')
  @UsePipes(new ZodValidationPipe(CreateClientNoteSchema))
  createClientNote(@Body() dto: CreateClientNoteDto): Promise<ClientNote> {
    return this.clientsService.createClientNote(dto);
  }

  @Get('notes')
  async findAllClientsNotes(): Promise<ClientNote[]> {
    return await this.clientsService.findAllClientsNotes();
  }

  @Get('notes/:clientUuid')
  async findAllClientNotes(
    @Param('clientUuid') clientUuid: string,
  ): Promise<ClientNote[]> {
    return await this.clientsService.findAllClientNotes(clientUuid);
  }
}
