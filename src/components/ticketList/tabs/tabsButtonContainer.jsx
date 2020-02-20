import { connect } from 'react-redux';
import Tabs from './tabsButton';
import { clickToCheapAC, clickToFastAC } from '../../../redux/tabsReduser';
import { sortToCheapAC, sortToFastAC } from '../../../redux/aviasalesReduser';


const mapStateToProps = (state) => (
  {
    toCheapState: state.tabsState.toCheapState,
    toFastState: state.tabsState.toFastState,
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    clickToCheap: () => {
      dispatch(clickToCheapAC());
      dispatch(sortToCheapAC());
    },
    clickToFast: () => {
      dispatch(sortToFastAC());
      dispatch(clickToFastAC());
    },
  }

);


const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs);

export default TabsContainer;
