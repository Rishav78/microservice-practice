import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'v1',
    children: [AuthModule],
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().exclude();
  }
}
