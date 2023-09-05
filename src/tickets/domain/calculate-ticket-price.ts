/*
- Adult: $ 40.00
*/

enum WEEKDAY {
  MONDAY,
}

const calculateTicketPrices = (numberOfAdults: number, weekday: string) => {
  switch (weekday) {
    case 'MONDAY':
      return numberOfAdults * WEEKDAY.MONDAY;
    default:
      return null;
  }
};

export function calculateTicketForAdults(numberOfAdults: number, weekday: string) {
  const adultPrice = 40.0;

  switch (weekday as unknown as WEEKDAY) {
    case WEEKDAY.MONDAY:
      return 0;
  }
}
