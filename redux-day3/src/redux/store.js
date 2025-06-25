import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; //setting data in local storage

const rootReducers = combineReducers({
  counter: counterReducer,
  products: productsReducer,
});

const composer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// redux-persist config starts here

const config = {
  key: "redux",
  storage,
};

const persistedReducer = persistReducer(config, rootReducers);

export const store = legacy_createStore(persistedReducer, composer);

export const persistedStore = persistStore(store);
