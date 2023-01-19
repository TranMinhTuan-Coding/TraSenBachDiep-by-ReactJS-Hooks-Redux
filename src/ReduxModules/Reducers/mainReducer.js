// Import thư viện combineReducers và các Reducers con quản lý chức năng:
import {combineReducers} from 'redux';
import {productItemsListDisplayReducer, cartItemsListDisplayReducer, CartMessagesDisplayReducer} from './ImportedReducers';

const mainReducer = combineReducers({
    productItemsListDisplayState : productItemsListDisplayReducer,
    cartItemsListDisplayState : cartItemsListDisplayReducer,
    cartMessagesState : CartMessagesDisplayReducer,
});
export default mainReducer;