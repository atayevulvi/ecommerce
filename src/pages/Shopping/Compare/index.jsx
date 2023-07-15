import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";

export default function Compare() {
    return (
      <>
    <Header/>
     <Breadcrumb/>
      {/* Compare Section Start */}
      <section className="compare-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table compare-table">
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail.html"
                        >
                          Daily Shine Shampoo
                        </a>
                      </td>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail.html"
                        >
                          Intence Repair Shampoo
                        </a>
                      </td>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail.html"
                        >
                          Anti Dandruff Solution
                        </a>
                      </td>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail.html"
                        >
                          Repair &amp; Shine Shampoo
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Images</th>
                      <td>
                        <a
                          href="product-left-thumbnail.html"
                          className="compare-image"
                        >
                          <img
                            src="../assets/images/inner-page/compare/1.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                      </td>
                      <td>
                        <a
                          href="product-left-thumbnail.html"
                          className="compare-image"
                        >
                          <img
                            src="../assets/images/inner-page/compare/2.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                      </td>
                      <td>
                        <a
                          href="product-left-thumbnail.html"
                          className="compare-image"
                        >
                          <img
                            src="../assets/images/inner-page/compare/3.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                      </td>
                      <td>
                        <a
                          href="product-left-thumbnail.html"
                          className="compare-image"
                        >
                          <img
                            src="../assets/images/inner-page/compare/4.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Hair Type</th>
                      <td className="text-content">Normal</td>
                      <td className="text-content">Oily</td>
                      <td className="text-content">Dry</td>
                      <td className="text-content">Normal</td>
                    </tr>
                    <tr>
                      <th>Item Form</th>
                      <td className="text-content">Gel</td>
                      <td className="text-content">Liquid</td>
                      <td className="text-content">Gel</td>
                      <td className="text-content">Gel</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td className="price text-content">$20.23</td>
                      <td className="price text-content">$26.90</td>
                      <td className="price text-content">$12.23</td>
                      <td className="price text-content">$15.85</td>
                    </tr>
                    <tr>
                      <th>Availability</th>
                      <td className="text-content">In Stock</td>
                      <td className="text-content">In Stock</td>
                      <td className="text-content">In Stock</td>
                      <td className="text-content">In Stock</td>
                    </tr>
                    <tr>
                      <th>Rating</th>
                      <td>
                        <div className="compare-rating">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(20 Raring)</span>
                        </div>
                      </td>
                      <td>
                        <div className="compare-rating">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(25 Raring)</span>
                        </div>
                      </td>
                      <td>
                        <div className="compare-rating">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                          </ul>
                          <span className="text-content">(50 Raring)</span>
                        </div>
                      </td>
                      <td>
                        <div className="compare-rating">
                          <ul className="rating">
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" className="fill" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                            <li>
                              <i data-feather="star" />
                            </li>
                          </ul>
                          <span className="text-content">(30 Raring)</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td className="text-content">5.00kg</td>
                      <td className="text-content">1.00kg</td>
                      <td className="text-content">0.75kg</td>
                      <td className="text-content">0.50kg</td>
                    </tr>
                    <tr>
                      <th>Purchase</th>
                      <td>
                        <button
                          className="btn btn-animation btn-sm w-100"
                        >
                          Add To Cart
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-animation btn-sm w-100"
                        >
                          Add To Cart
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-animation btn-sm w-100"
                        >
                          Add To Cart
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-animation btn-sm w-100"
                        >
                          Add To Cart
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th />
                      <td>
                        <a
                          href="javascript:void(00"
                          className="text-content remove_column"
                        >
                          <i className="fa-solid fa-trash-can me-2" /> Remove
                        </a>
                      </td>
                      <td>
                        <a
                          href="javascript:void(00"
                          className="text-content remove_column"
                        >
                          <i className="fa-solid fa-trash-can me-2" /> Remove
                        </a>
                      </td>
                      <td>
                        <a
                          href="javascript:void(00"
                          className="text-content remove_column"
                        >
                          <i className="fa-solid fa-trash-can me-2" /> Remove
                        </a>
                      </td>
                      <td>
                        <a
                          href="javascript:void(00"
                          className="text-content remove_column"
                        >
                          <i className="fa-solid fa-trash-can me-2" /> Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Compare Section End */}
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
  