'use strict'

require('@babel/register')
require('dotenv').config({ path: '.env' })
const { ApolloServer } = require('apollo-server-lambda')
const lambdaPlayground = require('graphql-playground-middleware-lambda').default

const resolvers = require('./src/resolvers/apartment.resolver').resolvers
const types = require('./src/types/types').types

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: '/dev/graphql',
  },
})

exports.playgroundHandler = lambdaPlayground({
  endpoint: '/dev/graphql',
})

exports.graphqlHandler = server.createHandler()
