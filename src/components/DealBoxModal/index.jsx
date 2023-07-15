import img1 from '../../assets/images/vegetable/product/10.png';
import img2 from '../../assets/images/vegetable/product/11.png';
import img3 from '../../assets/images/vegetable/product/12.png';
import img4 from '../../assets/images/vegetable/product/13.png';


export default function DealBoxModal() {
    return (
        <>
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
                                            <a href="shop-left-sidebar" className="deal-image">
                                                <img
                                                    src={img1}
                                                    className="blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-left-sidebar" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-2">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar" className="deal-image">
                                                <img
                                                    src={img2}
                                                    className="blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-left-sidebar" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-3">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar" className="deal-image">
                                                <img
                                                    src={img3}
                                                    className="blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-left-sidebar" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="list-1">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar" className="deal-image">
                                                <img
                                                    src={img4}
                                                    className="blur-up lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-left-sidebar" className="deal-contain">
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
        </>
    )
}
