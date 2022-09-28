import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode
} from '@nestjs/common';
import {UsersService} from './../services/users.service';
import { UserDto } from './../dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() payload: UserDto) {
    return this.userService.create(payload);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: UserDto) {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
