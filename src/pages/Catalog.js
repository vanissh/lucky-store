import { useSelector } from 'react-redux'
import CatalogItems from '../components/catalog/catalogItems/CatalogItems'
import CatalogSidePanel from '../components/catalog/catalogSidePanel/CatalogSidePanel'
import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'

const Catalog = () => {

    const {activeCategory} = useSelector(state => state.productReducer)

    return (
        <>
            <div className="container">
                <h1 className='header'>{activeCategory.name || activeCategory}</h1>
                <div className="content-wrapper">
                    <CatalogSidePanel/>
                    <CatalogItems />
                </div>
            </div>
            <BtnScrollUp/>
        </>
    )
}

export default Catalog