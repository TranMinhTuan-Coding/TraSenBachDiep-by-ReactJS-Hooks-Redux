export default function Footer() {
    return (
        <footer className="sanpham-footer-container">
          <div className="sanpham-footer">
            <div className="sanpham-footer-content-1">
              <div className="sanpham-footer-content-1-informations">
                <p>7999.999.999</p>
                <p>trasenbachdiep@gmail.com</p>
                <p>Số 12, Quảng An, Hồ Tây, Hà Nội</p>
              </div>
            </div>
            <div className="sanpham-footer-content-2">
              <p className="sanpham-footer-content-2-title">VỀ CHÚNG TÔI</p>
              <div className="sanpham-footer-content-2-informations">
                <a href>Giới thiệu</a>
                <br />
                <a href>Sản phẩm</a>
                <br />
                <a href>Tin tức</a>
              </div>
            </div>
            <div className="sanpham-footer-content-3">
              <p className="sanpham-footer-content-3-title">LIÊN HỆ</p>
              <div className="sanpham-footer-content-3-imagine-links">
                <a href><div className="youtube-image-link" /></a>
                <a href><div className="insta-image-link" /></a>
                <a href><div className="facebook-image-link" /></a>
              </div>
              <div className="sanpham-footer-content-3-p">
                <p>Copyright © 2010-2020</p>
                <p>Tra Sen Bach Diep. All rights reserved.</p> 
              </div>
            </div>
          </div>
        </footer>
    )
}