import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { channelType, utmSource } from '../enums/index';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { Client } from './entities/clients.entity';

@Injectable()
export class ClientsService {

  constructor(@InjectRepository(Client) private repository: Repository<Client>) {}

  create(dto: CreateClientDto): Promise<Client | null> {
    try {
      return this.repository.save(dto)
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
          const client = await this.repository.save(dto);
          return { statusCode: HttpStatus.CREATED, message: 'OK' };
        } catch (error) {
          return { statusCode: HttpStatus.BAD_REQUEST, message: error.message };
        }
      })
    );
  }

  async findAll(): Promise<Client[]> {
    return await this.repository.find();
  }

  async findAllActives(): Promise<Client[]> {
    return await this.repository.find({
      where: { isActive: true },
    });
  }

  async findOneByGovId(govId: string): Promise<Client | null> {
    return await this.repository.findOne({ 
      where: { govId }
    });
  }
  
  async update(govId: string, dto: UpdateClientDto): Promise<UpdateResult | null> {
    return await this.repository.update({ govId }, dto);
  }

  async remove(govId: string): Promise<DeleteResult | void> {
    return await this.repository.delete({ govId });
  }
}
