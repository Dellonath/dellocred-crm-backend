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
} from 'class-validator';
import {
  channelType,
  educationLevel,
  gender,
  jobPosition,
  maritialStatus,
  state
} from '../../enums/index';

export class CreateUserDto {

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
  @Length(1, 64)
  phoneNumber: string;

  @IsEnum(jobPosition)
  jobPosition: jobPosition;

  @IsEnum(channelType)
  channelType: channelType;

  @IsOptional()
  @IsDateString()
  birthDate?: Date;

  @IsOptional()
  @IsEnum(gender)
  gender?: gender;

  @IsOptional()
  @IsEnum(maritialStatus)
  maritialStatus?: maritialStatus;

  @IsOptional()
  @IsEnum(educationLevel)
  educationLevel?: educationLevel;

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
  addressNeighborhood?: string;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  addressStreet?: string;

  @IsOptional()
  @IsNumber()
  addressNumber?: number;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  addressComplement?: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  postalCode?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}