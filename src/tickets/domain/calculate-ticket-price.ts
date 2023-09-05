/*
- Adult: $ 40.00
- Kids(0 / 7): $ 15.00
- Students(Student Card): $ 20.00
- Senior(high than 65 years old): $ 20.00
*/

enum WEEKDAY {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
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
    case WEEKDAY.SUNDAY:
      return 0;
    case WEEKDAY.MONDAY:
      return 0;
    case WEEKDAY.TUESDAY:
      return 0;
    case WEEKDAY.WEDNESDAY:
      return 0;
    case WEEKDAY.THURSDAY:
      return 0;
    case WEEKDAY.FRIDAY:
      return 0;
    case WEEKDAY.SATURDAY:
      return 0;
  }
}
