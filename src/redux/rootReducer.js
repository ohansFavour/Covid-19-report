import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import coronaData from "./corona-data/coronaReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  coronaData
});

export default persistReducer(persistConfig, rootReducer);