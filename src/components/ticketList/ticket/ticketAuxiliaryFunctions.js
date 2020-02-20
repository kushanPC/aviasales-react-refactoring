
const ticketFunctions = {
  getPriceFormat(price) {
    const str = String(price);
    switch (str.length) {
      case 4:
        return `${str.slice(0, 1)} ${str.slice(1, str.length)}`;

      case 5:
        return `${str.slice(0, 2)} ${str.slice(2, str.length)}`;


      case 6:
        return `${str.slice(0, 3)} ${str.slice(3, str.length)}`;
      default: return price;
    }
  },
  getStops(stops) { return (stops.length ? stops.join(', ') : 'Без пересадок'); },
  getTimeHM(dateDeparture) {
    const date = new Date(dateDeparture);
    const hours = `${date.getUTCHours()}`.length < 2 ? `0${date.getUTCHours()}` : date.getUTCHours();
    const minutes = `${date.getUTCMinutes()}`.length < 2 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();
    return `${hours}:${minutes}`;
  },
  getArrivalDate(dateDeparture, duration) {
    const date = new Date(dateDeparture).setMilliseconds(duration * 60 * 1000);
    return date;
  },
  durationToHours(duration) { return (`${Math.trunc(duration / 60)}ч ${duration % 60}м`); },
};

export default ticketFunctions;
