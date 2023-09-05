import {
  NestInterceptor,
  ExecutionContext,
  Injectable,
  BadRequestException,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ValidationErrorsInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        console.error(error);
        throw error;
      }),
    );
  }
}
