import { createStore,compose,applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from 'redux-thunk';

//Eger Middleware istifade olunmasa 
// export const store = createStore(
//                             reducers,
//                             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//                             )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// // export const store = createStore(reducers))
// export const store = createStore(reducers,composeEnhancers())
export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))