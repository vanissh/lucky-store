import './hits.sass'
import Empty from '../../blocks/empty/Empty'

const Hits = () => {
    return (
        <div className="hits" id="hits">
            <div className="container">
                <h2 className="header">Хиты продаж</h2>
                <Empty text={'Эта страница еще не создана'} styles={{'marginTop': '70px'}}/>
            </div>
        </div>
    )
}

export default Hits