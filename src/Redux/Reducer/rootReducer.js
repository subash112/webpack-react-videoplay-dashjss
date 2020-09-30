import { combineReducers } from 'redux';
import List from './List';
import Movie from './Movie';

const rootReducer = combineReducers({
  List: List,
  Movie: Movie,
});

export default rootReducer;
