import DealBoxModal from "../../../components/DealBoxModal";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";
import LocationModal from "../../../components/LocationModal";
import TapToStart from '../../../components/TapToStart'
import img1 from '../../../assets/images/cake/product/2.png'

export default function Wishlist() {
  return (
    <>
      <Header />
      <Breadcrumb />
      {/* Wishlist Section Start */}
      <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-3 g-2">
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src={img1}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <div className="product-header-top">
                      <button className="btn wishlist-button close_button">
                        <i data-feather="x" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Vegetable</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                    </a>
                    <h6 className="unit mt-1">250 ml</h6>
                    <h5 className="price">
                      <span className="theme-color">$08.02</span>
                      <del>$15.15</del>
                    </h5>
                    <div className="add-to-cart-box bg-white mt-2">
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon bg-light-gray">
                          <i className="fa-solid fa-plus" />
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group bg-white">
                          <button
                            type="button"
                            className="qty-left-minus bg-gray"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="qty-right-plus bg-gray"
                            data-type="plus"
                            data-field=""
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Wishlist Section End */}
      <Footer />
      <LocationModal />
      <DealBoxModal />
      <TapToStart />
      <div className="bg-overlay" />
    </>

  )
}
