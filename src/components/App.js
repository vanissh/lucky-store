import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './blocks/navBar/NavBar';
import Footer from './blocks/footer/Footer'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Favorites from '../pages/Favorites';
import Catalog from '../pages/Catalog';
import ScrollToTop from './ScrollToTop';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../slices/productSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchProducts())
  }, [])

  return (
    <Router>
      <ScrollToTop/>
      <NavBar/>
      <Routes>
        <Route path={'/'} exact element={<Home/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/favorites'} element={<Favorites/>}/>
        <Route path={'/catalog/*'} element={<Catalog/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
