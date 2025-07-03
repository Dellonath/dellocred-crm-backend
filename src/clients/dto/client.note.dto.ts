import { PartialType } from '@nestjs/mapped-types';
import {
  IsOptional,
  IsString,
  IsUUID,
  Length
} from 'class-validator';

export class CreateClientNoteDto {

  @IsOptional()
  @IsUUID()
  uuid?: string;

  @IsUUID()
  clientUuid: string;

  @IsUUID()
  userUuid: string;

  @IsString()
  @Length(1, 64)
  note: string;

}

export class UpdateClientNoteDto extends PartialType(CreateClientNoteDto) {}
