/* eslint-disable react/no-unescaped-entities */

import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";


export default function Catalog() {
  return (
    <>
   <Header/>
   <Breadcrumb/>
    {/* Breadcrumb Section End */}
    {/* Shop Section Start */}
    <section className="section-b-space shop-section">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-custome-3">
            <div className="left-box wow fadeInUp">
              <div className="shop-left-sidebar">
                <ul
                  className="nav nav-pills mb-3 custom-nav-tab"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-vegetables"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-vegetable"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Vegetables &amp; Fruit{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-beverages"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-beverages"
                      type="button"
                      role="tab"
                      aria-controls="pills-beverages"
                      aria-selected="false"
                    >
                      Beverages{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-meat"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-meat"
                      type="button"
                      role="tab"
                      aria-controls="pills-meat"
                      aria-selected="false"
                    >
                      Meats &amp; Seafood{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                        alt=""
                        className="blur-up lazyload"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-dairy"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-dairy"
                      type="button"
                      role="tab"
                      aria-controls="pills-dairy"
                      aria-selected="true"
                    >
                      Breakfast &amp; Dairy{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-frozen"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-frozen"
                      type="button"
                      role="tab"
                      aria-controls="pills-frozen"
                      aria-selected="false"
                    >
                      Frozen Foods{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-snack"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-snack"
                      type="button"
                      role="tab"
                      aria-controls="pills-snack"
                      aria-selected="false"
                    >
                      Biscuits &amp; Snacks{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-grocery"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-grocery"
                      type="button"
                      role="tab"
                      aria-controls="pills-grocery"
                      aria-selected="true"
                    >
                      Grocery &amp; Staples{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-wines"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-wines"
                      type="button"
                      role="tab"
                      aria-controls="pills-wines"
                      aria-selected="false"
                    >
                      Wines &amp; Alcohol Drinks{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/drink.svg"
                        className="blur-up lazyload"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-milk"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-milk"
                      type="button"
                      role="tab"
                      aria-controls="pills-milk"
                      aria-selected="false"
                    >
                      Milk &amp; Dairies{" "}
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                        alt=""
                        className="blur-up lazyload"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-pet"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-pet"
                      type="button"
                      role="tab"
                      aria-controls="pills-pet"
                      aria-selected="false"
                    >
                      Pet Foods{" "}
                      <img
                        className="blur-up lazyload"
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
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
                          href="javascript:void(0)"
                        >
                          Popularity
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="low"
                          href="javascript:void(0)"
                        >
                          Low - High Price
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="high"
                          href="javascript:void(0)"
                        >
                          High - Low Price
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="rating"
                          href="javascript:void(0)"
                        >
                          Average Rating
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="aToz"
                          href="javascript:void(0)"
                        >
                          A - Z Order
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="zToa"
                          href="javascript:void(0)"
                        >
                          Z - A Order
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="off"
                          href="javascript:void(0)"
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
                      <a href="javascript:void(0)">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="grid-btn d-xxl-inline-block d-none active">
                      <a href="javascript:void(0)">
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
                      <a href="javascript:void(0)">
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
                    <a href="javascript:void(0)">Vegetable</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Fruit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Fresh</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Milk</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Meat</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
              <div>
                <div className="product-box-3 h-100 wow fadeInUp">
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Cheesy feet cheesy grin brie. Mascarpone cheese and wine
                        hard cheese the big cheese everyone loves smelly cheese
                        macaroni cheese croque monsieur.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.05s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Feta taleggio croque monsieur swiss manchego cheesecake
                        dolcelatte jarlsberg. Hard cheese danish fontina boursin
                        melted cheese fondue.
                      </p>
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
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Lancashire hard cheese parmesan. Danish fontina mozzarella
                        cream cheese smelly cheese cheese and wine cheesecake
                        dolcelatte stilton. Cream cheese parmesan who moved my
                        cheese when the cheese comes out everybody's happy cream
                        cheese red leicester ricotta edam.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.15s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Cheddar cheddar pecorino hard cheese hard cheese cheese
                        and biscuits bocconcini babybel. Cow goat paneer cream
                        cheese fromage cottage cheese cauliflower cheese
                        jarlsberg.
                      </p>
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
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fantasy Crunchy Choco Chip Cookies
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Bavarian bergkase smelly cheese swiss cut the cheese
                        lancashire who moved my cheese manchego melted cheese. Red
                        leicester paneer cow when the cheese comes out everybody's
                        happy croque monsieur goat melted cheese port-salut.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/cake/product/7.png"
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Melted cheese babybel chalk and cheese. Port-salut
                        port-salut cream cheese when the cheese comes out
                        everybody's happy cream cheese hard cheese cream cheese
                        red leicester.
                      </p>
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
              <div>
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Squirty cheese cottage cheese cheese strings. Red
                        leicester paneer danish fontina queso lancashire when the
                        cheese comes out everybody's happy cottage cheese paneer.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.35s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Swiss ricotta cauliflower cheese squirty cheese cheesy
                        grin camembert de normandie airedale edam. Squirty cheese
                        babybel cheesecake the big cheese cauliflower cheese hard
                        cheese cheese and biscuits cheese and wine.
                      </p>
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
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Boursin the big cheese cheeseburger. Jarlsberg smelly
                        cheese chalk and cheese gouda blue castello monterey jack
                        swiss boursin. Halloumi cheesy feet mozzarella red
                        leicester paneer boursin who moved my cheese croque
                        monsieur.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.45s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Halloumi mozzarella monterey jack smelly cheese emmental
                        bocconcini when the cheese comes out everybody's happy
                        pecorino. Cut the cheese stilton danish fontina cheesy
                        grin rubber cheese smelly cheese roquefort paneer.
                      </p>
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
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fantasy Crunchy Choco Chip Cookies
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Manchego cow cheddar. Port-salut roquefort hard cheese
                        babybel when the cheese comes out everybody's happy brie
                        dolcelatte croque monsieur.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.55s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
                        <img
                          src="../assets/images/cake/product/7.png"
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Roquefort say cheese the big cheese ricotta chalk and
                        cheese when the cheese comes out everybody's happy brie
                        lancashire.
                      </p>
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
              <div>
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                        <h5 className="name">
                          Fresh Bread and Pastry Flour 200 g
                        </h5>
                      </a>
                      <p className="text-content mt-1 mb-2 product-content">
                        Lancashire when the cheese comes out everybody's happy
                        blue castello halloumi boursin stinking bishop pecorino
                        fromage frais.
                      </p>
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
                <div
                  className="product-box-3 h-100 wow fadeInUp"
                  data-wow-delay="0.65s"
                >
                  <div className="product-header">
                    <div className="product-image">
                      <a href="product-left-thumbnail.html">
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
                            href="javascript:void(0)"
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
                          <a href="compare.html">
                            <i data-feather="refresh-cw" />
                          </a>
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Wishlist"
                        >
                          <a href="wishlist.html" className="notifi-wishlist">
                            <i data-feather="heart" />
                          </a>
                        </li>
                      </ul>
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
                      <p className="text-content mt-1 mb-2 product-content">
                        Say cheese cheese and biscuits feta. Queso bocconcini
                        danish fontina camembert de normandie brie airedale
                        ricotta feta. Pecorino edam gouda caerphilly croque
                        monsieur red leicester cheese triangles caerphilly.
                      </p>
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
            </div>
            <nav className="custome-pagination">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="javascript:void(0)"
                    tabIndex={-1}
                    aria-disabled="true"
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
        </div>
      </div>
    </section>
    {/* Shop Section End */}
    <Footer/>
    {/* Quick View Modal Box Start */}
    <div
      className="modal fade theme-modal view-modal"
      id="view"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header p-0">
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
            <div className="row g-sm-4 g-2">
              <div className="col-lg-6">
                <div className="slider-image">
                  <img
                    src="../assets/images/product/category/1.jpg"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-sidebar-modal">
                  <h4 className="title-name">
                    Peanut Butter Bite Premium Butter Cookies 600 g
                  </h4>
                  <h4 className="price">$36.99</h4>
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
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <span className="ms-2">8 Reviews</span>
                    <span className="ms-2 text-danger">
                      6 sold in last 16 hours
                    </span>
                  </div>
                  <div className="product-detail">
                    <h4>Product Details :</h4>
                    <p>
                      Candy canes sugar plum tart cotton candy chupa chups sugar
                      plum chocolate I love. Caramels marshmallow icing dessert
                      candy canes I love soufflé I love toffee. Marshmallow pie
                      sweet sweet roll sesame snaps tiramisu jelly bear claw.
                      Bonbon muffin I love carrot cake sugar plum dessert bonbon.
                    </p>
                  </div>
                  <ul className="brand-list">
                    <li>
                      <div className="brand-box">
                        <h5>Brand Name:</h5>
                        <h6>Black Forest</h6>
                      </div>
                    </li>
                    <li>
                      <div className="brand-box">
                        <h5>Product Code:</h5>
                        <h6>W0690034</h6>
                      </div>
                    </li>
                    <li>
                      <div className="brand-box">
                        <h5>Product Type:</h5>
                        <h6>White Cream Cake</h6>
                      </div>
                    </li>
                  </ul>
                  <div className="select-size">
                    <h4>Cake Size :</h4>
                    <select className="form-select select-form-size">
                      <option selected="">Select Size</option>
                      <option value="1.2">1/2 KG</option>
                      <option value={0}>1 KG</option>
                      <option value="1.5">1/5 KG</option>
                      <option value="red">Red Roses</option>
                      <option value="pink">With Pink Roses</option>
                    </select>
                  </div>
                  <div className="modal-button">
                    <button
                      className="btn btn-md add-cart-button icon"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                    >
                      View More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Quick View Modal Box End */}
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
