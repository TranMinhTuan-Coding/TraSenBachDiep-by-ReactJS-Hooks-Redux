// Thông báo từ giỏ hàng chỉ do 1 Presentational Component Cart Messages quản ly dữ liệu 
// => Sử dụng luôn Component này nhận dữ liệu từ Store về và hiển thị, không cần phải sử dụng Container Component:
import {connect} from 'react-redux';

function CartMessages(props) {
    var {cartMessages}=props;
    return (
        <div>
            <p className="sanpham-cart-message"> 
                    {cartMessages} 
            </p>
        </div>
    )
}

// Hàm nhận dữ liệu từ Store:
const mapStateToProps = (stateFromStore) => {
    return {
        cartMessages : stateFromStore.cartMessagesState
    }
}

export default connect (mapStateToProps, null) (CartMessages);