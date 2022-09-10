import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import ListReducer from './reducers/ListReducer';

const reducers = combineReducers({
  ListReducer,
});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const configureStore = () => ({store});
export default configureStore;
