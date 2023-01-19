import styles from './Lienhe.module.css';

export default function Lienhe() {
    return (
        <section className={styles.page_container}>
        <div className={styles.main_page}>
          <div className={styles.main_page_background_imagine}>
          </div>

          <div className={styles.cotact_box}>
            <p className={styles.cotact_input_box_title}>LIÊN HỆ VỚI CHÚNG TÔI</p>
            <div className={styles.input_box}>
              <input className={styles.input_box_1_3} type="text" placeholder="Họ tên" />
              <input className={styles.input_box_1_3} type="text" placeholder="Email" />
              <input className={styles.input_box_1_3} type="tel" placeholder="Số điện thoại" />
              <input type="text" placeholder="Nội dung" />    
            </div>
            <button>
              Gửi
            </button>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_content_1}>
              <div className={styles.footer_content_1_informations}>
                <p>7999.999.999</p>
                <p>trasenbachdiep@gmail.com</p>
                <p>Số 12, Quảng An, Hồ Tây, Hà Nội</p>
              </div>
            </div>
            <div className={styles.footer_content_2}>
              <p className={styles.footer_content_2_title}>VỀ CHÚNG TÔI</p>
              <div className={styles.footer_content_2_informations}>
                <a href>Giới thiệu</a>
                <br />
                <a href>Sản phẩm</a>
                <br />
                <a href>Tin tức</a>
              </div>
            </div>
            <div className={styles.footer_content_3}>
              <p className={styles.footer_content_3_title}>LIÊN HỆ</p>
              <div className={styles.footer_content_3_imagine_links}>
                {/* <a href><img src="./Footer/youtube-imagine-link.png" alt="youtube-imagine-link.png" /></a> */}
                {/* <a href><img src="./Footer/insta-imagine-link.png" alt="insta-imagine-link.png" /></a> */}
                {/* <a href><img src="./Footer/facebook-imagine-link.png" alt="facebook-imagine-link.png" /></a> */}

                <a href><div className={styles.youtube_image_link} /></a>
                <a href><div className={styles.insta_image_link} /></a>
                <a href><div className={styles.facebook_image_link} /></a>
              </div>
              <div className={styles.footer_content_3_p}>
                <p>Copyright © 2010-2020</p>
                <p>Tra Sen Bach Diep. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}