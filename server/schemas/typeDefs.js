const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    game: Game
    shop: Shop
    createdAt: String
  }
  type Game {
    _id: ID!
    name: String
    level: Int!
    createdAt: String!
  }
  type Item {
    name: String
    category: String
    level: Int!
  }
  type Shop {
    _id: ID!
    name: String
    items: [Item]
  }
  input CreateUserInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }
  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    getUser(_id: ID!): User
    getByEmailUserName(userNameOrEmail: String!): User
    games: [Game]
    shop: [Shop]
  }
  type Mutation {
    updateUser(id: ID!, input: UpdateUserInput!): User
    createUser(input: CreateUserInput!): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
