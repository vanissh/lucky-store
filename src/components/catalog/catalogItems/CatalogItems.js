import './catalogItems.sass'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart } from '../../../slices/cartSlice';
import { addToFav, deleteFromFav} from '../../../slices/favSlice';
import { addUserFavorites } from '../../../slices/userSlice';
import withCard from '../../hoc/withCard';
import Card from '../../blocks/card/Card';
import Empty from '../../blocks/empty/Empty';

const CatalogItems = () => {

    const {activeCategory, products, productsLoadingStatus} = useSelector(state => state.productReducer)
    const {favorites} = useSelector(state => state.favReducer)
    const {isAuth} = useSelector(state => state.favReducer)
    const dispatch = useDispatch()

    const addItem = (item) => {
        // isAuth && dispatch(addUserFavorites([item]))
        dispatch(addToFav(item))
    }

    const getItemStatus = id => !!favorites.find(item => item.id === id)

    const deleteItem = (item) => {
        // isAuth && dispatch(deleteUserFavorites([item]))
        dispatch(deleteFromFav(item.id))
    }

    const CatalogCard = withCard(Card)

    return (
        <div className="catalog__items">
            {products && activeCategory.label ? products[activeCategory.label].map(item => 
                <CatalogCard 
                    key={item.id}
                    status={getItemStatus(item.id)}
                    icon='heart'
                    item={item}
                    addToFav={() => addItem(item)}
                    deleteFromFav={() => deleteItem(item)}
                    addToCart={() => dispatch(addToCart(item))}
                />) :
                <Empty text={'Здесь пока нет товаров'}/>
            }
        </div>
    )
}

export default CatalogItems