import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";

export default function OrderTracking() {
    return (
      <>
   <Header/>
     <Breadcrumb/>
      {/* Order Detail Section Start */}
      <section className="order-detail">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-6">
              <div className="order-image">
                <img
                  src="../assets/images/vegetable/product/6.png"
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-6">
              <div className="row g-sm-4 g-3">
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i data-feather="package" className="text-content" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Tracking Code</h5>
                      <h2 className="theme-color">MH4285UY</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i data-feather="truck" className="text-content" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Service</h5>
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/brand-name.svg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="info" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Package Info</h5>
                      <h4>Letter</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="crosshair" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">From</h5>
                      <h4>STR. Smardan 9, Bucuresti, romania.</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="map-pin" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Destination</h5>
                      <h4>Flokagata 24, 105 Reykjavik, Iceland</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="order-details-contain">
                    <div className="order-tracking-icon">
                      <i className="text-content" data-feather="calendar" />
                    </div>
                    <div className="order-details-name">
                      <h5 className="text-content">Estimated Time</h5>
                      <h4>7 Frb, 05:05pm</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 overflow-hidden">
                  <ol className="progtrckr">
                    <li className="progtrckr-done">
                      <h5>Order Processing</h5>
                      <h6>05:43 AM</h6>
                    </li>
                    <li className="progtrckr-done">
                      <h5>Pre-Production</h5>
                      <h6>01:21 PM</h6>
                    </li>
                    <li className="progtrckr-done">
                      <h5>In Production</h5>
                      <h6>Processing</h6>
                    </li>
                    <li className="progtrckr-todo">
                      <h5>Shipped</h5>
                      <h6>Pending</h6>
                    </li>
                    <li className="progtrckr-todo">
                      <h5>Delivered</h5>
                      <h6>Pending</h6>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Order Detail Section End */}
      {/* Order Table Section Start */}
      <section className="order-table-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table order-tab-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Order Placed</td>
                      <td>26 Sep 2021</td>
                      <td>12:00 AM</td>
                      <td>California</td>
                    </tr>
                    <tr>
                      <td>Preparing to Ship</td>
                      <td>03 Oct 2021</td>
                      <td>12:00 AM</td>
                      <td>Canada</td>
                    </tr>
                    <tr>
                      <td>Shipped</td>
                      <td>04 Oct 2021</td>
                      <td>12:00 AM</td>
                      <td>America</td>
                    </tr>
                    <tr>
                      <td>Delivered</td>
                      <td>10 Nav 2021</td>
                      <td>12:00 AM</td>
                      <td>Germany</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Order Table Section End */}
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
  