import DealBoxModal from "../../../components/DealBoxModal";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";
import LocationModal from "../../../components/LocationModal";
import QuickView from "../../../components/QuickView";
import TapToStart from "../../../components/TapToStart";

export default function ProductDetail() {
  return (
    <>
<Header/>
  <Breadcrumb/>
  {/* Product Left Sidebar Start */}
  <section className="product-section">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
          <div className="row g-4">
            <div className="col-xl-6 wow fadeInUp">
              <div className="product-left-box">
                <div className="row g-2">
                  <div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
                    <div className="product-main-2 no-arrow">
                      <div>
                        <div className="slider-image">
                          <img
                            src="../assets/images/product/category/1.jpg"
                            id="img-1"
                            data-zoom-image="../assets/images/product/category/1.jpg"
                            className="img-fluid image_zoom_cls-0 blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="slider-image">
                          <img
                            src="../assets/images/product/category/2.jpg"
                            data-zoom-image="../assets/images/product/category/2.jpg"
                            className="img-fluid image_zoom_cls-1 blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="slider-image">
                          <img
                            src="../assets/images/product/category/3.jpg"
                            data-zoom-image="../assets/images/product/category/3.jpg"
                            className="img-fluid image_zoom_cls-2 blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="slider-image">
                          <img
                            src="../assets/images/product/category/4.jpg"
                            data-zoom-image="../assets/images/product/category/4.jpg"
                            className="img-fluid image_zoom_cls-3 blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="slider-image">
                          <img
                            src="../assets/images/product/category/5.jpg"
                            data-zoom-image="../assets/images/product/category/5.jpg"
                            className="img-fluid image_zoom_cls-4 blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="slider-image">
                          <img
                            src="../assets/images/product/category/6.jpg"
                            data-zoom-image="../assets/images/product/category/6.jpg"
                            className="img-fluid image_zoom_cls-5 blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-lg-12 col-md-2 order-xxl-1 order-lg-2 order-md-1">
                    <div className="left-slider-image-2 left-slider no-arrow slick-top">
                      <div>
                        <div className="sidebar-image">
                          <img
                            src="../assets/images/product/category/1.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="sidebar-image">
                          <img
                            src="../assets/images/product/category/2.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="sidebar-image">
                          <img
                            src="../assets/images/product/category/3.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="sidebar-image">
                          <img
                            src="../assets/images/product/category/4.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="sidebar-image">
                          <img
                            src="../assets/images/product/category/5.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="sidebar-image">
                          <img
                            src="../assets/images/product/category/6.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="right-box-contain">
                <h6 className="offer-top">30% Off</h6>
                <h2 className="name">Creamy Chocolate Cake</h2>
                <div className="price-rating">
                  <h3 className="theme-color price">
                    $49.50 <del className="text-content">$58.46</del>{" "}
                    <span className="offer theme-color">(8% off)</span>
                  </h3>
                  <div className="product-rating custom-rate">
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
                    <span className="review">23 Customer Review</span>
                  </div>
                </div>
                <div className="procuct-contain">
                  <p>
                    Lollipop cake chocolate chocolate cake dessert jujubes.
                    Shortbread sugar plum dessert powder cookie sweet brownie.
                    Cake cookie apple pie dessert sugar plum muffin cheesecake.
                  </p>
                </div>
                <div className="product-packege">
                  <div className="product-title">
                    <h4>Weight</h4>
                  </div>
                  <ul className="select-packege">
                    <li>
                      <a href="" className="active">
                        1/2 KG
                      </a>
                    </li>
                    <li>
                      <a href="">1 KG</a>
                    </li>
                    <li>
                      <a href="">1.5 KG</a>
                    </li>
                    <li>
                      <a href="">Red Roses</a>
                    </li>
                    <li>
                      <a href="">With Pink Roses</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="time deal-timer product-deal-timer mx-md-0 mx-auto"
                  id="clockdiv-1"
                  data-hours={1}
                  data-minutes={2}
                  data-seconds={3}
                >
                  <div className="product-title">
                    <h4>Hurry up! Sales Ends In</h4>
                  </div>
                  <ul>
                    <li>
                      <div className="counter d-block">
                        <div className="days d-block">
                          <h5 />
                        </div>
                        <h6>Days</h6>
                      </div>
                    </li>
                    <li>
                      <div className="counter d-block">
                        <div className="hours d-block">
                          <h5 />
                        </div>
                        <h6>Hours</h6>
                      </div>
                    </li>
                    <li>
                      <div className="counter d-block">
                        <div className="minutes d-block">
                          <h5 />
                        </div>
                        <h6>Min</h6>
                      </div>
                    </li>
                    <li>
                      <div className="counter d-block">
                        <div className="seconds d-block">
                          <h5 />
                        </div>
                        <h6>Sec</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="note-box product-packege">
                  <div className="cart_qty qty-box product-qty">
                    <div className="input-group">
                      <button
                        type="button"
                        className="qty-right-plus"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="fa fa-plus" aria-hidden="true" />
                      </button>
                      <input
                        className="form-control input-number qty-input"
                        type="text"
                        name="quantity"
                        defaultValue={0}
                      />
                      <button
                        type="button"
                        className="qty-left-minus"
                        data-type="minus"
                        data-field=""
                      >
                        <i className="fa fa-minus" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-md bg-dark cart-button text-white w-100"
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="buy-box">
                  <a href="wishlist">
                    <i data-feather="heart" />
                    <span>Add To Wishlist</span>
                  </a>
                  <a href="compare">
                    <i data-feather="shuffle" />
                    <span>Add To Compare</span>
                  </a>
                </div>
                <div className="pickup-box">
                  <div className="product-title">
                    <h4>Store Information</h4>
                  </div>
                  <div className="pickup-detail">
                    <h4 className="text-content">
                      Lollipop cake chocolate chocolate cake dessert jujubes.
                      Shortbread sugar plum dessert powder cookie sweet brownie.
                    </h4>
                  </div>
                  <div className="product-info">
                    <ul className="product-info-list product-info-list-2">
                      <li>
                        Type : <a href="">Black Forest</a>
                      </li>
                      <li>
                        SKU : <a href="">SDFVW65467</a>
                      </li>
                      <li>
                        MFG : <a href="">Jun 4, 2022</a>
                      </li>
                      <li>
                        Stock : <a href="">2 Items Left</a>
                      </li>
                      <li>
                        Tags : <a href="">Cake,</a>{" "}
                        <a href="">Backery</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="paymnet-option">
                  <div className="product-title">
                    <h4>Guaranteed Safe Checkout</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/1.svg"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/2.svg"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/3.svg"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/4.svg"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/5.svg"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="product-section-box">
                <ul
                  className="nav nav-tabs custom-nav"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#description"
                      type="button"
                      role="tab"
                      aria-controls="description"
                      aria-defaultValue="true"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#info"
                      type="button"
                      role="tab"
                      aria-controls="info"
                      aria-defaultValue="false"
                    >
                      Additional info
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="care-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#care"
                      type="button"
                      role="tab"
                      aria-controls="care"
                      aria-defaultValue="false"
                    >
                      Care Instuctions
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-defaultValue="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
                <div className="tab-content custom-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="product-description">
                      <div className="nav-desh">
                        <p>
                          Jelly beans carrot cake icing biscuit oat cake gummi
                          bears tart. Lemon drops carrot cake pudding sweet
                          gummi bears. Chocolate cake tart cupcake donut topping
                          liquorice sugar plum chocolate bar. Jelly beans
                          tiramisu caramels jujubes biscuit liquorice chocolate.
                          Pudding toffee jujubes oat cake sweet roll. Lemon
                          drops dessert croissant danish cake cupcake. Sweet
                          roll candy chocolate toffee jelly sweet roll halvah
                          brownie topping. Marshmallow powder candy sesame snaps
                          jelly beans candy canes marshmallow gingerbread pie.
                        </p>
                      </div>
                      <div className="nav-desh">
                        <div className="desh-title">
                          <h5>Organic:</h5>
                        </div>
                        <p>
                          vitae et leo duis ut diam quam nulla porttitor massa
                          id neque aliquam vestibulum morbi blandit cursus risus
                          at ultrices mi tempus imperdiet nulla malesuada
                          pellentesque elit eget gravida cum sociis natoque
                          penatibus et magnis dis parturient montes nascetur
                          ridiculus mus mauris vitae ultricies leo integer
                          malesuada nunc vel risus commodo viverra maecenas
                          accumsan lacus vel facilisis volutpat est velit
                          egestas dui id ornare arcu odio ut sem nulla pharetra
                          diam sit amet nisl suscipit adipiscing bibendum est
                          ultricies integer quis auctor elit sed vulputate mi
                          sit amet mauris commodo quis imperdiet massa tincidunt
                          nunc pulvinar sapien et ligula ullamcorper malesuada
                          proin libero nunc consequat interdum varius sit amet
                          mattis vulputate enim nulla aliquet porttitor lacus
                          luctus accumsan.
                        </p>
                      </div>
                      <div className="banner-contain nav-desh">
                        <img
                          src="../assets/images/vegetable/banner/14.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                        <div className="banner-details p-center banner-b-space w-100 text-center">
                          <div>
                            <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                              SUMMER
                            </h6>
                            <h2>VEGETABLE</h2>
                            <p className="mx-auto mt-1">Save up to 5% OFF</p>
                          </div>
                        </div>
                      </div>
                      <div className="nav-desh">
                        <div className="desh-title">
                          <h5>From The Manufacturer:</h5>
                        </div>
                        <p>
                          Jelly beans shortbread chupa chups carrot cake jelly-o
                          halvah apple pie pudding gingerbread. Apple pie halvah
                          cake tiramisu shortbread cotton candy croissant
                          chocolate cake. Tart cupcake caramels gummi bears
                          macaroon gingerbread fruitcake marzipan wafer.
                          Marzipan dessert cupcake ice cream tootsie roll.
                          Brownie chocolate cake pudding cake powder candy ice
                          cream ice cream cake. Jujubes soufflé chupa chups cake
                          candy halvah donut. Tart tart icing lemon drops
                          fruitcake apple pie.
                        </p>
                        <p>
                          Dessert liquorice tart soufflé chocolate bar apple pie
                          pastry danish soufflé. Gummi bears halvah gingerbread
                          jelly icing. Chocolate cake chocolate bar pudding
                          chupa chups bear claw pie dragée donut halvah. Gummi
                          bears cookie ice cream jelly-o jujubes sweet
                          croissant. Marzipan cotton candy gummi bears lemon
                          drops lollipop lollipop chocolate. Ice cream cookie
                          dragée cake sweet roll sweet roll.Lemon drops cookie
                          muffin carrot cake chocolate marzipan gingerbread
                          topping chocolate bar. Soufflé tiramisu pastry sweet
                          dessert.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="info"
                    role="tabpanel"
                    aria-labelledby="info-tab"
                  >
                    <div className="table-responsive">
                      <table className="table info-table">
                        <tbody>
                          <tr>
                            <td>Specialty</td>
                            <td>Vegetarian</td>
                          </tr>
                          <tr>
                            <td>Ingredient Type</td>
                            <td>Vegetarian</td>
                          </tr>
                          <tr>
                            <td>Brand</td>
                            <td>Lavian Exotique</td>
                          </tr>
                          <tr>
                            <td>Form</td>
                            <td>Bar Brownie</td>
                          </tr>
                          <tr>
                            <td>Package Information</td>
                            <td>Box</td>
                          </tr>
                          <tr>
                            <td>Manufacturer</td>
                            <td>Prayagh Nutri Product Pvt Ltd</td>
                          </tr>
                          <tr>
                            <td>Item part number</td>
                            <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                          </tr>
                          <tr>
                            <td>Net Quantity</td>
                            <td>40.00 count</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="care"
                    role="tabpanel"
                    aria-labelledby="care-tab"
                  >
                    <div className="information-box">
                      <ul>
                        <li>
                          Store cream cakes in a refrigerator. Fondant cakes
                          should be stored in an air conditioned environment.
                        </li>
                        <li>
                          Slice and serve the cake at room temperature and make
                          sure it is not exposed to heat.
                        </li>
                        <li>Use a serrated knife to cut a fondant cake.</li>
                        <li>
                          Sculptural elements and figurines may contain wire
                          supports or toothpicks or wooden skewers for support.
                        </li>
                        <li>
                          Please check the placement of these items before
                          serving to small children.
                        </li>
                        <li>The cake should be consumed within 24 hours.</li>
                        <li>Enjoy your cake!</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div className="review-box">
                      <div className="row g-4">
                        <div className="col-xl-6">
                          <div className="review-title">
                            <h4 className="fw-500">Customer reviews</h4>
                          </div>
                          <div className="d-flex">
                            <div className="product-rating">
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
                            </div>
                            <h6 className="ms-3">4.2 Out Of 5</h6>
                          </div>
                          <div className="rating-box">
                            <ul>
                              <li>
                                <div className="rating-list">
                                  <h5>5 Star</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "68%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      68%
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="rating-list">
                                  <h5>4 Star</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "67%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      67%
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="rating-list">
                                  <h5>3 Star</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "42%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      42%
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="rating-list">
                                  <h5>2 Star</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "30%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      30%
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="rating-list">
                                  <h5>1 Star</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "24%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      24%
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="review-title">
                            <h4 className="fw-500">Add a review</h4>
                          </div>
                          <div className="row g-4">
                            <div className="col-md-6">
                              <div className="form-floating theme-form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Name"
                                />
                                <label htmlFor="name">Your Name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating theme-form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email Address"
                                />
                                <label htmlFor="email">Email Address</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating theme-form-floating">
                                <input
                                  type="url"
                                  className="form-control"
                                  id="website"
                                  placeholder="Website"
                                />
                                <label htmlFor="website">Website</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating theme-form-floating">
                                <input
                                  type="url"
                                  className="form-control"
                                  id="review1"
                                  placeholder="Give your review a title"
                                />
                                <label htmlFor="review1">Review Title</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating theme-form-floating">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a comment here"
                                  id="floatingTextarea2"
                                  style={{ height: 150 }}
                                  defaultValue={""}
                                />
                                <label htmlFor="floatingTextarea2">
                                  Write Your Comment
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="review-title">
                            <h4 className="fw-500">
                              Customer questions &amp; answers
                            </h4>
                          </div>
                          <div className="review-people">
                            <ul className="review-list">
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image">
                                      <img
                                        src="../assets/images/review/1.jpg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <a
                                      className="name"
                                      href=""
                                    >
                                      Tracey
                                    </a>
                                    <div className="date-time">
                                      <h6 className="text-content">
                                        14 Jan, 2022 at 12.58 AM
                                      </h6>
                                      <div className="product-rating">
                                        <ul className="rating">
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i data-feather="star" />
                                          </li>
                                          <li>
                                            <i data-feather="star" />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        Icing cookie carrot cake chocolate cake
                                        sugar plum jelly-o danish. Dragée dragée
                                        shortbread tootsie roll croissant muffin
                                        cake I love gummi bears. Candy canes ice
                                        cream caramels tiramisu marshmallow cake
                                        shortbread candy canes cookie.
                                        <a href="">Reply</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image">
                                      <img
                                        src="../assets/images/review/2.jpg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <a
                                      className="name"
                                      href=""
                                    >
                                      Olivia
                                    </a>
                                    <div className="date-time">
                                      <h6 className="text-content">
                                        01 May, 2022 at 08.31 AM
                                      </h6>
                                      <div className="product-rating">
                                        <ul className="rating">
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i data-feather="star" />
                                          </li>
                                          <li>
                                            <i data-feather="star" />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        Tootsie roll cake danish halvah powder
                                        Tootsie roll candy marshmallow cookie
                                        brownie apple pie pudding brownie
                                        chocolate bar. Jujubes gummi bears I
                                        love powder danish oat cake tart
                                        croissant.
                                        <a href="">Reply</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image">
                                      <img
                                        src="../assets/images/review/3.jpg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <a
                                      className="name"
                                      href=""
                                    >
                                      Gabrielle
                                    </a>
                                    <div className="date-time">
                                      <h6 className="text-content">
                                        21 May, 2022 at 05.52 PM
                                      </h6>
                                      <div className="product-rating">
                                        <ul className="rating">
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i
                                              data-feather="star"
                                              className="fill"
                                            />
                                          </li>
                                          <li>
                                            <i data-feather="star" />
                                          </li>
                                          <li>
                                            <i data-feather="star" />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        Biscuit chupa chups gummies powder I
                                        love sweet pudding jelly beans. Lemon
                                        drops marzipan apple pie gingerbread
                                        macaroon croissant cotton candy pastry
                                        wafer. Carrot cake halvah I love tart
                                        caramels pudding icing chocolate gummi
                                        bears. Gummi bears danish cotton candy
                                        muffin marzipan caramels awesome feel.{" "}
                                        <a href="">Reply</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
          <div className="right-sidebar-box">
            <div className="vendor-box">
              <div className="verndor-contain">
                <div className="vendor-image">
                  <img
                    src="../assets/images/product/vendor.png"
                    className="blur-up lazyload"
                    alt=""
                  />
                </div>
                <div className="vendor-name">
                  <h5 className="fw-500">Noodles Co.</h5>
                  <div className="product-rating mt-1">
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
                    <span>(36 Reviews)</span>
                  </div>
                </div>
              </div>
              <p className="vendor-detail">
                Noodles &amp; Company is an American fast-casual restaurant that
                offers international and American noodle dishes and pasta.
              </p>
              <div className="vendor-list">
                <ul>
                  <li>
                    <div className="address-contact">
                      <i data-feather="map-pin" />
                      <h5>
                        Address:{" "}
                        <span className="text-content">
                          1288 Franklin Avenue
                        </span>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="address-contact">
                      <i data-feather="headphones" />
                      <h5>
                        Contact Seller:{" "}
                        <span className="text-content">(+1)-123-456-789</span>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Trending Product */}
            <div className="pt-25">
              <div className="category-menu">
                <h3>Trending Products</h3>
                <ul className="product-list product-right-sidebar border-0 p-0">
                  <li>
                    <div className="offer-product">
                      <a
                        href="product-left-thumbnail"
                        className="offer-image"
                      >
                        <img
                          src="../assets/images/vegetable/product/23.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="offer-detail">
                        <div>
                          <a href="product-left-thumbnail">
                            <h6 className="name">Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <h6 className="price theme-color">$ 70.00</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="offer-product">
                      <a
                        href="product-left-thumbnail"
                        className="offer-image"
                      >
                        <img
                          src="../assets/images/vegetable/product/24.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="offer-detail">
                        <div>
                          <a href="product-left-thumbnail">
                            <h6 className="name">
                              Dates Medjoul Premium Imported
                            </h6>
                          </a>
                          <span>450 G</span>
                          <h6 className="price theme-color">$ 40.00</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="offer-product">
                      <a
                        href="product-left-thumbnail"
                        className="offer-image"
                      >
                        <img
                          src="../assets/images/vegetable/product/25.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="offer-detail">
                        <div>
                          <a href="product-left-thumbnail">
                            <h6 className="name">Good Life Walnut Kernels</h6>
                          </a>
                          <span>200 G</span>
                          <h6 className="price theme-color">$ 52.00</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-0">
                    <div className="offer-product">
                      <a
                        href="product-left-thumbnail"
                        className="offer-image"
                      >
                        <img
                          src="../assets/images/vegetable/product/26.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="offer-detail">
                        <div>
                          <a href="product-left-thumbnail">
                            <h6 className="name">Apple Red Premium Imported</h6>
                          </a>
                          <span>1 KG</span>
                          <h6 className="price theme-color">$ 80.00</h6>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Banner Section */}
            <div className="ratio_156 pt-25">
              <div className="home-contain">
                <img
                  src="../assets/images/vegetable/banner/8.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="home-detail p-top-left home-p-medium">
                  <div>
                    <h6 className="text-yellow home-banner">Seafood</h6>
                    <h3 className="text-uppercase fw-normal">
                      <span className="theme-color fw-bold">Freshes</span>{" "}
                      Products
                    </h3>
                    <h3 className="fw-light">every hour</h3>
                    <button
                      className="btn btn-animation btn-md fw-bold mend-auto"
                    >
                      Shop Now <i className="fa-solid fa-arrow-right icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Product Left Sidebar End */}
  {/* Releted Product Section Start */}
  <section className="product-list-section section-b-space">
    <div className="container-fluid-lg">
      <div className="title">
        <h2>Related Products</h2>
        <span className="title-leaf">
          <svg className="icon-width">
            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
          </svg>
        </span>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="slider-6_1 product-wrapper">
            <div>
              <div className="product-box-3 wow fadeInUp">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-2">
                      <img
                        src="../assets/images/cake/product/11.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Cake</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">Chocolate Chip Cookies 250 g</h5>
                    </a>
                    <div className="product-rating mt-2">
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
                      <span>(5.0)</span>
                    </div>
                    <h6 className="unit">500 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$10.25</span>{" "}
                      <del>$12.57</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
            <div>
              <div
                className="product-box-3 wow fadeInUp"
                data-wow-delay="0.05s"
              >
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src="../assets/images/cake/product/2.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Vegetable</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">
                        Fresh Bread and Pastry Flour 200 g
                      </h5>
                    </a>
                    <div className="product-rating mt-2">
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
                      <span>(4.0)</span>
                    </div>
                    <h6 className="unit">250 ml</h6>
                    <h5 className="price">
                      <span className="theme-color">$08.02</span>{" "}
                      <del>$15.15</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
            <div>
              <div className="product-box-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src="../assets/images/cake/product/3.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Vegetable</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">
                        Peanut Butter Bite Premium Butter Cookies 600 g
                      </h5>
                    </a>
                    <div className="product-rating mt-2">
                      <ul className="rating">
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
                        <li>
                          <i data-feather="star" />
                        </li>
                      </ul>
                      <span>(2.4)</span>
                    </div>
                    <h6 className="unit">350 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$04.33</span>{" "}
                      <del>$10.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
            <div>
              <div
                className="product-box-3 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src="../assets/images/cake/product/4.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Snacks</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">
                        SnackAmor Combo Pack of Jowar Stick and Jowar Chips
                      </h5>
                    </a>
                    <div className="product-rating mt-2">
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
                      <span>(5.0)</span>
                    </div>
                    <h6 className="unit">570 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.52</span>{" "}
                      <del>$13.62</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
            <div>
              <div className="product-box-3 wow fadeInUp" data-wow-delay="0.2s">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src="../assets/images/cake/product/5.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Snacks</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">
                        Yumitos Chilli Sprinkled Potato Chips 100 g
                      </h5>
                    </a>
                    <div className="product-rating mt-2">
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
                      <span>(3.8)</span>
                    </div>
                    <h6 className="unit">100 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$10.25</span>{" "}
                      <del>$12.36</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
            <div>
              <div
                className="product-box-3 wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src="../assets/images/cake/product/6.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Vegetable</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">
                        Fantasy Crunchy Choco Chip Cookies
                      </h5>
                    </a>
                    <div className="product-rating mt-2">
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
                      <span>(4.0)</span>
                    </div>
                    <h6 className="unit">550 G</h6>
                    <h5 className="price">
                      <span className="theme-color">$14.25</span>{" "}
                      <del>$16.57</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
            <div>
              <div className="product-box-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="product-header">
                  <div className="product-image">
                    <a href="product-left-thumbnail">
                      <img
                        src="../assets/images/cake/product/7.png"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare">
                          <i data-feather="refresh-cw" />
                        </a>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
                        <a href="wishlist" className="notifi-wishlist">
                          <i data-feather="heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-detail">
                    <span className="span-name">Vegetable</span>
                    <a href="product-left-thumbnail">
                      <h5 className="name">
                        Fresh Bread and Pastry Flour 200 g
                      </h5>
                    </a>
                    <div className="product-rating mt-2">
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
                      <span>(3.8)</span>
                    </div>
                    <h6 className="unit">1 Kg</h6>
                    <h5 className="price">
                      <span className="theme-color">$12.68</span>{" "}
                      <del>$14.69</del>
                    </h5>
                    <div className="add-to-cart-box bg-white">
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
      </div>
    </div>
  </section>
  {/* Releted Product Section End */}
  <Footer/>
  <QuickView/>
  <LocationModal/>
  <DealBoxModal/>
  {/* Add to cart Modal Start */}
  <div className="add-cart-box">
    <div className="add-iamge">
      <img src="../assets/images/cake/pro/1.jpg" className="img-fluid" alt="" />
    </div>
    <div className="add-contain">
      <h6>Added to Cart</h6>
    </div>
  </div>
  {/* Add to cart Modal End */}
  <TapToStart/>
  {/* Sticky Cart Box Start */}
  <div className="sticky-bottom-cart">
    <div className="container-fluid-lg">
      <div className="row">
        <div className="col-12">
          <div className="cart-content">
            <div className="product-image">
              <img
                src="../assets/images/product/category/1.jpg"
                className="img-fluid blur-up lazyload"
                alt=""
              />
              <div className="content">
                <h5>Creamy Chocolate Cake</h5>
                <h6>
                  $32.96<del className="text-danger">$96.00</del>
                  <span>55% off</span>
                </h6>
              </div>
            </div>
            <div className="selection-section">
              <div className="form-group mb-0">
                <select id="input-state" className="form-control form-select">
                  <option defaultValue="" disabled="">
                    Choose Weight...
                  </option>
                  <option>1/2 KG</option>
                  <option>1 KG</option>
                  <option>1.5 KG</option>
                </select>
              </div>
              <div className="cart_qty qty-box product-qty m-0">
                <div className="input-group h-100">
                  <button
                    type="button"
                    className="qty-left-minus"
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-minus" aria-hidden="true" />
                  </button>
                  <input
                    className="form-control input-number qty-input"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                  />
                  <button
                    type="button"
                    className="qty-right-plus"
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-plus" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="add-btn">
              <a
                className="btn theme-bg-color text-white wishlist-btn"
                href="wishlist"
              >
                <i className="fa fa-bookmark" /> Wishlist
              </a>
              <a className="btn theme-bg-color text-white" href="cart">
                <i className="fas fa-shopping-cart" /> Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Sticky Cart Box End */}
  {/* Bg overlay Start */}
  <div className="bg-overlay" />
  {/* Bg overlay End */}
</>

  )
}
