// import { composeWithDevTools } from 'redux-devtools-extension'
// import createSagaMiddleware from 'redux-saga'
// import {applyMiddleware, createStore} from 'redux'
// import axios from 'axios'
// import { rootReducer } from './reducers'

// const configureStore = () => {
//     const saga = createSagaMiddleware()
//     const composedMiddleware = composeWithDevTools(
//         applyMiddleware(saga)
//     )
//     const store = createStore(rootReducer, composeWithDevTools)
//     saga.run(rootSaga)

//     return store
// }

// export default configureStore

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import { rootReducer } from "./reducers";
import { rootWatcher } from "./sagas";
import axios from "axios";

const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, composeEnhancers);
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";
axios.defaults.params = {
  appid: "69a728415656716e7e146ac6e5dc7c8e",
};

sagaMiddleware.run(rootWatcher);
export default store;
