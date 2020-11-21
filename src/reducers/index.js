import { combineReducers } from 'redux';
import flagged from './FlaggedReducer';

const rootReducer = combineReducers({
    FlaggedReducer: flagged,
    // rest of our reducers
});

export default rootReducer;
