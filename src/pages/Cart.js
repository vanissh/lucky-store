import CartItems from '../components/cart/cartItems/CartItems'
import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {

    return (
        <>
            <div className="container">
                <h1 className="header">Корзина</h1>
                <div className="content-wrapper" style={{'gridTemplateColumns': '2fr 1fr'}}>
                    <CartItems/>
                    {}
                </div>
            </div>
            <BtnScrollUp/>
        </>

    )
}

export default Cart