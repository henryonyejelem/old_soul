import Home from "./pages/home/index.js"
import Women from "./pages/collection/women/index.js"
import Men from "./pages/collection/men/index.js"
import Nav from "./components/ui/nav.js"
import Footer from "./components/ui/footer.js"
import Product from "./pages/product/product.js"
import Shop from "./pages/shop/index.js"
import Wishlist from "./pages/wishlist/index.js"
import Cart from "./pages/cart/index.js"
import Checkout from "./pages/checkout/index.js"
import SignIn from "./pages/signIn/index.js"
import SignUp from "./pages/signUp/index.js"

import { Route, Routes, useLocation } from "react-router-dom"

function App() {
  return (
    <>      
      <NavbarWrapper/>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/shop" element={<Shop/>}/>  
        <Route path="/collection/women" element={<Women/>}/>
        <Route path="/collection/men" element={<Men/>}/>
        <Route path="/collection/:gender/:category/:name/:productID" element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        
      </Routes> 
      <FooterWrapper/>
    </>         
  );
}

function NavbarWrapper() {
  let location = useLocation();

  // Define an array of paths where you want to hide the navbar
  const noNavbarPaths = ['/checkout', '/signin', '/signup'];

  // Check if the current path should hide the navbar
  const shouldHideNavbar = noNavbarPaths.includes(location.pathname);

  // Render the navbar only if the current path doesn't match the paths where the navbar should be hidden
  if (!shouldHideNavbar) {
    return <Nav />;
  }
  return null;
}

function FooterWrapper() {
  let location = useLocation();

  // Define an array of paths where you want to hide the navbar
  const noNavbarPaths = ['/signin', '/signup'];

  // Check if the current path should hide the navbar
  const shouldHideNavbar = noNavbarPaths.includes(location.pathname);

  // Render the navbar only if the current path doesn't match the paths where the navbar should be hidden
  if (!shouldHideNavbar) {
    return <Footer />;
  }
  return null;
}

export default App;
