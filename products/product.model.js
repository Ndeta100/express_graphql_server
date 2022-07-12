const products = [
    {
        id: 'redshoe',
        description: 'Red shoe',
        price: 32.3,
        reviews: []
    },
    {
        id: 'bluejeans',
        description: 'Blue jeans',
        price: 93.3,
        reviews: []
    }
]

function getAllProducts() {
    return products
}
function getProductByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

function getProductsById(id) {

    return products.find((product) => {
        return product.id === id
    })
}
function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description, reviews: []
    }
    products.push(newProduct)
    return newProduct
}
function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductsById(id)
    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment
        }
        matchedProduct.reviews.push(newProductReview)
        return newProductReview
    }
}
module.exports = {
    getAllProducts, getProductByPrice, getProductsById, addNewProduct, addNewProductReview
}