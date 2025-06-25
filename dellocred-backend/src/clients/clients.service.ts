import { Injectable, BadRequestException } from '@nestjs/common';
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

  create(client: CreateClientDto): Promise<Client | null> {

    if (!client.firstName || !client.lastName) {
      throw new BadRequestException('Both name and last name must be provided');
    }
    return this.clientsRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  findOne(uuid: FindOptionsWhere<Client>): Promise<Client | null> {
  return this.clientsRepository.findOneBy(uuid);
}
  
  update(uuid: string, client: UpdateClientDto): Promise<UpdateResult | null> {
    return this.clientsRepository.update(uuid, client);
  }

  remove(uuid: string): Promise<DeleteResult | void> {
    return this.clientsRepository.delete(uuid);
  }
}
