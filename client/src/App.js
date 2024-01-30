import Home from "./pages/home/index.js"
import Women from "./pages/collection/women/index.js"
import Nav from "./components/ui/nav.js"
import Footer from "./components/ui/footer.js"
import Product from "./pages/collection/product/product.js"
import Wishlist from "./pages/wishlist/index.js"
import Cart from "./pages/cart/index.js"
import Checkout from "./pages/checkout/index.js"

import { Route, Routes, useLocation } from "react-router-dom"

function App() {
  return (
    <>      
      <NavbarWrapper/>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/collection/women" element={<Women/>}/>
        <Route path="/collection/:gender/:category/:name/:productID" element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes> 
      <Footer/>
    </>         
  );
}

function NavbarWrapper() {
  let location = useLocation();

  // Define an array of paths where you want to hide the navbar
  const noNavbarPaths = ['/checkout', 'signin, loginin'];

  // Check if the current path should hide the navbar
  const shouldHideNavbar = noNavbarPaths.includes(location.pathname);

  // Render the navbar only if the current path doesn't match the paths where the navbar should be hidden
  if (!shouldHideNavbar) {
    return <Nav />;
  }
  return null;
}

export default App;
