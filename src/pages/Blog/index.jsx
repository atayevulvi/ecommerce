import Breadcrumb from "../../components/Layout/Breadcrumb";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";

/* eslint-disable react/no-unescaped-entities */
export default function Blog() {
  return (
    <>
      <Header />
     <Breadcrumb/>
      {/* Blog Section Start */}
      <section className="blog-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
              <div className="row g-4 ratio_65">
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/1.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Mark J. Speight</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>one pot creamy mediterranean chicken pasta cream.</h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/2.jpg"
                          className="bg-img"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>rebeus hagrid</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>Crispy Frozen Vegetable is the on the Tempura.</h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.1s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/3.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <label>
                        <i className="fa-solid fa-bolt-lightning" /> popular
                      </label>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Chris C. Hall</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          How to start regrowing green onions and other vegetables.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.15s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/4.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>James M. Martin</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>Starting a vegetable garden: the basics.</h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/5.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Cecil M. Levis</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          Adapt this simple pasta salad to whatever vegetable.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.25s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/1.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Mary R. Hernandez</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          With chefs idle and vegetables rotting, China's virus-hit.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.3s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/2.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Cheryl D. Moser</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          Turn that bowl of pasta into a supercharged veggie
                          vehicle.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.35s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/3.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Mina M. Short</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>Health, care and skin on the for your organic.</h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/4.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Marie S. Santiago</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          Fresh organicsm, brand, fresh and picnic place awesome.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.45s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/3.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <label>
                        <i className="fa-solid fa-bolt-lightning" /> popular
                      </label>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Mark J. Speight</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          With chefs idle and vegetables rotting, China's virus-hit.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.5s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/4.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>Chris C. Hall</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          Vegina good quality special liquide fesh vagitables.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="blog-box wow fadeInUp" data-wow-delay="0.55s">
                    <div className="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/blog/5.jpg"
                          className="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <i data-feather="clock" /> <span>25 Feg, 2022</span>
                        </span>
                        <span className="super">
                          <i data-feather="user" /> <span>James M. Martin</span>
                        </span>
                      </div>
                      <a href="blog-detail.html">
                        <h3>
                          How to freeze fresh vegetables while preserving their best
                          qualities.
                        </h3>
                      </a>
                      <button
                        className="blog-button"
                      >
                        Read More
                        <i className="fa-solid fa-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="custome-pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="javascript:void(0)"
                      tabIndex={-1}
                    >
                      <i className="fa-solid fa-angles-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <a className="page-link" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      <i className="fa-solid fa-angles-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
              <div className="left-sidebar-box wow fadeInUp">
                <div className="left-search-box">
                  <div className="search-box">
                    <input
                      type="search"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Search...."
                    />
                  </div>
                </div>
                <div
                  className="accordion left-accordion-box"
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Recent Post
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body pt-0">
                        <div className="recent-post-box">
                          <div className="recent-box">
                            <a href="blog-detail.html" className="recent-image">
                              <img
                                src="../assets/images/inner-page/blog/1.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="recent-detail">
                              <a href="blog-detail.html">
                                <h5 className="recent-name">
                                  Green onion knife and salad placed
                                </h5>
                              </a>
                              <h6>
                                25 Jan, 2022 <i data-feather="thumbs-up" />
                              </h6>
                            </div>
                          </div>
                          <div className="recent-box">
                            <a href="blog-detail.html" className="recent-image">
                              <img
                                src="../assets/images/inner-page/blog/2.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="recent-detail">
                              <a href="blog-detail.html">
                                <h5 className="recent-name">
                                  Health and skin for your organic
                                </h5>
                              </a>
                              <h6>
                                25 Jan, 2022 <i data-feather="thumbs-up" />
                              </h6>
                            </div>
                          </div>
                          <div className="recent-box">
                            <a href="blog-detail.html" className="recent-image">
                              <img
                                src="../assets/images/inner-page/blog/3.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="recent-detail">
                              <a href="blog-detail.html">
                                <h5 className="recent-name">
                                  Organics mix masala fresh &amp; soft
                                </h5>
                              </a>
                              <h6>
                                25 Jan, 2022 <i data-feather="thumbs-up" />
                              </h6>
                            </div>
                          </div>
                          <div className="recent-box">
                            <a href="blog-detail.html" className="recent-image">
                              <img
                                src="../assets/images/inner-page/blog/4.jpg"
                                className="img-fluid blur-up lazyload"
                                alt=""
                              />
                            </a>
                            <div className="recent-detail">
                              <a href="blog-detail.html">
                                <h5 className="recent-name">
                                  Fresh organics brand and picnic
                                </h5>
                              </a>
                              <h6>
                                25 Jan, 2022 <i data-feather="thumbs-up" />
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Category
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body p-0">
                        <div className="category-list-box">
                          <ul>
                            <li>
                              <a href="blog-list.html">
                                <div className="category-name">
                                  <h5>Latest Recipes</h5>
                                  <span>10</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list.html">
                                <div className="category-name">
                                  <h5>Diet Food</h5>
                                  <span>6</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list.html">
                                <div className="category-name">
                                  <h5>Low calorie Items</h5>
                                  <span>8</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list.html">
                                <div className="category-name">
                                  <h5>Cooking Method</h5>
                                  <span>9</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list.html">
                                <div className="category-name">
                                  <h5>Dairy Free</h5>
                                  <span>12</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list.html">
                                <div className="category-name">
                                  <h5>Vegetarian Food</h5>
                                  <span>10</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Product Tags
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body pt-0">
                        <div className="product-tags-box">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Fruit Cutting</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Meat</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">organic</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">cake</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">pick fruit</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">backery</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">organix food</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Most Expensive Fruit</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Trending Products
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body">
                        <ul className="product-list product-list-2 border-0 p-0">
                          <li>
                            <div className="offer-product">
                              <a
                                href="shop-left-sidebar.html"
                                className="offer-image"
                              >
                                <img
                                  src="../assets/images/vegetable/product/23.png"
                                  className="blur-up lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="shop-left-sidebar.html">
                                    <h6 className="name">
                                      Meatigo Premium Goat Curry
                                    </h6>
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
                                href="shop-left-sidebar.html"
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
                                  <a href="shop-left-sidebar.html">
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
                          <li className="mb-0">
                            <div className="offer-product">
                              <a
                                href="shop-left-sidebar.html"
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
                                  <a href="shop-left-sidebar.html">
                                    <h6 className="name">
                                      Apple Red Premium Imported
                                    </h6>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
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
