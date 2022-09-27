import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {ResourcesService} from '../services/resources.service';
import { ResourceDto } from './../dtos/resource.dto';

@Controller('resources')
export class ResourcesController {
  constructor(private resourceService: ResourcesService) {}

  @Get()
  findAll() {
    return this.resourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceService.findOne(+id);
  }

  @Post()
  create(@Body() payload: ResourceDto) {
    return this.resourceService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: ResourceDto) {
    return this.resourceService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.resourceService.delete(+id);
  }
}
