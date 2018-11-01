import { combineReducers } from 'redux';
import characterResults from './characterResults';
import searchInput from './searchInput'
import category from './category'

export default combineReducers({
  characterResults,
  searchInput,
  category
});
