import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import DropDownMenu from '../dropdown/DropDownMenu'
import logo from '../../../static/icons/logo.png'
import './navBar.sass'

const NavBar = ({links}) => {

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
            <div className="container">
                <div className="nav__content">
                    <NavLink to="/" className="nav__logo">
                        <img src={logo} alt="logo" className="nav__img"/>
                    </NavLink>
                    <div className="nav__menu">
                        <div 
                            className="nav__menu-wrapper"
                            onMouseLeave={toDisable}
                        >
                            <NavLink  
                                to="/"
                                onMouseEnter={toActive}
                            >
                                Каталог 
                                <i className={'icon icon-arrow-down '+rotate}></i>
                            </NavLink>
                            <DropDownMenu active={active} links={links}/>
                        </div>
                        <NavLink to="#gallery">Галерея</NavLink>
                        <NavLink to="#hits">Хит продаж</NavLink>
                        <NavLink to="#contacts">Контакты</NavLink>
                    </div>
                    <div className="nav__icons">
                        <NavLink to="/search">
                            <i className="icon icon-search"></i>
                        </NavLink>
                        <NavLink to="/favorite">
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