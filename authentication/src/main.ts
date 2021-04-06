import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './lib/filters/http-exception.filter';
import { BenchmarkInterceptor } from './lib/interceptor/benchmark.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: true });

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new BenchmarkInterceptor());

  const config = new DocumentBuilder()
    .setTitle('URBANDHOBI')
    .setDescription('The URBANDHOBI API description')
    .setVersion('1.0')
    // .addTag('URBANDHOBI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
