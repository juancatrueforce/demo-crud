import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('sources')
export class SourcesController {
  @Get()
  findAll() {
    return 'All sources';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `get source: ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return payload;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `update source: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete source: ${id}`;
  }
}
