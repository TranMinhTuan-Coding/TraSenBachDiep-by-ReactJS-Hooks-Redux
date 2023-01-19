// Import các Presentational Components và thay bằng Container Components:
import {ProductItemsListContainer, CartContainer, Header, SecondHeader, CartMessages, Footer} from './ImportedAllComponents';

export default function SanphamApp() {
    return (
        <div>
        <Header />

        <section className="sanpham-main-content-container">
          <div className="sanpham-main-content">
                < SecondHeader />
            <div className="sanpham-main-content-bottom">

                <CartMessages />

                {/* < ProductItemsList /> */}
                < ProductItemsListContainer />

            </div>
          </div>
                {/* < Cart /> */}
                < CartContainer />
        </section>

          <Footer />
      </div>
    )
}
