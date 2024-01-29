import Home from "./pages/home/index.js"
import Women from "./pages/collection/women/index.js"
import Nav from "./components/ui/nav.js"
import Footer from "./components/ui/footer.js"
import Product from "./pages/collection/product/product.js"
import Wishlist from "./pages/wishlist/index.js"
import Cart from "./pages/cart/index.js"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/collection/women" element={<Women/>}/>
        <Route path="/collection/:gender/:category/:name/:productID" element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes> 
      <Footer/>
    </>
         
  );
}

export default App;
