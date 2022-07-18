import './cartItems.sass'
import Empty from '../../blocks/empty/Empty'

const CartItems = () => {
    return (
        <div className="cart">
            <Empty text={'Здесь пока нет товаров'}/>
        </div>
    )
}

export default CartItems