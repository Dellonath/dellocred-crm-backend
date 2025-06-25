import { IsString, IsEmail, IsOptional, IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateClientDto {
  
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  uuid: string;

  @IsNotEmpty()
  @MaxLength(11)
  @IsString()
  govId: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}