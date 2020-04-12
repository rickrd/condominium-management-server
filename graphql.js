'use strict'

require('@babel/register')
require('dotenv').config({ path: '.env' })
const { ApolloServer } = require('apollo-server-lambda')
const lambdaPlayground = require('graphql-playground-middleware-lambda').default

const schema = require('./src/types/types').schema

const server = new ApolloServer({
  schema,
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
