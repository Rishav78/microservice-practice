import 'src/api/v1/lib/env';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './v1/module';
import { HttpExceptionFilter } from './v1/lib/filters/http-exception.filter';
import { BenchmarkInterceptor } from './v1/lib/interceptor/benchmark.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: true });

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new BenchmarkInterceptor());
  app.setGlobalPrefix('api/auth');

  const config = new DocumentBuilder()
    .setTitle('URBANDHOBI')
    .setDescription('The URBANDHOBI API description')
    .setVersion('1.0')
    // .addTag('URBANDHOBI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/auth', app, document);

  await app.listen(3000);
}
bootstrap();
