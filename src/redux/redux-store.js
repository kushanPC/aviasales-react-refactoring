import { createStore, combineReducers } from 'redux';
import ticketsReduser from './aviasalesReduser';
import tabsReduser from './tabsReduser';
import filtersReduser from './filtersReduser';


const redusers = combineReducers({
  tiketsPage: ticketsReduser,
  tabsState: tabsReduser,
  checkboxState: filtersReduser,
});

const store = createStore(redusers);

window.store = store;

export default store;
