import React from 'react';
import s from './ticketsListPage.module.scss';
import TicketListContainer from './ticketList/ticketListContainer';
import FiltersContainer from './filters/filtersContainer';

const TicketListPage = (props) => (
  <div className={s.page}>
    <FiltersContainer />
    <TicketListContainer />
  </div>
);

export default TicketListPage;
