// Container Component trực tiếp nhận dữ liệu từ store và truyền xuống ProductItem:
// Import thư viện connect để kết nối lên store và các Presentational Component :
import {connect} from 'react-redux';
import {ProductItem, ProductItemsList} from './ImportedPresentationalComponents';

// Import actions:
import * as actions from '../Actions/actions';

function ProductItemsListContainer(props) {

    var {productItemsListDisplay,
        addToCaddFunctionToItem,
        addToCaddMessageFunctionToItem}=props;

    // Hàm quản lý chức năng hiển thị danh sách sản phẩm truyền
    // Truyền từ Container Component:
    const productItemsListDisplayFunctionToItem = (productItemsList) => {
        var result = null;
        if (productItemsList.length > 0) {
            result = productItemsList.map ((item, index) => {
                return < ProductItem
                            key={index}
                            productItem={item}
                            // Truyền hàm quản lý chức năng thêm sản phẩm vào giỏ hàng 
                            addToCaddFunctionToItem={addToCaddFunctionToItem}
                            // Truyền hàm quản lý chức năng hiển thị thông báo khi thêm sản phẩm
                            addToCaddMessageFunctionToItem={addToCaddMessageFunctionToItem}
                        />
            })
        }
        return result;
    }

    return (
        <div className="sanpham-products-list">
                <ProductItemsList>
                    {/* Truyền xuống ProductItem thông qua hàm :  */}
                    {productItemsListDisplayFunctionToItem(productItemsListDisplay)}
                </ProductItemsList>
        </div>
    )
}

// Hàm nhận dữ liệu từ store và chuyển thành props cho Container Component:
const mapStateToProps = (stateFromStore) => {
    return {
        productItemsListDisplay : stateFromStore.productItemsListDisplayState,
    }
}

// Hàm truyền dữ liệu từ PresentationalComponent lên store => Reducer thông qua Action được đặt trong dispatcher:
const mapDispatchToProps = (dispatch, props) => {
    return {
        // Action quản lý chức năng thêm mới sản phẩm vào giỏ hàng:
        addToCaddFunctionToItem : (addedProductItem) => {
            dispatch (actions.addToCartAction(addedProductItem, 1))
        },

        // Action quản lý chức năng hiển thị thông báo khi thêm sản phẩm:
        addToCaddMessageFunctionToItem : (cartMessage) => {
            dispatch (actions.cartMessagesDisplayAction(cartMessage))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ProductItemsListContainer);