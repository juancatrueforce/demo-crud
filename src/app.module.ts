import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { ResourcesService } from './services/resources.service';
import { UsersService } from './services/users.service';
import { ResourcesController } from './controllers/resources.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';

const envFilePath: string = `${__dirname}/common/envs/.env`;
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [AppController, UsersController, ResourcesController],
  providers: [AppService, ResourcesService, UsersService],
})
export class AppModule {}
