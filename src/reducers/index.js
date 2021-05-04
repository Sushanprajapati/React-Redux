import isLogged from './isLogged';
import counter from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers(
    {
        counter,
        isLogged
    }

    {/*We can even give alias for the reducer name. i.e. Counter: counter and logged: isLogged */}
);

export default allReducers;