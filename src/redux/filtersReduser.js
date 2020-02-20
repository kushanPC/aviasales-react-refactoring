const CLICK_TO_ALL = 'CLICK_TO_ALL';
const CLICK_TO_CHECKBOX = 'CLICK_TO_CHECKBOX';


const data = {
  all: true,
  status: [
    { stat: true, stop: 0 },
    { stat: true, stop: 1 },
    { stat: true, stop: 2 },
    { stat: true, stop: 3 }],
};


const filtersReduser = (state = data, action) => {
  switch (action.type) {
    case CLICK_TO_ALL: {
      if (state.all) {
        const a = (state.status.map((s) => ({ ...s, stat: false })));

        return { all: false, status: a };
      }
      const a = (state.status.map((s) => ({ ...s, stat: true })));
      return { all: true, status: a };
    }
    case CLICK_TO_CHECKBOX:
      const statusCopy = [...state.status];
      statusCopy.forEach((s) => {
        if (action.stop === s.stop) {
          s.stat = !s.stat;
        }
      });

      return { ...state, status: statusCopy };
    default: return { ...state };
  }
};


export const clickToAllAC = () => ({ type: CLICK_TO_ALL });

export const clickToChechboxAC = (stop) => ({
  type: CLICK_TO_CHECKBOX,
  stop,
});


export default filtersReduser;
