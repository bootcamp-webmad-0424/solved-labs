import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(({ data }) => setProducts(data))
      .catch(err => console.log(err))
  }

  return (
    <div className="ProductListPage">
      {
        products.map(elm => {
          return (
            <Link to={`/product/details/${elm.id}`}>
              <ProductCard key={elm.id} {...elm} />
            </Link>
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
