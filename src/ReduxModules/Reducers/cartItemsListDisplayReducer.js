import * as types from '../Constants/actionTypes';

var cartBaseData=JSON.parse(localStorage.getItem('cartBaseData'));
var initialState=cartBaseData ? cartBaseData : [];

// Khai báo hàm tìm giá trị của biến index:
var findIndexInCartProducts = (cart, productItem) => {
    // Với điều kiện cart chứa sản phẩm có sẵn:
    var index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].productItemInCart.id === productItem.id) {
                index=i;
                break;
            };
        }
    }
    return index;
}

const cartItemsListDisplayReducer = (state=initialState, action) => {
    var index=-1;

    var {addedProductItemKey,
        quantityKey,
        deletedCartProductItemKey,
        cartProductItemKey,
        cartQuantityKey}=action;

    switch (action.type) {
        // Logic quản lý chức năng thêm sản phẩm vào giỏ hàng:
        case types.ADD_TO_CART_ACTION:
            console.log(action);
            index=findIndexInCartProducts(state, addedProductItemKey);

            if (index !== -1) {
                // Trong trường hợp trong giỏ hàng đã có sẵn sản phẩm đang được thêm => cộng dồn số lượng:
                // => Cộng dồn quantity của phần tử thứ index :
                state[index].quantity += quantityKey;
            } else {
                // Trong trường hợp trong giỏ hàng chưa có sẵn sản phẩm đang được thêm:
                state.push({
                    productItemInCart : addedProductItemKey,
                    quantity : quantityKey
                })
            }
            // Lưu giỏ hàng vào Local Storage:
            localStorage.setItem('cartBaseData', JSON.stringify(state))
            return [...state];
    
        // Logic quản lý chức năng xóa sản phẩm khỏi giỏ hàng:
        case types.DELETE_CART_PRODUCT_ITEM_ACTION:
            // console.log(action);
            index=findIndexInCartProducts(state, deletedCartProductItemKey);
            // console.log(index);
            if (index !== -1) {
                state.splice(index,1);
            }
            return [...state];

        // Logic quản lý chức năng thay đổi số lượng sản phẩm trong giỏ hàng:
        case types.UPDATE_CART_PRODUCT_ITEM_QUANTITY_ACTION:
            index=findIndexInCartProducts(state, cartProductItemKey)
            // console.log(state[index].quantity);
            // state.push ({
                // oldQuantity : state[index].quantity
            // });
            if (index !== -1) {
                state[index].quantity = cartQuantityKey;
            }
            localStorage.setItem('cartBaseData', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}
export default cartItemsListDisplayReducer;