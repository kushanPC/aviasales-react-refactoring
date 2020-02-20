import React from 'react';
import s from './tabsButton.module.scss';


const Tabs = (props) => (
  <div className={s.tabs}>
    <button onClick={props.clickToCheap} className={props.toCheapState ? `${s.selected} ${s.tab}` : s.tab} type="button" name="button">самый дешевый</button>
    <button onClick={props.clickToFast} className={props.toFastState ? `${s.selected} ${s.tab}` : s.tab} type="button" name="button">самый быстрый</button>
  </div>
);

export default Tabs;
