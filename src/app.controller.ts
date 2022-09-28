import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): object {
    return { message: "Welcome to the Spike's Juanca", version: 'v0.0.1' };
  }
}
