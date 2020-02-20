const SORT_TO_CHEAP = 'SORT_TO_CHEAP';
const SORT_TO_FAST = 'SORT_TO_FAST';
const SORT_TO_FILTERS = 'SORT_TO_FILTERS';
const SORT_TO_ALL_CHECKED_ON = 'SORT_TO_ALL_CHECKED_ON';
const SORT_TO_ALL_CHECKED_OF = 'SORT_TO_ALL_CHECKED_OF';

const SET_TOTAL_DURATION_SET_ID = 'SET_TOTAL_DURATION_SET_ID';


const data = {
  tikets: [
    {
      price: 84863,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-02-27T12:49:00.000Z',
          stops: [
            'SIN',
            'DXB',
            'IST',
          ],
          duration: 1802,
        },
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-03-17T21:35:00.000Z',
          stops: [],
          duration: 1422,
        },
      ],
    },
    {
      price: 74262,
      carrier: 'SU',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-02-26T21:27:00.000Z',
          stops: [
            'DXB',
          ],
          duration: 857,
        },
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-03-18T16:44:00.000Z',
          stops: [
            'KUL',
          ],
          duration: 1933,
        },
      ],
    },
    {
      price: 46681,
      carrier: 'MH',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-02-27T16:30:00.000Z',
          stops: [
            'AUH',
          ],
          duration: 890,
        },
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-03-17T23:21:00.000Z',
          stops: [
            'HKG',
            'IST',
          ],
          duration: 953,
        },
      ],
    },
    {
      price: 62273,
      carrier: 'EY',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-02-27T03:19:00.000Z',
          stops: [
            'BKK',
          ],
          duration: 630,
        },
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-03-17T23:08:00.000Z',
          stops: [
            'KUL',
          ],
          duration: 623,
        },
      ],
    },
    {
      price: 62309,
      carrier: 'MH',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-02-27T14:01:00.000Z',
          stops: [
            'KUL',
            'BKK',
          ],
          duration: 1906,
        },
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-03-18T00:02:00.000Z',
          stops: [
            'KUL',
          ],
          duration: 1428,
        },
      ],
    },
    {
      price: 67034,
      carrier: 'TG',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-02-27T17:16:00.000Z',
          stops: [],
          duration: 1135,
        },
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-03-18T13:50:00.000Z',
          stops: [
            'HKG',
          ],
          duration: 1344,
        },
      ],
    },
  ],
};


const ticketsReduser = (state = data, action) => {
  const s = { ...state, tikets: [...state.tikets] };
  switch (action.type) {
    case SORT_TO_CHEAP:
      s.tikets = s.tikets.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });

      return s;
    case SORT_TO_FAST:
      s.tikets = s.tikets.sort((a, b) => {
        if (a.totalDuration > b.totalDuration) {
          return 1;
        }
        if (a.totalDuration < b.totalDuration) {
          return -1;
        }
        return 0;
      });

      return s;
    case SET_TOTAL_DURATION_SET_ID:
      s.tikets.map((ticket, i) => {
        ticket.totalDuration = ticket.segments.reduce((a, b) => a.duration + b.duration);
        ticket.id = i;
        ticket.hide = false;
      });

      return s;
    case SORT_TO_ALL_CHECKED_ON:

      s.tikets.forEach((ticket) => {
        ticket.hide = true;
      });

      return s;
    case SORT_TO_ALL_CHECKED_OF:

      s.tikets.forEach((ticket) => {
        ticket.hide = false;
      });

      return s;
    case SORT_TO_FILTERS:

      const b = action.filters;
      s.tikets.forEach((element) => {
        element.hide = true;

        b.forEach((item) => {
          if (element.segments[0].stops.length === item) {
            b.forEach((i) => {
              if (element.segments[1].stops.length === i) {
                element.hide = false;
              }
            });
          }
        });
      });
      return { ...state, tikets: [...state.tikets] };
    default: return s;
  }
};


export const sortToCheapAC = () => ({ type: SORT_TO_CHEAP });
export const sortToFastAC = () => ({ type: SORT_TO_FAST });
export const sortToAllCheckboxOnAC = () => ({ type: SORT_TO_ALL_CHECKED_ON });
export const sortToAllCheckboxOfAC = () => ({ type: SORT_TO_ALL_CHECKED_OF });
export const sortToFiltersAC = (filters) => ({
  type: SORT_TO_FILTERS,
  filters,
});

export const setTotalDurationAC = () => ({ type: SET_TOTAL_DURATION_SET_ID });

export default ticketsReduser;
