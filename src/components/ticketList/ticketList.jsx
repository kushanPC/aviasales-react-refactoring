import React from 'react';
import s from './ticketsList.module.scss';
import TabsContainer from './tabs/tabsButtonContainer';
import Ticket from './ticket/ticket';

class TicketList extends React.Component {
  componentDidMount() {
    this.props.sortToCheap();
    this.props.setTotalDuration();
  }

  render() {
    return (
      <div className={s.ticketList}>
        <TabsContainer />
        {this.props.tikets.map((tiket) => (<Ticket tiket={tiket} />))}
      </div>
    );
  }
}

export default TicketList;
