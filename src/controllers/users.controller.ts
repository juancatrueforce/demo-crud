import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'All Users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `get User: ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return payload;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `update User: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete User: ${id}`;
  }
}
