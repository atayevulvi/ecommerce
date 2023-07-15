import DealBoxModal from "../../../components/DealBoxModal";
import Breadcrumb from "../../../components/Layout/Breadcrumb";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";
import LocationModal from "../../../components/LocationModal";
import TapToStart from "../../../components/TapToStart";

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
                          href="product-left-thumbnail"
                        >
                          Daily Shine Shampoo
                        </a>
                      </td>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail"
                        >
                          Intence Repair Shampoo
                        </a>
                      </td>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail"
                        >
                          Anti Dandruff Solution
                        </a>
                      </td>
                      <td>
                        <a
                          className="text-title"
                          href="product-left-thumbnail"
                        >
                          Repair &amp; Shine Shampoo
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Images</th>
                      <td>
                        <a
                          href="product-left-thumbnail"
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
                          href="product-left-thumbnail"
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
                          href="product-left-thumbnail"
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
                          href="product-left-thumbnail"
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
      <LocationModal/>
      <DealBoxModal/>
      <TapToStart/>
      {/* Bg overlay Start */}
      <div className="bg-overlay" />
      {/* Bg overlay End */}
    </>
    
    )
  }
  