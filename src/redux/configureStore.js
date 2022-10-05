import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

import contactReducer from './reducers/contactReducer';
import messageReducer from './reducers/messageReducer';

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    contacts: contactReducer,
    messages: messageReducer,
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаем store с использованием persistedReducer
export const store = createStore(persistedReducer, applyMiddleware(thunk));

// создаем persistor
export const persistor = persistStore(store);

// const store = createStore(rootReducer, applyMiddleware(thunk));

//export default store;




/*
// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
}
*/

/*
// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаем store с использованием persistedReducer
export const store = createStore(persistedReducer);

// создаем persistor
export const persistor = persistStore(store);
*/

/*
const logger = state => next => action => {
    console.log('dispatching', action);
    console.log('before', state.getState());
    let result = next(action);
    console.log('after', state.getState());
    return result;
}
*/
/*
const timeout = state => next => action => {
    const delayMs = action?.meta?.delayMs;
    if (!delayMs) {
        return next(action);
    }
    const timeoutId = setTimeout(() => next(action), delayMs);

    return () => {
        clearTimeout(timeoutId)
    }
}
*/
