// Import các Presentational Components:
// import CartItem from './CartItem';
// import CartResult from './CartResult';

export default function Cart(props) {
    var {children}=props;
    return (
        <div className="sanpham-cart">
            <table className="sanpham-cart-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Đơn giá (Vnđ)</th>
                  <th>Số lượng</th>
                  <th>Tổng giá sản phẩm (Vnđ)</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                    {/* <CartItem /> */}
                
                    {/* <CartResult /> */}
                    {children}
              </tbody>
            </table>
          </div>
    )
}