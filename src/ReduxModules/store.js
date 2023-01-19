// Import thư viện createStore và Reducer Tổng:
import {createStore} from 'redux';
import mainReducer from './Reducers/mainReducer';

const store = createStore(
    mainReducer,
);
export default store;