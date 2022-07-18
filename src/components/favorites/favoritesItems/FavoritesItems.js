import './favoritesItems.sass'
import { useDispatch, useSelector } from 'react-redux'
import {useHttp} from '../../../hooks/http.hook.js'
import { deleteFromFav, addToCart } from '../../../actions/actionCreator'
import { useState } from 'react'
import withCard from '../../hoc/withCard'
import Card from '../../blocks/card/Card'

const FavoritesItems = () => {

    const { favorites } = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const {request} = useHttp()

    const deleteItem = (item) => {
        //request
        dispatch(deleteFromFav(item))
    }

    const FavoritesCard = withCard(Card)

    return (
        <div className="favorites">
            {favorites ? 
                favorites.map(item => 
                   <FavoritesCard
                        id={item.id}
                        key={item.id}
                        item={item}
                        icon={"delete"}
                        deleteFromFav={() => deleteItem(item)}
                        addToCart={() => dispatch(addToCart(item.id))}
                   />) : 
                'Здесь пока нет товаров'
            }
        </div>
    )
}

export default FavoritesItems