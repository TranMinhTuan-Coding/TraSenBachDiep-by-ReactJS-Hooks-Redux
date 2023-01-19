// import ProductItem from './ProductItem';
export default function ProductItemsList(props) {
    var {children}=props;
    return(
        <div className="sanpham-products-list">
                {/* <ProductItem /> */}
                {children}
        </div>
    )
}