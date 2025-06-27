import { Injectable, BadRequestException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindOptionsWhere, UpdateResult, Repository } from 'typeorm';
import { Client } from './clients.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(client: CreateClientDto): Promise<Client | null> {
    try {
      return await this.clientsRepository.save(client);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createBatch(
    clientsBatch: CreateClientDto[],
  ): Promise<{ client: CreateClientDto; status: HttpStatus; message: string }[]> {
    
    const results: {
      client: CreateClientDto;
      status: HttpStatus;
      message: string;
    }[] = [];

    for (const client of clientsBatch) {
      try {
        await this.clientsRepository.save(client);
        results.push({ client, status: HttpStatus.CREATED, message: 'Created successfully' });
      } catch (error) {
        results.push({ client, status: HttpStatus.BAD_REQUEST, message: error.message });
      }
    }

    return results;
}

  async findAll(): Promise<Client[]> {
    return await this.clientsRepository.find();
  }

  async findAllActives(): Promise<Client[]> {
    return await this.clientsRepository.find({
      where: { isActive: true },
    });
  }

  async findOne(gov_id: FindOptionsWhere<Client>): Promise<Client | null> {
    return await this.clientsRepository.findOneBy(gov_id);
  }
  
  async update(uuid: string, client: UpdateClientDto): Promise<UpdateResult | null> {
    return await this.clientsRepository.update(uuid, client);
  }

  async remove(uuid: string): Promise<DeleteResult | void> {
    return await this.clientsRepository.delete(uuid);
  }
}
