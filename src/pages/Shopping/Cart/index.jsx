import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";

export default function Cart() {
    return (
      <>
     <Header/>
      <Breadcrumb/>
      {/* Cart Section Start */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
                <div className="table-responsive-xl">
                  <table className="table">
                    <tbody>
                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="product-left-thumbnail.html"
                              className="product-image"
                            >
                              <img
                                src="../assets/images/vegetable/product/1.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="product-left-thumbnail.html">
                                    Bell pepper
                                  </a>
                                </li>
                                <li className="text-content">
                                  <span className="text-title">Sold By:</span>{" "}
                                  Fresho
                                </li>
                                <li className="text-content">
                                  <span className="text-title">Quantity</span> - 500
                                  g
                                </li>
                                <li>
                                  <h5 className="text-content d-inline-block">
                                    Price :
                                  </h5>
                                  <span>$35.10</span>
                                  <span className="text-content">$45.68</span>
                                </li>
                                <li>
                                  <h5 className="saving theme-color">
                                    Saving : $20.68
                                  </h5>
                                </li>
                                <li className="quantity-price-box">
                                  <div className="cart_qty">
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="btn qty-left-minus"
                                        data-type="minus"
                                        data-field=""
                                      >
                                        <i
                                          className="fa fa-minus ms-0"
                                          aria-hidden="true"
                                        />
                                      </button>
                                      <input
                                        className="form-control input-number qty-input"
                                        type="text"
                                        name="quantity"
                                        defaultValue={0}
                                      />
                                      <button
                                        type="button"
                                        className="btn qty-right-plus"
                                        data-type="plus"
                                        data-field=""
                                      >
                                        <i
                                          className="fa fa-plus ms-0"
                                          aria-hidden="true"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <h5>Total: $35.10</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h5>
                            $35.10 <del className="text-content">$45.68</del>
                          </h5>
                          <h6 className="theme-color">You Save : $20.68</h6>
                        </td>
                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <div className="quantity-price">
                            <div className="cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus ms-0"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                />
                                <button
                                  type="button"
                                  className="btn qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus ms-0"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$35.10</h5>
                        </td>
                        <td className="save-remove">
                          <h4 className="table-title text-content">Action</h4>
                          <a
                            className="save notifi-wishlist"
                            href="javascript:void(0)"
                          >
                            Save for later
                          </a>
                          <a
                            className="remove close_button"
                            href="javascript:void(0)"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="product-left-thumbnail.html"
                              className="product-image"
                            >
                              <img
                                src="../assets/images/vegetable/product/2.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="product-left-thumbnail.html">Eggplant</a>
                                </li>
                                <li className="text-content">
                                  <span className="text-title">Sold By:</span> Nesto
                                </li>
                                <li className="text-content">
                                  <span className="text-title">Quantity</span> - 250
                                  g
                                </li>
                                <li>
                                  <h5 className="text-content d-inline-block">
                                    Price :
                                  </h5>
                                  <span>$35.10</span>
                                  <span className="text-content">$45.68</span>
                                </li>
                                <li>
                                  <h5 className="saving theme-color">
                                    Saving : $20.68
                                  </h5>
                                </li>
                                <li className="quantity">
                                  <div className="quantity-price">
                                    <div className="cart_qty">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="btn qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus ms-0"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="btn qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus ms-0"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <h5>Total: $52.95</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h5>
                            $52.95 <del className="text-content">$68.49</del>
                          </h5>
                          <h6 className="theme-color">You Save : $15.14</h6>
                        </td>
                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <div className="quantity-price">
                            <div className="cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus ms-0"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                />
                                <button
                                  type="button"
                                  className="btn qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus ms-0"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$52.95</h5>
                        </td>
                        <td className="save-remove">
                          <h4 className="table-title text-content">Action</h4>
                          <a
                            className="save notifi-wishlist"
                            href="javascript:void(0)"
                          >
                            Save for later
                          </a>
                          <a
                            className="remove close_button"
                            href="javascript:void(0)"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="product-left-thumbnail.html"
                              className="product-image"
                            >
                              <img
                                src="../assets/images/vegetable/product/3.png"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="product-left-thumbnail.html">Onion</a>
                                </li>
                                <li className="text-content">
                                  <span className="text-title">Sold By:</span>{" "}
                                  Basket
                                </li>
                                <li className="text-content">
                                  <span className="text-title">Quantity</span> - 750
                                  g
                                </li>
                                <li>
                                  <h5 className="text-content d-inline-block">
                                    Price :
                                  </h5>
                                  <span>$35.10</span>
                                  <span className="text-content">$45.68</span>
                                </li>
                                <li>
                                  <h5 className="saving theme-color">
                                    Saving : $20.68
                                  </h5>
                                </li>
                                <li className="quantity">
                                  <div className="quantity-price">
                                    <div className="cart_qty">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="btn qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus ms-0"
                                            aria-hidden="true"
                                          />
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                        />
                                        <button
                                          type="button"
                                          className="btn qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-plus ms-0"
                                            aria-hidden="true"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <h5>Total: $67.36</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h5>
                            $67.36 <del className="text-content">$96.58</del>
                          </h5>
                          <h6 className="theme-color">You Save : $29.22</h6>
                        </td>
                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <div className="quantity-price">
                            <div className="cart_qty">
                              <div className="input-group">
                                <button
                                  type="button"
                                  className="btn qty-left-minus"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-minus ms-0"
                                    aria-hidden="true"
                                  />
                                </button>
                                <input
                                  className="form-control input-number qty-input"
                                  type="text"
                                  name="quantity"
                                  defaultValue={0}
                                />
                                <button
                                  type="button"
                                  className="btn qty-right-plus"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i
                                    className="fa fa-plus ms-0"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$67.36</h5>
                        </td>
                        <td className="save-remove">
                          <h4 className="table-title text-content">Action</h4>
                          <a
                            className="save notifi-wishlist"
                            href="javascript:void(0)"
                          >
                            Save for later
                          </a>
                          <a
                            className="remove close_button"
                            href="javascript:void(0)"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header">
                  <h3>Cart Total</h3>
                </div>
                <div className="summery-contain">
                  <div className="coupon-cart">
                    <h6 className="text-content mb-2">Coupon Apply</h6>
                    <div className="mb-3 coupon-box input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Coupon Code Here..."
                      />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">$125.65</h4>
                    </li>
                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) 0.00</h4>
                    </li>
                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">$6.90</h4>
                    </li>
                  </ul>
                </div>
                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (USD)</h4>
                    <h4 className="price theme-color">$132.58</h4>
                  </li>
                </ul>
                <div className="button-group cart-button">
                  <ul>
                    <li>
                      <button
                        className="btn btn-animation proceed-btn fw-bold"
                      >
                        Process To Checkout
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-light shopping-button text-dark"
                      >
                        <i className="fa-solid fa-arrow-left-long" />
                        Return To Shopping
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cart Section End */}
      <Footer/>
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
  