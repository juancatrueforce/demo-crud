import {IsString, IsArray} from 'class-validator';

export class ResourceDto {

  @IsString()
  type: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];

  @IsString()
  size: string;

  @IsString()
  path: string;
}
