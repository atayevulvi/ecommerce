import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";

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
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/2.png"
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
                    <a href="product-left-thumbnail.html">
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/3.png"
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">
                        Peanut Butter Bite Premium Butter Cookies 600 g
                      </h5>
                    </a>
                    <h6 className="unit mt-1">350 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$04.33</span>
                      <del>$10.36</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/4.png"
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
                    <span className="span-name">Snacks</span>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">
                        SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                      </h5>
                    </a>
                    <h6 className="unit mt-1">570 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.52</span>
                      <del>$13.62</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/5.png"
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
                    <span className="span-name">Snacks</span>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">
                        Yumitos Chilli Sprinkled Potato Chips 100 g
                      </h5>
                    </a>
                    <h6 className="unit mt-1">100 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$10.25</span>
                      <del>$12.36</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/6.png"
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                    </a>
                    <h6 className="unit mt-1">550 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$14.25</span>
                      <del>$16.57</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/7.png"
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                    </a>
                    <h6 className="unit mt-1">1 Kg</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.68</span>
                      <del>$14.69</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/2.png"
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
                    <a href="product-left-thumbnail.html">
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/3.png"
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">
                        Peanut Butter Bite Premium Butter Cookies 600 g
                      </h5>
                    </a>
                    <h6 className="unit mt-1">350 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$04.33</span>
                      <del>$10.36</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/4.png"
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
                    <span className="span-name">Snacks</span>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">
                        SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                      </h5>
                    </a>
                    <h6 className="unit mt-1">570 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.52</span>
                      <del>$13.62</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/5.png"
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
                    <span className="span-name">Snacks</span>
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">
                        Yumitos Chilli Sprinkled Potato Chips 100 g
                      </h5>
                    </a>
                    <h6 className="unit mt-1">100 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$10.25</span>
                      <del>$12.36</del>
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
            <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
              <div className="product-box-3 h-100">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail.html">
                      <img
                        src="../assets/images/cake/product/6.png"
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
                    <a href="product-left-thumbnail.html">
                      <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                    </a>
                    <h6 className="unit mt-1">550 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$14.25</span>
                      <del>$16.57</del>
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
      {/* Location Modal Start */}
      <div
        className="modal location-modal fade theme-modal"
        id="locationModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="location-list">
                <div className="search-input">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Your Area"
                  />
                  <i className="fa-solid fa-magnifying-glass" />
                </div>
                <div className="disabled-box">
                  <h6>Select a Location</h6>
                </div>
                <ul className="location-select custom-height">
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Arizona</h6>
                      <span>Min: $150</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>California</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Colorado</h6>
                      <span>Min: $140</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Florida</h6>
                      <span>Min: $160</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Georgia</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Kansas</h6>
                      <span>Min: $170</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Minnesota</h6>
                      <span>Min: $120</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>New York</h6>
                      <span>Min: $110</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location Modal End */}
      {/* Deal Box Modal Start */}
      <div
        className="modal fade theme-modal deal-modal"
        id="deal-box"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p className="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="deal-offer-box">
                <ul className="deal-offer-list">
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/10.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/11.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/12.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="../assets/images/vegetable/product/13.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Box Modal End */}
      {/* Tap to top start */}
      <div className="theme-option">
        <div className="setting-box">
          <button className="btn setting-button">
            <i className="fa-solid fa-gear" />
          </button>
          <div className="theme-setting-2">
            <div className="theme-box">
              <ul>
                <li>
                  <div className="setting-name">
                    <h4>Color</h4>
                  </div>
                  <div className="theme-setting-button color-picker">
                    <form className="form-control">
                      <label htmlFor="colorPick" className="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="colorPick"
                        defaultValue="#0da487"
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>
                <li>
                  <div className="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div className="theme-setting-button">
                    <button className="btn btn-2 outline" id="darkButton">
                      Dark
                    </button>
                    <button className="btn btn-2 unline" id="lightButton">
                      Light
                    </button>
                  </div>
                </li>
                <li>
                  <div className="setting-name">
                    <h4>RTL</h4>
                  </div>
                  <div className="theme-setting-button rtl">
                    <button className="btn btn-2 rtl-unline">LTR</button>
                    <button className="btn btn-2 rtl-outline">RTL</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="back-to-top">
          <a id="back-to-top" href="#">
            <i className="fas fa-chevron-up" />
          </a>
        </div>
      </div>
      {/* Tap to top end */}
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
      {/* Bg overlay End */}
    </>

  )
}
