import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TicketTheaterPurchaseRequest } from '../../../tickets/application/rest/ticket-theater-purchase-request';
import { ApiTags } from '@nestjs/swagger';
import { ValidationErrorsInterceptor } from '../../../tickets/application/rest/error-handling.interceptor';
import { TicketTheaterPurchaseResponse } from '../../../tickets/application/rest/ticket-theater-purchase-response';
import { TicketTheaterService } from '../../../tickets/domain/ticket-theater.service';

@ApiTags('Ticket')
@Controller('api/v1/ticket/theater')
export class TeatherController {
  @Inject(TicketTheaterService)
  private readonly service: TicketTheaterService;

  @Post('/')
  @HttpCode(200)
  @UseInterceptors(ValidationErrorsInterceptor)
  @UsePipes(
    new ValidationPipe({
      skipMissingProperties: false,
      skipUndefinedProperties: false,
    }),
  )
  calculateTicketPrice(
    @Body() purchase: TicketTheaterPurchaseRequest,
  ): TicketTheaterPurchaseResponse {
    return this.service.calculate(purchase);
  }
}
