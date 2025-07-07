import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from './entities/clients.entity';
import { ClientNote } from './entities/clients.notes.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([ClientNote])
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
