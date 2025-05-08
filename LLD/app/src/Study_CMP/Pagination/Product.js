const Product = ({ title, price, description, discountPercentage, thumbnail }) => {

    return (
        <div className="m-4 p-4 border border-solid border-black">
            <img className="h-48 object-fill" src={thumbnail} alt={title}></img>
            <h1 className="p-2 font-bold text-xl w-72">{title}</h1>
            <h2 className="p-1 text-lg">{price} {discountPercentage}%</h2>
            <p className="p-1 text-sm w-72">{description}</p>
        </div>
    )
}
export default Product;