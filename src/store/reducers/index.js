import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import authReducer from './authReducer';
import modeReducer from './modeReducer';

export default combineReducers({cardsReducer, authReducer, modeReducer});
