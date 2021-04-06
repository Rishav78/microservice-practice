import { Controller, Get, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller({})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('USER')
  @Get('user')
  getHello(): string {
    throw new BadRequestException('INVALID_HTTP', 'hit a proper url');
    return this.appService.getHello();
  }
}
