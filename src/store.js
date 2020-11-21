import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Apply Middleware
let middleware = applyMiddleware(
    thunk,
);

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-undef
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middleware = composeEnhancers(middleware);
}


const store = createStore(rootReducer, {}, middleware);

export default store;
