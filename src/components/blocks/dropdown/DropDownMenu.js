import { NavLink } from 'react-router-dom'
import './dropdownMenu.sass'

//так как названия категорий получаем с сервера, нужно сделать преобразование строк в ссылочный вид
//либо записывать path в самой категории

const DropDownMenu = ({active, links}) => {

    const menuActive = active ? 'dropdown_active' : ''

    return (
        <div className={'dropdown '+menuActive}>
            {links.map((link, i) => {

                const delay =  0.1 + i * 0.04

                return (
                    <NavLink 
                        to={'/catalog/'+link}
                        key={i}
                        style={{'animationDelay': delay+'s'}}
                    >
                        <i className="icon icon-heart"></i>{link}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default DropDownMenu

