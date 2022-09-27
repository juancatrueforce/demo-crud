import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { ResourcesService } from './services/resources.service';
import { UsersService } from './services/users.service';
import { ResourcesController } from './controllers/resources.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ResourcesController],
  providers: [AppService, ResourcesService, UsersService],
})
export class AppModule {}
