import React from 'react';
import s from './ticket.module.scss';
import ticketF from './ticketAuxiliaryFunctions';

const Ticket = (props) => (
  <div className={props.tiket.hide ? `${s.hide} ${s.tiket}` : s.tiket}>
    <div className={s.headTicket}>
      <div className={s.price}>
        {ticketF.getPriceFormat(props.tiket.price)}
      </div>
      <div className={s.carrier} />
    </div>

    {props.tiket.segments.map((segment) => (
      <div className={s.segments}>
        <div className={s.originDestination}>
          <span className={s.title}>
            {segment.origin}
-
            {segment.destination}
          </span>
          <div className={s.flytime}>
            {ticketF.getTimeHM(segment.date)}
-
            {ticketF.getTimeHM(ticketF.getArrivalDate(segment.date, segment.duration))}
          </div>
        </div>

        <div className={s.timeway}>
          <div className={s.title}>в пути</div>
          <div className={s.duration}>{ticketF.durationToHours(segment.duration)}</div>
        </div>

        <div className={s.transfer}>
          <div className={s.titleTransfer}>{segment.stops.length ? segment.stops.length : 'Без пересадок'}</div>
          <div className={s.transferCountry}>
            {ticketF.getStops(segment.stops)}

          </div>
        </div>
      </div>
    ))}


  </div>


);

export default Ticket;
