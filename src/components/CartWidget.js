import "./CartWidget.css";

const CartWidget = () => {
    return <div className="cart-widget">
            <img className="cart" src={require("./images/cart.webp")} />
            <p className="number-products">4</p>
    </div>
}

export default CartWidget;