import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './dropdownMenu.sass'

import { setActiveCategory, fetchCategories} from '../../../slices/productSlice'
import { useDispatch, useSelector } from 'react-redux';

const DropDownMenu = ({active}) => {

    const menuActive = active ? 'dropdown_active' : ''

    const { categories } = useSelector(state => state.productReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className={'dropdown '+menuActive}>
            {categories.map((link, i) => {

                const delay =  0.1 + i * 0.04

                return (
                    <NavLink 
                        to={'/catalog/'+link.label}
                        key={i}
                        style={{'animationDelay': delay+'s'}}
                        onClick={() => dispatch(setActiveCategory(link))}
                    >
                        <i className="icon icon-heart"></i>{link.name}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default DropDownMenu

