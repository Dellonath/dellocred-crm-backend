import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://192.168.1.7:3001', // allow your frontend origin
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
