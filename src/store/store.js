
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducerActions from "./reducerActions";


export const store = createStore(reducerActions, applyMiddleware(thunk))

export default store;
