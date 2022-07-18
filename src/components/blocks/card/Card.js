import Button from '../button/Button'
import './card.sass'

const Card = (props) => {

    const {price, name, src} = props.item

    let icon

    if(props.icon === 'heart'){
        icon = <i onClick={props.toggleItemAdded} className={"icon icon-heart" + props.prefix}></i>
    } else if (props.icon === 'delete'){
        icon = <i onClick={props.deleteFromFav} className={"icon icon-delete"}></i>
    }

    return (
        <div className="card">
            <div className="card__photo">
               <img src={src} alt="hfhf"/> 
            </div>
            <div className="card__descr">
               <div>
                    <p className="card__price">{price} ₽</p>
                    <p className="card__name">{name}</p>
               </div>
               <Button render={props.addToCart}>В корзину</Button>
            </div>
            <div className="card__icon">
                {icon} 
            </div>
        </div>
    )
}

export default Card