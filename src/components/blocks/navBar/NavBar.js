import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import DropDownMenu from '../dropdown/DropDownMenu'
import logo from '../../../assets/static/icons/logo.png'
import './navBar.sass'

const NavBar = () => {

    const [active, setActive] = useState(false)
    const [rotate, setRotate] = useState(null)

    const toActive = () => {
        setActive(true)
        setRotate('rotate')
    }

    const toDisable = () => {
        setActive(false)
        setRotate('')
    }

    return (
        <nav className="nav">
            <div className='container'>
                <div className="nav__content">
                    <NavLink to="/" className="nav__logo">
                        <img src={logo} alt="logo" className="nav__img"/>
                    </NavLink>
                    <div className="nav__menu">
                        <div 
                            className="nav__menu-wrapper"
                            onMouseLeave={toDisable}
                        >
                            <NavLink  className="nav__link"
                                to="/catalog"
                                onMouseEnter={toActive}
                            >
                                Каталог 
                                <i className={'icon icon-arrow-down '+rotate}></i>
                            </NavLink>
                            <DropDownMenu active={active}/>
                        </div>
                        <a className="nav__link" href="#gallery">Галерея</a>
                        <a className="nav__link" href="#hits">Хит продаж</a>
                        <a className="nav__link" href="#contacts">Контакты</a>
                    </div>
                    <div className="nav__icons">
                        <NavLink to="/search">
                            <i className="icon icon-search"></i>
                        </NavLink>
                        <NavLink to="/favorites">
                            <i className="icon icon-heart"></i>
                            <span className="nav__icons-total">0</span>
                        </NavLink>
                        <NavLink to="/cart">
                            <i className="icon icon-cart"></i>
                            <span className="nav__icons-total">0</span>
                        </NavLink>
                        <NavLink to="/profile">
                            <i className="icon icon-user"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar