import { createStore, compose } from 'redux';

// Root Reducer
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState = {}) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers()
    );
}
