import {BiHomeAlt2, BiCategoryAlt} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
export default function MobileMenu() {
    return (
        <>
            <div className="mobile-menu d-md-none d-block mobile-cart">
                <ul>
                    <li className="active">
                        <NavLink to="/">
                            <BiHomeAlt2 />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="mobile-category">
                        <NavLink to="">
                            <BiCategoryAlt />
                            <span>Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="search" className="search-box">
                            <i className="iconly-Search icli" />
                            <span>Search</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="wishlist" className="notifi-wishlist">
                            <i className="iconly-Heart icli" />
                            <span>My Wish</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="cart">
                            <i className="iconly-Bag-2 icli fly-cate" />
                            <span>Cart</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
