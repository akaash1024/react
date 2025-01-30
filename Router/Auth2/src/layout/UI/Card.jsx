

export const Card = ({ curProduct }) => {
    const {
        category,
        description,
        image,
        price,
        rating: { rate, count },
        title
    } = curProduct;


    return (
        <>
            <div className="productCard">
                <h1>{category}</h1>
                <h1>{title}</h1>
                <img src={image} alt="image" />
                <p>{description}</p>
                <p>{price}</p>
                <span>Rate: {rate}</span>
            </div>

        </>
    )
}