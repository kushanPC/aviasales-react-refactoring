import { connect } from 'react-redux';
import TicketList from './ticketList';
import { sortToCheapAC, setTotalDurationAC } from '../../redux/aviasalesReduser';

const mapStateToProps = (state) => (
  {
    tikets: state.tiketsPage.tikets,
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    sortToCheap() {
      dispatch(sortToCheapAC());
    },
    setTotalDuration() {
      dispatch(setTotalDurationAC());
    },
  }
);

const TicketListContainer = connect(mapStateToProps, mapDispatchToProps)(TicketList);

export default TicketListContainer;
