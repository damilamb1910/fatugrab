

import './App.css';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Nosotros from './Components/nosotros/Nosotros';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shablones from './Components/shablones/Shablones';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="nosotros" element={<Nosotros/>}/>
    <Route path="shablones" element={<Shablones/>}/>
    </Routes>
    </BrowserRouter>
    
    <Footer/>
    </>
    
    
    
  );
}

export default App;
