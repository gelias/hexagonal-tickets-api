const getTicketPrices = (numberOfAdults: number, weekday: string) => {
    switch (weekday) {
        case 'WEDNESDAY': return numberOfAdults * WEEKDAY.WEDNESDAY
        case 'SATURDAY': return numberOfAdults * WEEKDAY.SATURDAY
        default: return null;
    }
}