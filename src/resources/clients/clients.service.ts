import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { channelType, utmSource } from '../../common/enums/enums';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { CreateClientNoteDto } from './dto/client.note.dto';
import { Client } from './entities/clients.entity';
import { ClientNote } from './entities/clients.notes.entity';


@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    @InjectRepository(ClientNote) private clientNotesRepository: Repository<ClientNote>
  ) {}

  async create(dto: CreateClientDto): Promise<Client> {
    try {
      return await this.clientRepository.save(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  createByForm(dto: CreateClientDto): Promise<Client | null> {

    dto.channelType = channelType.ONLINE
    dto.utmSource = utmSource.WEBSITE

    try {
      return this.create(dto)
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createByBatch(dtoBatch: CreateClientDto[]): Promise<{ statusCode?: HttpStatus, message?: string }[]> {
    return Promise.all(
      dtoBatch.map(async (dto) => {
        try {
          const client = await this.clientRepository.save(dto);
          return { statusCode: HttpStatus.CREATED, message: 'OK' };
        } catch (error) {
          return { statusCode: HttpStatus.BAD_REQUEST, message: error.message };
        }
      })
    );
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async findAllClientsNotes(): Promise<ClientNote[]> {
    return await this.clientNotesRepository.find();
  }

  async findAllClientNotes(clientUuid: string): Promise<ClientNote[]> {
  return await this.clientNotesRepository.find({
    where: { clientUuid: { uuid: clientUuid } }
  });
}

  async findAllActives(): Promise<Client[]> {
    return await this.clientRepository.find({
      where: { isActive: true }
    });
  }

  async findOneByGovId(govId: string): Promise<Client> {
  const client = await this.clientRepository.findOne({
    where: { govId } 
  });
  if (!client) {
    throw new NotFoundException(`Client with govId ${govId} not found`);
  }
    return client;
  }

  async createClientNote(dto: CreateClientNoteDto): Promise<ClientNote> {
  try {
    const note = this.clientNotesRepository.create({
      ...dto,
      clientUuid: { uuid: dto.clientUuid } as any,
      userUuid: { uuid: dto.userUuid } as any,
    });
    return await this.clientNotesRepository.save(note);
  } catch (error) {
    throw new BadRequestException(error.message);
  }
}
  
  async update(govId: string, dto: UpdateClientDto): Promise<UpdateResult | null> {
    return await this.clientRepository.update({ govId }, dto);
  }

  async remove(govId: string): Promise<DeleteResult | void> {
    return await this.clientRepository.delete({ govId });
  }
}
