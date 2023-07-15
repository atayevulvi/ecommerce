import Breadcrumb from "../../components/Layout/Breadcrumb";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";

/* eslint-disable react/no-unescaped-entities */
export default function BlogDetail() {
  return (
    <>
      <Header />
     <Breadcrumb/>
      {/* Blog Details Section Start */}
      <section className="blog-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none">
              <div className="left-sidebar-box">
                <div className="left-search-box">
                  <div className="search-box">
                    <input
                      type="search"
                      className="form-control"
                      id="exampleFormControlInput4"
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
            <div className="col-xxl-9 col-xl-8 col-lg-7 ratio_50">
              <div className="blog-detail-image rounded-3 mb-4">
                <img
                  src="../assets/images/inner-page/blog/1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
                <div className="blog-image-contain">
                  <ul className="contain-list">
                    <li>backpack</li>
                    <li>life style</li>
                    <li>organic</li>
                  </ul>
                  <h2>Agriculture Conference Harvest 2022 in Paris</h2>
                  <ul className="contain-comment-list">
                    <li>
                      <div className="user-list">
                        <i data-feather="user" />
                        <span>Caroline</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-list">
                        <i data-feather="calendar" />
                        <span>April 19, 2022</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-list">
                        <i data-feather="message-square" />
                        <span>82 Comment</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-detail-contain">
                <p>
                  <span className="first">S</span> hotgun approach message the
                  initiative so can I just chime in on that one. Make sure to
                  include in your wheelhouse bells and whistles, and touch base
                  slow-walk our commitment nor what's the status on the deliverables
                  for eow?. Create spaces to explore whatâ€™s next commitment to the
                  cause , or UI, for get buy-in but draw a line in the sand, and pig
                  in a python we've got kpis for that. Message the initiative value
                  prop, please use "solutionise" instead of solution ideas! :) i am
                  dead inside. Quick sync 4-blocker. Driving the initiative forward
                  flesh that out.
                </p>
                <p>
                  Let's unpack that later everyone thinks the soup tastes better
                  after theyâ€™ve pissed in it pivot, re-inventing the wheel, and
                  it's not hard guys. Market-facing pushback back of the net, for
                  pro-sumer software let's see if we can dovetail these two projects
                  but turn the crank for they have downloaded gmail and seems to be
                  working for now. This is not the hill i want to die on you better
                  eat a reality sandwich before you walk back in that boardroom land
                  the plane yet exposing new ways to evolve our design language
                  design thinking nor poop, so can you put it into a banner that is
                  not alarming, but eye catching and not too giant. That is a good
                  problem to have dog and pony show we're ahead of the curve on that
                  one.
                </p>
                <p>
                  {" "}
                  Waste of resources can you run this by clearance? hot johnny
                  coming through driving the initiative forward our competitors are
                  jumping the shark. Unlock meaningful moments of relaxation. Copy
                  and paste from stack overflow a tentative event rundown is
                  attached for your reference, including other happenings on the day
                  you are most welcome to join us beforehand for a light lunch we
                  would also like to invite you to other activities on the day,
                  including the interim and closing panel discussions on the
                  intersection of businesses and social innovation, and on building
                  a stronger social innovation eco-system respectively what are the
                  expectations, on-brand but completeley fresh we can't hear you.
                </p>
                <div className="blog-details-quote">
                  <h3>
                    Adipisicing elit Qui ipsam natus aspernatur quaerat impedit
                    eveniet ipsum dolor
                  </h3>
                  <h5>- Denny Dose</h5>
                </div>
                <p>
                  Agile currying favour pulling teeth collaboration through advanced
                  technlogy. Everyone thinks the soup tastes better after theyâ€™ve
                  pissed in it can you put it on my calendar?. Low-hanging fruit.
                  Data-point blue sky yet first-order optimal strategies shotgun
                  approach. Land it in region. Idea shower prairie dogging a set of
                  certitudes based on deductions founded on false premise nor
                  three-martini lunch. Baseline. Run it up the flag pole big boy
                  pants so game-plan, and it just needs more cowbell pixel pushing,
                  but we need to make the new version clean and sexy. Back of the
                  net we need a recap by eod, cob or whatever comes first for we
                  need evergreen content.
                </p>
                <p className="mb-0">
                  We need to harvest synergy effects land it in region nor time to
                  open the kimono, but we need to touch base off-line before we fire
                  the new ux experience. Moving the goalposts. Lean into that
                  problem we need to get all stakeholders up to speed and in the
                  right place. Get all your ducks in a row this proposal is a
                  win-win situation which will cause a stellar paradigm shift, and
                  produce a multi-fold increase in deliverables or dunder mifflin
                  for high-level nor gain alignment into the weeds. Open door
                  policy. Goalposts player-coach but quick win, so effort made was a
                  lot for game-plan in an ideal world commitment to the cause .
                  Service as core &amp;innovations as power makes our brand meeting
                  assassin core competencies run it up the flagpole, ping the boss
                  and circle back but zoom meeting at 2:30 today.
                </p>
              </div>
              <div className="comment-box overflow-hidden">
                <div className="leave-title">
                  <h3>Comments</h3>
                </div>
                <div className="user-comment-box">
                  <ul>
                    <li>
                      <div className="user-box border-color">
                        <div className="reply-button">
                          <i className="fa-solid fa-reply" />
                          <span className="theme-color">Reply</span>
                        </div>
                        <div className="user-iamge">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <div className="user-name">
                            <h6>30 Jan, 2022</h6>
                            <h5 className="text-content">Glenn Greer</h5>
                          </div>
                        </div>
                        <div className="user-contain">
                          <p>
                            "This proposal is a win-win situation which will cause a
                            stellar paradigm shift, and produce a multi-fold
                            increase in deliverables a better understanding"
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="user-box border-color">
                        <div className="reply-button">
                          <i className="fa-solid fa-reply" />
                          <span className="theme-color">Reply</span>
                        </div>
                        <div className="user-iamge">
                          <img
                            src="../assets/images/inner-page/user/2.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <div className="user-name">
                            <h6>30 Jan, 2022</h6>
                            <h5 className="text-content">Glenn Greer</h5>
                          </div>
                        </div>
                        <div className="user-contain">
                          <p>
                            "Yeah, I think maybe you do. Right, gimme a Pepsi free.
                            Of course, the Enchantment Under The Sea Dance they're
                            supposed to go to this, that's where they kiss for the
                            first time. You'll find out. Are you sure about this
                            storm?"
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="li-padding">
                      <div className="user-box">
                        <div className="reply-button">
                          <i className="fa-solid fa-reply" />
                          <span className="theme-color">Reply</span>
                        </div>
                        <div className="user-iamge">
                          <img
                            src="../assets/images/inner-page/user/3.jpg"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <div className="user-name">
                            <h6>30 Jan, 2022</h6>
                            <h5 className="text-content">Glenn Greer</h5>
                          </div>
                        </div>
                        <div className="user-contain">
                          <p>
                            "Cheese slices goat cottage cheese roquefort cream
                            cheese pecorino cheesy feet when the cheese comes out
                            everybody's happy"
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="leave-box">
                <div className="leave-title mt-0">
                  <h3>Leave Comment</h3>
                </div>
                <div className="leave-comment">
                  <div className="comment-notes">
                    <p className="text-content mb-4">
                      Your email address will not be published. Required fields are
                      marked
                    </p>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-4 col-lg-12 col-sm-6">
                      <div className="blog-input">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-12 col-sm-6">
                      <div className="blog-input">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput2"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-12 col-sm-6">
                      <div className="blog-input">
                        <input
                          type="url"
                          className="form-control"
                          id="exampleFormControlInput3"
                          placeholder="Enter URL"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="blog-input">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={4}
                          placeholder="Comments"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-check d-flex mt-4 p-0">
                    <input
                      className="checkbox_animated"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-content"
                      htmlFor="flexCheckDefault"
                    >
                      <span className="color color-1">
                        {" "}
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </label>
                  </div>
                  <button className="btn btn-animation ms-xxl-auto mt-xxl-0 mt-3 btn-md fw-bold">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}
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
