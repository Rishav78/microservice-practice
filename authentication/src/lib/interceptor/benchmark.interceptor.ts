import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class BenchmarkInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    console.log('ENDPOINT -> ', request.method, request.url);

    return next
      .handle()
      .pipe(tap(() => console.log('EXECUTION TIME -> ', Date.now() - now)));
  }
}
