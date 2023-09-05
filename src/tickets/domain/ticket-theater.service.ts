import { Inject } from '@nestjs/common';
import { TicketTheaterPurchaseRequest } from '../application/rest/ticket-theater-purchase-request';
import { TicketTheaterPurchaseResponse } from '../application/rest/ticket-theater-purchase-response';
import { CapacityRepository } from '../infrastructure/capacity.repository';
import { calculateTicketForAdults } from './calculate-ticket-price';

export class TicketTheaterService {

  @Inject(CapacityRepository)
  private readonly repository: CapacityRepository;

  calculate(
    purchase: TicketTheaterPurchaseRequest,
  ): TicketTheaterPurchaseResponse {
    // Check Capacity
    if (!this.checkCapacity(purchase)) {
      return null;
    }

    const adultsTotal = calculateTicketForAdults(purchase.adults, purchase.weekday as string)
    // purchase.adults, purchase.weekday, 

    // Fake response
    return {
      adultsPrice: adultsTotal,
      kidsPrice: 0,
      seniorsPrice: 0,
      studentsPrice: 0,
    };
  }

  checkCapacity(purchase: TicketTheaterPurchaseRequest): boolean {
    const totalSeats =
      purchase.adults + purchase.kids + purchase.seniors + purchase.students;
    return this.repository.bookSeatsFor(totalSeats);
  }
}
