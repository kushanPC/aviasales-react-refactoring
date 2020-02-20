const CLICK_TO_CHEAP_TAB = 'CLICK_TO_CHEAP_TAB';
const CLICK_TO_FAST_TAB = 'CLICK_TO_FAST_TAB';


const data = {
  toCheapState: true,
  toFastState: false,
};

const tabsReduser = (state = data, action) => {
  const s = { ...state };
  switch (action.type) {
    case CLICK_TO_CHEAP_TAB:
      return {
        toFastState: false,
        toCheapState: true,
      };
    case CLICK_TO_FAST_TAB:
      return {
        toFastState: true,
        toCheapState: false,
      };
    default: return s;
  }
};


export const clickToCheapAC = () => ({ type: CLICK_TO_CHEAP_TAB });
export const clickToFastAC = () => ({ type: CLICK_TO_FAST_TAB }
);


export default tabsReduser;
