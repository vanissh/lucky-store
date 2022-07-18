import './empty.sass'
import img from '../../../assets/static/icons/leaf.png'

const Empty = ({text, styles}) => {
    return (
        <div className="empty" style={styles}>
            <img src={img} alt="leaf" className="empty__img"/>
            <div className="empty__text">{text}</div>
        </div>
    )
}

export default Empty