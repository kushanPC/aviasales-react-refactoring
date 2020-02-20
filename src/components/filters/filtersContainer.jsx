import { connect } from 'react-redux';
import Filters from './filters';
import { clickToAllAC, clickToChechboxAC } from '../../redux/filtersReduser';
import { sortToFiltersAC, sortToAllCheckboxOnAC, sortToAllCheckboxOfAC } from '../../redux/aviasalesReduser';

const mapStateToProps = (state) => (
  {
    checkState: state.checkboxState,
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    allCheckboxOn() {
      dispatch(sortToAllCheckboxOnAC());
    },
    allCheckboxOf() {
      dispatch(sortToAllCheckboxOfAC());
    },
    clickToAll() {
      dispatch(clickToAllAC());
    },
    sortToFilters(filters) {
      dispatch(sortToFiltersAC(filters));
    },
    clickToAnyCheckbox(stops) {
      dispatch(clickToChechboxAC(stops));
    },
    updateTicket(arr) {
      dispatch(sortToFiltersAC(arr));
    },
  }
);
const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default FiltersContainer;
