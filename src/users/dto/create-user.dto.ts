import { IsString, IsEmail, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}