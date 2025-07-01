import { PartialType } from '@nestjs/mapped-types';
import { CreateClientNoteDto } from './create-client.note.dto';

export class UpdateClientNotesDto extends PartialType(CreateClientNoteDto) {}
