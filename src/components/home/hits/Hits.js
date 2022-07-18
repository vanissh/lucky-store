import './hits.sass'
import img from '../../../assets/static/icons/leaf.png'

const Hits = () => {
    return (
        <div className="hits" id="hits">
            <div className="container">
                <h2 className="header">Хиты продаж</h2>
                <div className="hits__content">
                    <img src={img} alt="leaf" className="hits__content-img"/>
                    <div className="hits__content-text">Эта страница еще не создана</div>
                </div>
            </div>
        </div>
    )
}

export default Hits