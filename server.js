const express = require('express')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')
const app = express()
const PORT = 3000
const typesArr = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArr = loadFilesSync(path.join(__dirname, '**/*.trsolvers.js'))
const schema = makeExecutableSchema({
    typeDefs: typesArr,
    resolvers: resolversArr
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log(`Running graphql server on port ${PORT}`)
})