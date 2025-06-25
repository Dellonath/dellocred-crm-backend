import { IsString, IsEmail, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}