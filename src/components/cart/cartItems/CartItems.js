import './cartItems.sass'
import Empty from '../../blocks/empty/Empty'

const CartItems = () => {
    return (
        <div className="cart">
            <Empty text={'Здесь пока нет товаров'} styles={{'gridColumn': '1/3', 'gridRow': '1/3'}}/>
        </div>
    )
}

export default CartItems