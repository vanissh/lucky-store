import './catalogItems.sass'
import { useDispatch, useSelector } from 'react-redux';
import {useHttp} from '../../../hooks/http.hook.js'
import { useEffect, useState } from 'react';
import { addToCart, addToFav, deleteFromFav } from '../../../actions/actionCreator';
import withCard from '../../hoc/withCard';
import Card from '../../blocks/card/Card';

const CatalogItems = () => {

    const {activeCategory, products, productsLoadingStatus} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const {request} = useHttp()

    const addItem = (item) => {
        //request
        //добавление на сервер
        dispatch(addToFav(item))
    }

    const deleteItem = (item) => {
        //request
         //удаление с сервера
        dispatch(deleteFromFav(item))
    }

    const CatalogCard = withCard(Card)

    return (
        <div className="catalog__items">
            {products && activeCategory.label && products[activeCategory.label].map(item => 
                <CatalogCard 
                    key={item.id}
                    icon={"heart"}
                    item={item}
                    addToFav={() => addItem(item)}
                    deleteFromFav={() => deleteItem(item)}
                    addToCart={() => dispatch(addToCart(item.id))}
                />)
            }
        </div>
    )
}

export default CatalogItems