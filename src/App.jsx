import React from 'react';
import TicketListPage from './components/ticketsListPage';
import s from './App.module.scss';

function App() {
  return (
    <div>
      <div className={s.logo} />
      <TicketListPage />
    </div>
  );
}

export default App;
