import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Product from "./pages/Product"
import  Cart from "./pages/Cart"
import Order from "./pages/Order"
import  Login from "./pages/Login"
import Register from "./pages/Register";

 
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={  <Home/>}/>
         <Route path="/product" element={ <Product/> }/>
          <Route path="/cart" element={  <Cart/>}/>
           <Route path="/order" element={  <Order/>}/>
            <Route path="/login" element={  <Login/>}/>
            <Route path="/register" element={  <Register/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
