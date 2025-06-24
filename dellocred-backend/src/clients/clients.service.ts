import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {

  private readonly users: CreateClientDto[] = [];

  create(client: CreateClientDto) {

    if (!client.name || !client.email) {
      throw new BadRequestException('Both name and email must be provided');
    }
    this.users.push(client);
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
