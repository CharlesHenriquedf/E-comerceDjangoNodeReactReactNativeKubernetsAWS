import { combineReducers } from 'redux';
import userReducer from './userReducer';
// Importe outros reducers aqui

const rootReducer = combineReducers({
  user: userReducer,
  // Outros reducers vão aqui
});

export default rootReducer;
