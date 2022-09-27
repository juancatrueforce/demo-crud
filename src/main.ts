import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common'

async function bootstrap() {
  console.log(process.env);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })
  await app.listen(process.env.PORT, () => {
    console.log(`[SPIKE WEB] ${process.env.BASE_URL}`);
  });
}
bootstrap();
