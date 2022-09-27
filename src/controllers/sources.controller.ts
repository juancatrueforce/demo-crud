import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {SourcesService} from './../services/sources.service';

@Controller('sources')
export class SourcesController {
  constructor(private sourceService: SourcesService) {}

  @Get()
  findAll() {
    return this.sourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sourceService.findOne(+id);
  }

  @Post()
  create(@Body() payload: any) {
    return this.sourceService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.sourceService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sourceService.delete(+id);
  }
}
