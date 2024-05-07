const ProductCard = ({
    title,
    price,
    rating: {
        rate,
        count },
    image
}) => {
    return (
        <div className="ProductCard card">
            <img src={image} alt={title} />
            <h5>{title}</h5>
            <hr />
            <p>Precio: {price} | Puntuación: {rate} ({count} votos)</p>
        </div>
    )
}

export default ProductCard