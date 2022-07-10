const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const PORT = 3000
const schema = buildSchema(`
type Query {
    description:String
    price:Float
}`)
const root = {
    description: 'Red shoe',
    price: 43.2
}
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root
}))
app.listen(PORT, () => {
    console.log(`Running graphql server on port ${PORT}`)
})