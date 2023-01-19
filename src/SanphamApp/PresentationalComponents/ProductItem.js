import * as messages from '../../ReduxModules/Constants/cartMessages';

export default function ProductItem(props) {
    var {productItem,
        addToCaddFunctionToItem,
        addToCaddMessageFunctionToItem}=props;

        // Hàm quản lý chức năng thêm sản phẩm vào giỏ hàng đồng thời hiển thị thông báo:
        const addToCaddFunction = (addedProductItem) => {
            addToCaddFunctionToItem(addedProductItem);
            addToCaddMessageFunctionToItem(messages.MESSAGE_ADD_TO_CART_SUCCESS);
        }

    return (
        <div 
            // className="sanpham-product-1"
            className={productItem.className}
            style={{
                backgroundImage: `url(${productItem.picture})`
            }}
        >
            <p className="sanpham-product-1-name">{productItem.name}</p>
            <p className="sanpham-product-1-price">{productItem.price} Vnđ</p>
            <button 
                className="sanpham-product-1-add-to-cart-button"
                onClick={() => addToCaddFunction(productItem)}
            >
                Thêm vào giỏ hàng !
            </button>
            <button 
                // className="sanpham-product-1-infor-button"
                className={productItem.buttonClassName}
            >
                Thông tin sản phẩm
            </button>
            <div 
                // className="sanpham-product-1-infor"
                className={productItem.inforClassName}
            >
                <p>{productItem.productInfor}</p>
            </div>
        </div>
    )
}
