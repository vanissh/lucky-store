import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'
import FavoritesItems from '../components/favorites/favoritesItems/FavoritesItems'
const Favorites = () => {

    return (
        <>
            <div className="container">
                <h1 className="header">Избранное</h1>
                <FavoritesItems/>
            </div>
        </>
    )
}

export default Favorites