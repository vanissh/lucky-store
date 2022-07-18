import './favoritesItems.sass'
import { useDispatch, useSelector } from 'react-redux'
import {useHttp} from '../../../hooks/http.hook.js'
import { addToCart } from '../../../slices/cartSlice'
import { deleteFromFav } from '../../../slices/favSlice'
import { useState } from 'react'
import withCard from '../../hoc/withCard'
import Card from '../../blocks/card/Card'
import Empty from '../../blocks/empty/Empty'

const FavoritesItems = () => {

    const { favorites } = useSelector(state => state.favReducer)
    const dispatch = useDispatch()
    const {request} = useHttp()

    const deleteItem = (item) => {
        //request
        dispatch(deleteFromFav(item.id))
    }

    const FavoritesCard = withCard(Card)

    return (
        <div className="favorites">
            {favorites.length ? 
                favorites.map(item => 
                   <FavoritesCard
                        id={item.id}
                        key={item.id}
                        item={item}
                        icon={"delete"}
                        deleteFromFav={() => deleteItem(item)}
                        addToCart={() => dispatch(addToCart(item.id))}
                   />) : 
                <Empty text={'Здесь пока нет товаров'} styles={{'gridColumn': '2/4'}}/>
            }
        </div>
    )
}

export default FavoritesItems