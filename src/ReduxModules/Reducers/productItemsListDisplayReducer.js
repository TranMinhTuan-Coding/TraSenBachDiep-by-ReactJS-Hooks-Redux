// Import ảnh sản phẩm:
import {product1, product2, product3, product4, product5} from './Pictures/productPicturesImported';

var initialState = [
    {
        id: 1,
        name: 'Chè Thái Nguyên Đặc Sản TC3 - 500g',
        price: 90000,
        picture: product1,
        productInfor: 'Trà Tân Cương Đặc Sản TC3 được sản xuất từ nguyên liệu 1 búp 3 lá trà Thái Nguyên của vùng chè tân cương thái nguyên nổi tiếng. Trà được trồng và chăm sóc theo tiêu chuẩn VietGAP, chế biến theo đúng quy trình kỹ thuật tạo nên hương vị đặc trưng của trà xứ Thái. Nước xanh vàng sánh, ngọt hậu tạo cho người thưởng thức dư âm khó quên.',
        className: 'sanpham-product-1',
        buttonClassName: 'sanpham-product-1-infor-button',
        inforClassName : 'sanpham-product-1-infor',

        quantity : 15
    },
    {
        id: 2,
        name: 'Chè Thái Nguyên Đặc Biệt TC2 - 500g',
        price: 125000,
        picture: product2,
        productInfor: 'Trà Tân Cương Đặc Biệt TC2 được sản xuất bằng nguyên liếp búp chè thái nguyên 1 tôm 3 lá của vùng trà tân cương nổi tiếng .được hái và chế biến theo đúng quy trình kỹ thuật truyền thống với bí quyết chỉnh lửa của các nghệ nhân bản xứ và cách lấy hương bằng lửa tạo ra hương thơm thanh khiết độc nhất vô nhị của sản phẩm.',
        className: 'sanpham-product-2',
        buttonClassName: 'sanpham-product-2-infor-button',
        inforClassName : 'sanpham-product-2-infor',

        quantity : 15
    },
    {
        id: 3,
        name: 'Chè Tân Cương Tước Thiệt - 500g',
        price: 90000,
        picture: product3,
        productInfor: 'Trà Tước Thiệt là dòng sản phẩm trà ngon, với quy cách đóng túi hút chân không đơn giản, lạ mắt, phù hợp với quý khách hàng yêu thích sự đơn giản nhưng vẫn đảm bảo chất lượng trà ngon. Với nguyên liệu là 100% búp chè thái nguyên được trồng và chăm sóc theo tiêu chuẩn VietGAP tại vùng trà Tân Cương Thái Nguyên, cánh cong như lưỡi chim sẻ, khi pha nước xanh vàng óng thoang thoảng hương cốm. Trà Tân Cương Tước Thiệt đạt đầy đủ 4 yếu tố: Sắc - Nước - Vị - Thần, chất lượng không trà nào có thể sánh được',
        className: 'sanpham-product-3',
        buttonClassName: 'sanpham-product-3-infor-button',
        inforClassName : 'sanpham-product-3-infor',

        quantity : 15
    },
    {
        id: 4,
        name: 'Chè Tân Cương Thượng Hạng - 500g',
        price: 150000,
        picture: product4,
        productInfor: 'Trà Tân Cương Thượng Hạng nguyên liệu được trồng và chăm sóc theo tiêu chuẩn VietGAP với quy trình trồng chè hữu cơ tại vùng chè đặc sản Tân Cương Thái Nguyên. Tiếp đó những búp chè 1 tôm 2 lá được hái và chế biến theo đúng quy trình kỹ thuật truyền thống với bí quyết chỉnh lửa của các nghệ nhân bản xứ và cách lấy hương bằng lửa tạo ra hương thơm thanh khiết độc nhất vô nhị của sản phẩm',
        className: 'sanpham-product-4',
        buttonClassName: 'sanpham-product-4-infor-button',
        inforClassName : 'sanpham-product-4-infor',

        quantity : 15
    },
    {
        id: 5,
        name: 'Trà Ô Long Cao Cấp - 200g',
        price: 150000,
        picture: product5,
        productInfor: 'Đặc tính của trà ô long do công ty cung cấp là không sử dụng bất kì hương hay phụ gia nào trong quá trình chế biến, mà đó là mùi hương đặc trưng sẵn có của trà Oolong. Để có được thành phẩm trà Oolong thì từ nguyên liệu tươi thu hái về phải mất hơn 30 tiếng qua nhiều công đoạn khác nhau như: làm héo, quay thơm, diệt men, định hình và cuối cùng là đóng gói tạo ra nhiều chủng loại trà Oolong theo thị hiếu người tiêu dùng.',
        className: 'sanpham-product-5',
        buttonClassName: 'sanpham-product-5-infor-button',
        inforClassName : 'sanpham-product-5-infor',

        quantity : 15
    }
];

const productItemsListDisplayReducer = (state=initialState, action) => {
    switch (action.type) {
    
        default: return [...state];
    }
}
export default productItemsListDisplayReducer;