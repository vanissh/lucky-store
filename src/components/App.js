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
import first from '../assets/static/slider/first_bg.png'
import second from '../assets/static/slider/second_bg.png'
import third from '../assets/static/slider/third_bg.png'

import { useDispatch } from 'react-redux';
import { useHttp } from '../hooks/http.hook.js'
import { useEffect } from 'react';
import { fetchProducts } from '../actions/actionCreator'

function App() {

  const sliderInfo = [
    {
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: first
    },
    {
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: second
    },
    {
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: third
    }
  ]

  const dispatch = useDispatch()
  const {request} = useHttp()

  const modifyData = (data) => {
    const newData = {}

    data.forEach(item => {
      newData[item.name] = item.items
    })

    return newData
  }

  useEffect(() => {
      dispatch(fetchProducts(request, modifyData))
  }, [])

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path={'/'} exact element={<Home info={sliderInfo}/>}/>
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
