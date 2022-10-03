import {combineReducers, createStore} from 'redux';

import contactReducer from './reducers/contactReducer';
import messageReducer from './reducers/messageReducer';

const reducer = combineReducers({
    contacts: contactReducer,
    messages: messageReducer,
});

const store = createStore(reducer);

export default store;