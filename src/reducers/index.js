import { combineReducers } from 'redux';
import characterResults from './characterResults';
import searchInput from './searchInput'

export default combineReducers({
  characterResults,
  searchInput
});
