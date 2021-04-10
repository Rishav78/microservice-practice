import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      queue: 'microservice1_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.setGlobalPrefix('microservice1');
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
