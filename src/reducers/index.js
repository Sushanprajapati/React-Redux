import LoggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers(
    {
        counter: counterReducer,
        isLogged: LoggedReducer
    }

    /*We can even give alias for the reducer name. i.e. Counter: counter and logged: isLogged */
);

export default allReducers;