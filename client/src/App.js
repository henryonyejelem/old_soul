import Home from "./pages/home/index.js"
import Women from "./pages/collection/women/index.js"
import Nav from "./components/ui/nav.js"
import Footer from "./components/ui/footer.js"


import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/collection/women" element={<Women/>}/>      
      </Routes> 
      <Footer/>
    </>
         
  );
}

export default App;
