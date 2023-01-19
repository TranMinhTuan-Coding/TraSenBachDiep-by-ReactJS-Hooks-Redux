// Container component trực tiếp nhận dữ liệu từ store và truyền xuống PresentationalComponents
// Cart, CartItem
// Import thư viện connect lên store và các Presentational Components :
import {connect} from 'react-redux';
import {Cart, CartItem, CartResult} from './ImportedPresentationalComponents';

import * as messages from '../Constants/cartMessages';
import * as actions from '../Actions/actions';

function CartContainer(props) {
    var {cartItemsListDisplay,
        deleteCartProductItemFunctionToItem,
        deleteCartProductItemMessageFunctionToItem,
        updateCartProductItemQuantityFunctionToItem,
        updateCartProductItemQuantityMessageFunctionToItem}=props;

    // hàm quản lý chức năng hiển thị giỏ hàng từ Cart Container xuống Cart:
    const cartItemsDisplayFunctionToItem =(cartItemsList) => {
        var result = messages.MESSAGE_EMTY_CART;
        if (cartItemsList.length > 0) {
            result=cartItemsList.map((item,index) => {
                return <CartItem
                            key={index}
                            cartItem={item}
                            index={index}
                            // Truyền hàm quản lý chức năng xóa sản phẩm khỏi giỏ hàng :
                            deleteCartProductItemFunctionToItem={deleteCartProductItemFunctionToItem}
                            // Truyền hàm quản lý chức năng hiển thị thông báo khi xóa sản phẩm khỏi giỏ hàng:
                            deleteCartProductItemMessageFunctionToItem={deleteCartProductItemMessageFunctionToItem}
                            // Truyền hàm quản lý chức năng thay đổi số lượng sản phẩm trong giỏ hàng:
                            updateCartProductItemQuantityFunctionToItem={updateCartProductItemQuantityFunctionToItem}
                            // Truyền hàm quản lý chức năng hiển thị thông báo khi thay đổi số lượng sản phẩm trong giỏ hàng:
                            updateCartProductItemQuantityMessageFunctionToItem={updateCartProductItemQuantityMessageFunctionToItem}
                        />
            })
        }
        return result;
    }

    // Hàm quản lý chức năng hiển thị tổng giá trị giỏ hàng:
    const cartTotalPriceFunctionToItem = (cartItemsList) => {
        var result = null;
        if (cartItemsList.length > 0) {
            return < CartResult
                        cartItemsList={cartItemsListDisplay}
                    />
        }
        return result;
    }

    return (
        <div>
            <Cart>
                {/* Truyền hàm quản lý chức năng hiển thị các sản phẩm trong giỏ hàng: */}
                {cartItemsDisplayFunctionToItem(cartItemsListDisplay)}

                {/* Truyền hàm quản lý chức năng hiển thị tổng giá trị giỏ hàng : */}
                {cartTotalPriceFunctionToItem(cartItemsListDisplay)}
            </Cart>
        </div>
    )
}

// Hàm nhận dữ liệu từ store về và chuyển thành state cho Container Component:
const mapStateToProps = (stateFromStore) => {
    return {
        cartItemsListDisplay : stateFromStore.cartItemsListDisplayState
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // Action quản lý chức năng xóa sản phẩm khỏi giỏ hàng:
        deleteCartProductItemFunctionToItem : (deletedProductItem) => {
            dispatch (actions.deleteCartProductItemAction(deletedProductItem))
        },

        // Action quản lý chức năng hiển thị thông báo khi xóa sản phẩm khỏi giỏ hàng:
        deleteCartProductItemMessageFunctionToItem : (message) => {
            dispatch (actions.cartMessagesDisplayAction(message))
        },

        // Action quản lý chức năng thay đổi số lượng sản phẩm trong giỏ hàng:
        updateCartProductItemQuantityFunctionToItem : (cartProductItem, quantity) => {
            dispatch (actions.updateCartProductItemQuantityAction(cartProductItem, quantity))
        },

        // Action quản lý chức năng hiển thị thông báo khi thay đổi số lượng sản phẩm trong giỏ hàng:
        updateCartProductItemQuantityMessageFunctionToItem : (cartMessage) => {
            dispatch (actions.cartMessagesDisplayAction(cartMessage))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CartContainer);