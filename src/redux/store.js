import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import productReducer from "./product/productSlice";
import storage from "redux-persist/lib/storage";
import systemReducer from "./systemState/SystemSlice";

const reducers = combineReducers({
  product: productReducer,
  system: systemReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});
