import './App.css';
import { Routes, Route } from 'react-router-dom';
import { PRODUCTS } from './static/Index';
import Navbar from "../src/components/navbar/Navbar"
import Banner from "../src/components/banner/Banner"
import Product from './components/products/Product';
import Single from "../src/router/single/Single"
import Home from "../src/router/home/Home"
import Shop from './components/shop/Shop';
import Buds from './components/buds/Buds';
import Regist from './components/regist/Regist';
function App() {
  return (
    <div className="App">
       <Navbar/> 
       <Banner/>
<Routes>
<Route path='/' element={<Home data={PRODUCTS}/>}/>
<Route path='/product/:id' element={<Single/>}/>
</Routes>
       <Shop/> 
       <Buds/>
       <Regist/>
    </div>
  );
}

export default App;