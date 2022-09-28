import {IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {

  @IsEmail({message: "Invalid email message"})
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}