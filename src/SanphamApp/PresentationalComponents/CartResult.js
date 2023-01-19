export default function CartResult(props) {

    var {cartItemsList}=props;

    // Hàm quản lý chức năng tính tổng giá trị giỏ hàng:
    const cartTotalPriceFunction =(cartItemsList) => {
      var totalPrice = 0;
      if (cartItemsList.length > 0) {
        for (let i = 0; i < cartItemsList.length; i++) {
          totalPrice += cartItemsList[i].productItemInCart.price*cartItemsList[i].quantity;
        }
      }
      return totalPrice;
    }


    return (
        <tr>
                  <td colSpan={2} />
                  <td>
                    <h2>Tổng thành tiền (Vnđ): </h2>
                  </td>
                  <td>
                    <h2>  
                        {cartTotalPriceFunction(cartItemsList)}
                    </h2>
                  </td>
                  <td colSpan={2}>
                    <button className="sanpham-purchase-button">Tiến hành thanh toán <i className="fa-solid fa-sanpham-cart-shopping" /></button>
                  </td>
        </tr>
    )
}