const { getAllProducts, getProductByPrice, getProductsById, addNewProduct, addNewProductReview } = require('./product.model')
module.exports = {
    Query: {
        products: () => {
            return getAllProducts
        },
        productByPrice: (_, args) => {
            return getProductByPrice(args.min, args.max)
        },
        product: (_, args) => {
            return getProductsById(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (_, args) => {
            addNewProductReview(args.id, args.rating, args.comment)
        }
    }
}