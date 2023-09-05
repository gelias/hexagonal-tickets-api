export class CapacityRepository {
  readonly totalCapacity: number = 30;

  bookSeatsFor(seats: number): boolean {
    return true;
  }
}
