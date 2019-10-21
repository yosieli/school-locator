import { createStore, compose, applyMiddleware } from 'redux'
import history from './history'
import ReduxThunk from 'redux-thunk'
const initialState = {
  schools: []
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'RESPONSE_SUBMITTED':
            
            history.push('/')
        break;
    }
    return currentState
}

const middleware = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
    reducer,
    initialState,
    middleware
)
