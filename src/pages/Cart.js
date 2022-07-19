import CartItems from '../components/cart/cartItems/CartItems'
import CartTotal from '../components/cart/cartTotal/CartTotal'
import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'

const Cart = () => {

    return (
        <>
            <div className="container">
                <h1 className="header">Корзина</h1>
                <div className="content-wrapper" style={{'gridTemplateColumns': '2fr 1fr'}}>
                    <CartItems/>
                    <CartTotal/>
                </div>
            </div>
            <BtnScrollUp/>
        </>
    )
}

export default Cart