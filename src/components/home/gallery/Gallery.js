import './gallery.sass'
import lamp from '../../../assets/static/gallery/lamp.jpg'
import jewelry from '../../../assets/static/gallery/jewelry.jpg'
import pillow from '../../../assets/static/gallery/pillow.jpg'
import stationery from '../../../assets/static/gallery/stationery.jpg'
import toys from '../../../assets/static/gallery/toys.jpg'

import { NavLink } from 'react-router-dom'
import { navigateByLabel } from '../../../slices/productSlice'
import { useDispatch } from 'react-redux'

const Gallery = () => {

    const dispatch = useDispatch()

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="gallery__label"><span>Лето 2022</span>Новинки</div>
                <h1 className="header">Необычные и оригинальные товары</h1>
                <div className="gallery__content">
                    <NavLink to={'/catalog/home'}
                            className="gallery__item gallery__item-lamp"
                            onClick={() => {
                                dispatch(navigateByLabel('home'))
                            }}
                    >
                        <img src={lamp} alt="lamp" />
                        <div className="gallery__item-text">Светильники</div>
                    </NavLink>
                    <NavLink to='/catalog/home' 
                            className="gallery__item gallery__item-pillow"
                            onClick={() => dispatch(navigateByLabel('home'))}
                    >
                        <img src={pillow} alt="pillow" />
                        <div className="gallery__item-text">Подушки</div>
                    </NavLink>
                    <NavLink to="/catalog/jewellery" 
                            className="gallery__item gallery__item-jewelry vertical"
                            onClick={() => dispatch(navigateByLabel('jewellery'))}
                    >
                        <img src={jewelry} alt="jewelry" />
                        <div className="gallery__item-text">Украшения</div>
                    </NavLink>
                    <NavLink to='/catalog/toys' 
                            className="gallery__item gallery__item-toys"
                            onClick={() => dispatch(navigateByLabel('toys'))}
                    >
                        <img src={toys} alt="toys" />
                        <div className="gallery__item-text">Игрушки</div>
                    </NavLink>
                    <NavLink to="/catalog/stationery" 
                            className="gallery__item gallery__item-stationery"
                            onClick={() => dispatch(navigateByLabel('stationery'))}
                    >
                        <img src={stationery} alt="stationery" />
                        <div className="gallery__item-text">Канцелярия</div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Gallery