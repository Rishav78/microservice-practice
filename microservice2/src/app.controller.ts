import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MATH_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    console.log('emit');
    this.client.emit('notifications', 'rishav');
    return this.appService.getHello();
  }
}
