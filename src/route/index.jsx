import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Cart from '../pages/Shopping/Cart';
import Catalog from '../pages/Shopping/Catalog';
import Checkout from '../pages/Shopping/Checkout'
import Compare from '../pages/Shopping/Compare'
import OrderSuccess from '../pages/Shopping/OrderSuccess'
import ProductDetail from '../pages/Shopping/ProductDetail'
import Shop from '../pages/Shopping/Shop'
import Account from '../pages/User/Account'
import OrderTracking from '../pages/User/OrderTracking'
import SignIn from '../pages/User/SignIn'
import SignUp from '../pages/User/SignUp'
import Wishlist from '../pages/User/Wishlist'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/blog/:slug",
        element: <BlogDetail />
    },
    {
        path: "/cart",
        element: <Cart/> 
    },
    {
        path: "/catalog",
        element: <Catalog/>
    },
    {
        path: "/checkout",
        element: <Checkout/>
    },
    {
        path: "/compare",
        element: <Compare/>
    },
    {
        path: "/order-success",
        element: <OrderSuccess/>
    },
    {
        path: "/products/:slug",
        element: <ProductDetail/>
    },
    {
        path: "/shop",
        element: <Shop/>
    },
    {
        path: "/account",
        element: <Account/>
    },
    {
        path: "/order-tracking",
        element: <OrderTracking/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
    
    {
        path: "/sign-up",
        element:<SignUp/> 
    },
    
    {
        path: "/wishlist",
        element: <Wishlist/>
    },

]);