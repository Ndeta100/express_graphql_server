const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const PORT = 3000
const schema = buildSchema(`
type Query {
    products:[Product]
    orders:[Order]
}
    type Product{
        id:ID!
        description:String!
        reveiws:[Review]
        price:Float!
    }
    type Review {
        rating:Int!
        comment:String
    }
    
    type Order{
        date:String!
        subtotal:Float!
        items:[OrderItem]
    }

    type OrderItem {
        product:Product!
        quantity:Int!
    }
`)
const root = {
    products: [
        {
            id: 'redshoe',
            description: 'Red shoe',
            price: 32.3
        },
        {
            id: 'bluejeans',
            description: 'Blue jeans',
            price: 93.3
        }
    ],
    orders: [
        {
            date: '2005-04-03',
            subtotal: 90.4,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        description: 'Old red shoe',
                        price: 66.6
                    },
                    quantity: 3
                }
            ]
        }
    ]
}
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log(`Running graphql server on port ${PORT}`)
})