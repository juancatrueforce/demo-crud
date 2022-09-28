import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './controllers/users.controller';
import { ResourcesService } from './services/resources.service';
import { UsersService } from './services/users.service';
import { ResourcesController } from './controllers/resources.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { User } from './entities/user.entity';
import { Resource } from './entities/resource.entity';

const envFilePath: string = `${__dirname}/common/envs/.env`;
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TypeOrmModule.forFeature([User, Resource])
  ],
  controllers: [AppController, UsersController, ResourcesController],
  providers: [ResourcesService, UsersService],
})
export class AppModule {}
