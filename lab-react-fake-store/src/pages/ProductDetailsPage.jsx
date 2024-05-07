import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {

  const [product, setProduct] = useState({})

  const { productId } = useParams()

  useEffect(() => {
    loadProductInfo()
  }, [])

  const loadProductInfo = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(({ data }) => setProduct(data))
      .catch(err => console.log(err))
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <hr />
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <hr />
      <p>Precio: <strong>{product.price}€</strong></p>
      <hr />
      <Link to={'/'}>Volver a los productos</Link>
    </div>
  );
}

export default ProductDetailsPage;
