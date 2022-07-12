const orders = [
    {
        date: '2005-04-03',
        subtotal: 90.4,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old red shoe',
                    price: 66.6,
                    reviews: []
                },
                quantity: 3
            },
        ]
    }
]

function getAllOrders() {
    return orders
}
module.exports = {
    getAllOrders
}