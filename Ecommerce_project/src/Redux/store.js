import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authReducer } from "./Auth/authReducer";
import { productReducer } from "./Products/productReducer";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

const composer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// persist config

const config = {
  key: "redux",
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const store = legacy_createStore(persistedReducer, composer);

export const persistedStore = persistStore(store);
