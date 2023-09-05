/*
- Adult: $ 40.00
*/

enum WEEKDAY {
  MONDAY,
}

const calculateTicketPrices = (numberOfAdults: number, weekday: string) => {
  switch (weekday) {
    case 'WEDNESDAY':
      return numberOfAdults * WEEKDAY.WEDNESDAY;
    case 'SATURDAY':
      return numberOfAdults * WEEKDAY.SATURDAY;
    default:
      return null;
  }
};

function calculateTicketForAdults(numberOfAdults: number, weekday: WEEKDAY) {
  const adultPrice = 40.0;

  switch (weekday) {
    case WEEKDAY.MONDAY:
      return 0;
  }
}
