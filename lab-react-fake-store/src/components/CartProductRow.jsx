import axios from "axios"
import { useEffect, useState } from "react"

const CartProductRow = ({ productId, quantity }) => {

    const [cartProductData, setCartProductData] = useState({})

    useEffect(() => {
        loadProdyctCartData()
    }, [])

    const loadProdyctCartData = () => {
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then(({ data }) => setCartProductData(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="CartProductRow" style={{ textAlign: 'center' }}>
            <img src={cartProductData.image} alt={cartProductData.title} style={{ width: '50px', display: 'inline' }} />
            <hr />
            <p>{cartProductData.title} | Precio {cartProductData.price} | Cantidad: {quantity}</p>
            <h3>Subtotal: {cartProductData.price * quantity} €</h3>
            <br />
            <br />
        </div>
    )
}

export default CartProductRow