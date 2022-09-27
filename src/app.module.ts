import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { SourcesService } from './services/sources.service';
import { UsersService } from './services/users.service';
import { SourcesController } from './controllers/sources.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, SourcesController],
  providers: [AppService, SourcesService, UsersService],
})
export class AppModule {}
