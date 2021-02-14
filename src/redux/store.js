import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //create store and add all middlewares by destructuring them into applyMiddleware()

export const persistor = persistStore(store);

export default { store, persistor };
