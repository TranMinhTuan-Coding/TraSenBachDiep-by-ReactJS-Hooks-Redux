import * as messages from '../../ReduxModules/Constants/cartMessages';
import {useState} from 'react';

export default function CartItem(props) {
    var {cartItem,
        index,
        deleteCartProductItemFunctionToItem,
        deleteCartProductItemMessageFunctionToItem,
        updateCartProductItemQuantityFunctionToItem,
        updateCartProductItemQuantityMessageFunctionToItem}=props;

    const [defaultQuantity, setDefaultQuantity]=useState(1);

    // Hàm Tính tổng giá của từng sản phẩm trong giỏ hàng:
    const productItemTotalPrice = (price, quantity) => {
      return price * quantity;
    } 

    // Hàm quản lý chức năng xóa sản phẩm khỏi giỏ hàng:
    const deleteCartProductItemFunction = (deletedProductItem) => {
      deleteCartProductItemFunctionToItem(deletedProductItem);
      deleteCartProductItemMessageFunctionToItem(messages.MESSAGE_DELETE_PRODUCT_IN_CART)
    }

    // Tăng và giảm số lượng sản phẩm tách thành 2 hàm xử lí riêng :
    // Hàm quản lí chức năng giảm số lượng sản phẩm:
    const decreaseCartProductItemQuantityFunction = (cartProductItem, quantity) => {
      if (quantity > 0) {
        setDefaultQuantity({
          defaultQuantity : quantity
        });
        updateCartProductItemQuantityFunctionToItem(cartProductItem, quantity);
        updateCartProductItemQuantityMessageFunctionToItem(messages.MESSAGE_UPDATE_DECREASE_PRODUCT_QUANTITY);
      }
    }

    // Hàm quản lí chức năng tăng số lượng sản phẩm:
    const increaseCartProductItemQuantityFunction = (cartProductItem, quantity) => {
      if (quantity > 0) {
        setDefaultQuantity({
          defaultQuantity : quantity
        });
        updateCartProductItemQuantityFunctionToItem(cartProductItem, quantity);
        updateCartProductItemQuantityMessageFunctionToItem(messages.MESSAGE_UPDATE_INCREASE_PRODUCT_QUANTITY);
      }
    }
    
    return (
        <tr>
                  <td>{index+1}/</td>
                  <td>{cartItem.productItemInCart.name}</td>
                  <td>{cartItem.productItemInCart.price/1000}.000</td>
                  <td>
                    <button 
                      className="sanpham-products-button"
                      // onClick={() => updateCartProductItemQuantityFunction(cartItem.productItemInCart, cartItem.quantity - 1)}
                      // Hàm quản lí chức năng giảm số lượng sản phẩm:
                      onClick={() => decreaseCartProductItemQuantityFunction(cartItem.productItemInCart, cartItem.quantity - 1)}
                    >
                      Giảm
                    </button>
                    
                    {cartItem.quantity > 0 ? cartItem.quantity : defaultQuantity}
                    
                    <button 
                      className="sanpham-products-button"
                      // onClick={() => updateCartProductItemQuantityFunction(cartItem.productItemInCart, cartItem.quantity + 1)}
                      // Hàm quản lí chức năng tăng số lượng sản phẩm:
                      onClick={() => increaseCartProductItemQuantityFunction(cartItem.productItemInCart, cartItem.quantity + 1)}
                    >
                      Tăng
                    </button>
                  </td>
                  <td>
                      {productItemTotalPrice(cartItem.productItemInCart.price, cartItem.quantity)}
                  </td>
                  <th>
                    <button 
                        className="sanpham-delete-cart-item-button"
                        onClick={() => deleteCartProductItemFunction(cartItem.productItemInCart)}
                      >
                          Xóa sản phẩm
                    </button>
                  </th>
        </tr>
    )
}