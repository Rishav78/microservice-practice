import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule, Routes } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { dbURL } from './lib/core/configuration/db';

const routes: Routes = [
  {
    path: 'v1',
    children: [AuthModule],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AuthModule,
    MongooseModule.forRoot(dbURL()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().exclude();
  }
}
