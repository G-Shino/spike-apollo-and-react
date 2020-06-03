"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
 type Query {
   hello: String!
   users: [User]!
 }

 type Mutation {
   createUser(name: String): [User]!
 }

 type User {
   id: ID!
   name: String!
   createdAt: String
   updatedAt: String
 }
`;
//# sourceMappingURL=schema.js.map