

import './App.css';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Nosotros from './Components/nosotros/Nosotros';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shablones from './Components/shablones/Shablones';
import Remeras from './Components/remeras/Remeras';
import CartContext from './context/CartContext';
import Cart from './Components/cart/Cart';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <CartContext>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
    <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
    <Route path="/fatugrab" element={<Home/>}/>
    <Route path="/nosotros" element={<Nosotros/>}/>
    <Route path="/shablones" element={<Shablones/>}/>
    <Route path="/remeras" element={<Remeras/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </CartContext>
    
    
    
    </>
    
    
    
  );
}

export default App;
