import { createStore, combineReducers } from 'redux';
import customerReducer from './reducers/customerReducer';
import shoppingReducer from './reducers/shoppingReducer';
import categoryReducer from './reducers/categoryReducer';
import  gameReducer  from "./reducers/gameReducer";
import purchaseReducer from './reducers/purchaseReducer'; 

// יצירת ה-combined reducer
const rootReducer = combineReducers({
  customer: customerReducer,
  cart: shoppingReducer,
  category: categoryReducer,
  game: gameReducer,
  purchase: purchaseReducer, 

});

// יצירת ה-store
const store = createStore(rootReducer);

export default store;

