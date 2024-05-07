import axios from "axios"
import { useEffect, useState } from "react"
import CartProductRow from "../components/CartProductRow"

const CartPage = () => {

    const [cart, setCart] = useState({})

    useEffect(() => {
        loadCartContent()
    }, [])

    const loadCartContent = () => {
        axios
            .get('https://fakestoreapi.com/carts/2')
            .then(({ data }) => setCart(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="CartPage">
            <h1>Este es tu carrito</h1>
            <hr />
            {
                cart.products?.map(elm => <CartProductRow key={elm.productId} {...elm} />)
            }
        </div>
    )
}

export default CartPage