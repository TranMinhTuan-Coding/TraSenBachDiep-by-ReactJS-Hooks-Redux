import * as types from '../Constants/actionTypes';

// Action quản lý chức năng thêm sản phẩm vào giỏ hàng:
export const addToCartAction = (addedProductItemValue, quantity) => {
    return {
        type : types.ADD_TO_CART_ACTION,
        addedProductItemKey : addedProductItemValue,
        quantityKey : quantity
    }
}

// Action quản lí chức năng hiển thị các thông báo từ giỏ hàng:
export const cartMessagesDisplayAction = (cartMessages) => {
    return {
        type: types.CART_MESSAGES_DISPLAY_ACTION,
        cartMessagesKey : cartMessages
    }
}

// Action quản lý chức năng xóa sản phẩm khỏi giỏ hàng:
export const deleteCartProductItemAction = (deletedCartProductItem) => {
    return {
        type : types.DELETE_CART_PRODUCT_ITEM_ACTION,
        deletedCartProductItemKey : deletedCartProductItem
    }
}

// Action quản lý chức năng thay đổi số lượng sản phẩm trong giỏ hàng:
export const updateCartProductItemQuantityAction = (cartProductItemValue,cartQuantityValue) => {
    return {
        type : types.UPDATE_CART_PRODUCT_ITEM_QUANTITY_ACTION,
        cartProductItemKey : cartProductItemValue,
        cartQuantityKey : cartQuantityValue
    }
}