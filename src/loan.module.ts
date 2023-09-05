import { Module } from '@nestjs/common';
import { TeatherController } from './tickets/application/rest/ticket-theater.controller';
import { TicketTheaterService } from './tickets/domain/ticket-theater.service';
import { CapacityRepository } from './tickets/infrastructure/capacity.repository';

@Module({
  imports: [],
  controllers: [TeatherController],
  providers: [
    { provide: TicketTheaterService, useClass: TicketTheaterService },
    { provide: CapacityRepository, useClass: CapacityRepository },
  ],
})
export class AppModule {}
