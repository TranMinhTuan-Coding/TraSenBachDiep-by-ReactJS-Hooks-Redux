import * as messages from '../Constants/cartMessages';
import * as types from '../Constants/actionTypes';

var initialState=messages.MESSAGE_WELCOME_TO_CART_PAGE;

const cartMessagesDisplayReducer = (state=initialState, action) => {
    var {cartMessagesKey}=action;
    switch (action.type) {
        case types.CART_MESSAGES_DISPLAY_ACTION:
            console.log(cartMessagesKey);
            return cartMessagesKey;
    
        default: return [...state];
    }
}
export default cartMessagesDisplayReducer;