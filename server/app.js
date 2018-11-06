'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const graphqlHTTP = require('express-graphql');
const {schema} = require('./src/controller');

const {
  Prisma,
  extractFragmentReplacements
} = require('prisma-binding');

const {resolvers} = require('./src/controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const db = new Prisma({
  fragmentReplacements: extractFragmentReplacements(resolvers),
  typeDefs: './src/db/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  // secret: process.env.PRISMA_SECRET,
  debug: true
});

app.use('/graphql', graphqlHTTP(async req => ({
  schema: schema,
  graphiql: true,
  context: {
    db: db,
    req: req,
    __userId: req.headers.userid || process.env.TEST_USER_ID
  }
})));


module.exports = app;
