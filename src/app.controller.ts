import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return { message: "Welcome to the Spike's Juanca", version: 'v0.0.1' };
  }
}
