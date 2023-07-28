/* eslint-disable react/no-unescaped-entities */

import DealBoxModal from "../../../components/DealBoxModal";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";
import LocationModal from "../../../components/LocationModal";
import ProductList from "../../../components/ProductList";
import QuickView from "../../../components/QuickView";
import SidebarCategories from "../../../components/SidebarCategories";
import TapToStart from "../../../components/TapToStart";


export default function Catalog() {
  return (
    <>
      <Header />
      <Breadcrumb />
      {/* Breadcrumb Section End */}
      {/* Shop Section Start */}
      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-custome-3">
              <div className="left-box wow fadeInUp">
                <div className="shop-left-sidebar">
                  <SidebarCategories />
                </div>
              </div>
            </div>
            <div className="col-custome-9">
              <div className="show-button">
                <div className="filter-button d-inline-block d-lg-none">
                  <a>
                    <i className="fa-solid fa-filter" /> Filter Menu
                  </a>
                </div>
                <div className="top-filter-menu">
                  <div className="category-dropdown">
                    <h5 className="text-content">Sort By :</h5>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                      >
                        <span>Most Popular</span>{" "}
                        <i className="fa-solid fa-angle-down" />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            id="pop"
                            href=""
                          >
                            Popularity
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="low"
                            href=""
                          >
                            Low - High Price
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="high"
                            href=""
                          >
                            High - Low Price
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="rating"
                            href=""
                          >
                            Average Rating
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="aToz"
                            href=""
                          >
                            A - Z Order
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="zToa"
                            href=""
                          >
                            Z - A Order
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            id="off"
                            href=""
                          >
                            % Off - Hight To Low
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid-option d-none d-md-block">
                    <ul>
                      <li className="three-grid">
                        <a href="">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg"
                            className="blur-up lazyload"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="grid-btn d-xxl-inline-block d-none active">
                        <a href="">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-4.svg"
                            className="blur-up lazyload d-lg-inline-block d-none"
                            alt=""
                          />
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/svg/grid.svg"
                            className="blur-up lazyload img-fluid d-lg-none d-inline-block"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="list-btn">
                        <a href="">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/svg/list.svg"
                            className="blur-up lazyload"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-category">
                  <ul>
                    <li>
                      <a href="">Vegetable</a>
                    </li>
                    <li>
                      <a href="">Fruit</a>
                    </li>
                    <li>
                      <a href="">Fresh</a>
                    </li>
                    <li>
                      <a href="">Milk</a>
                    </li>
                    <li>
                      <a href="">Meat</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                <ProductList />

              </div>
              <nav className="custome-pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href=""
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      <i className="fa-solid fa-angles-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="">
                      1
                    </a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <a className="page-link" href="">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      <i className="fa-solid fa-angles-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Section End */}
      <Footer />
      <QuickView />
      <LocationModal />
      <DealBoxModal />
      {/* Add to cart Modal Start */}
      <div className="add-cart-box">
        <div className="add-iamge">
          <img
            src="../assets/images/cake/pro/1.jpg"
            className="img-fluid blur-up lazyload"
            alt=""
          />
        </div>
        <div className="add-contain">
          <h6>Added to Cart</h6>
        </div>
      </div>
      {/* Add to cart Modal End */}
      <TapToStart />
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
      {/* Bg overlay End */}
    </>

  )
}
