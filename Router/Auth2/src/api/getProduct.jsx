

export const getProduct = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const products = await res.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}