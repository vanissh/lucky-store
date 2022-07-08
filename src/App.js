import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/blocks/navBar/NavBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Catalog from './pages/Catalog';
import first from './static/slider/first_bg.png'
import second from './static/slider/second_bg.png'
import third from './static/slider/third_bg.png'

//context для передачи links в компонент dropdown
//пока пишу заглушку
//links = ['Мягкие игрушки', 'Украшения', 'Канцелярия', 'Для дома', 'Для животных']
function App() {

  const links = ['Мягкие игрушки', 'Украшения', 'Канцелярия', 'Для дома', 'Для животных']
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

  return (
    <Router>
      <NavBar links={links}/>
      <Routes>
        <Route path={'/'} exact element={<Home info={sliderInfo}/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/favorite'} element={<Favorite/>}/>
        <Route path={'/catalog'} element={<Catalog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
