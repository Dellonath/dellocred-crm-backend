import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Matches
} from 'class-validator';
import {
  clientSector,
  educationLevel,
  gender,
  maritialStatus,
  originChannel,
  state,
  utmMedium,
  utmSource,
} from '../entities/clients.entity.enums';

export class CreateClientDto {
  @IsOptional()
  @IsUUID()
  uuid?: string;

  @IsString()
  @Length(11, 11)
  govId: string;

  @IsString()
  @Length(1, 64)
  firstName: string;

  @IsString()
  @Length(1, 64)
  lastName: string;

  @IsEmail()
  @Length(1, 64)
  email: string;

  @IsString()
  @Matches(/^\+?\d{10,15}$/)
  @Length(1, 20)
  phoneNumber: string;

  @IsOptional()
  @IsDateString()
  birthDate?: Date;

  @IsOptional()
  @IsEnum(gender)
  gender?: gender;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  occupation?: string;

  @IsOptional()
  @IsEnum(maritialStatus)
  maritialStatus?: maritialStatus;

  @IsOptional()
  @IsEnum(educationLevel)
  educationLevel?: educationLevel;

  @IsOptional()
  @IsNumber()
  wage?: number;

  @IsOptional()
  @IsEnum(clientSector)
  clientSector?: clientSector;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  country?: string;

  @IsOptional()
  @IsEnum(state)
  state?: state;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  city?: string;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  addressStreet?: string;

  @IsOptional()
  @IsNumber()
  addressNumber?: number;

  @IsOptional()
  @IsString()
  addressComplement?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsEnum(originChannel)
  originChannel?: originChannel;

  @IsOptional()
  @IsEnum(utmSource)
  utmSource?: utmSource;

  @IsOptional()
  @IsEnum(utmMedium)
  utmMedium?: utmMedium;

  @IsOptional()
  @IsString()
  utmCampaign?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}