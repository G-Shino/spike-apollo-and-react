"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const tslib_1 = require("tslib");
exports.resolvers = {
    Query: {
        /*
         {
           hello
         }
        */
        hello: (root, args, context) => "World!",
        /*
          {
            users {
              id
              name
            }
          }
        */
        users: (root, args, { dataSources }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            console.log(dataSources);
            return yield dataSources.User.findALL();
        })
    },
    Mutation: {
        /*
          mutation createUserTest {
            User: createUser(name: "hello"){
              id
            }
          }
        */
        createUser: (root, { name }, { dataSources }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            yield dataSources.User.findOrCreate({ where: { name } });
            return yield dataSources.User.findALL();
        })
    }
};
//# sourceMappingURL=resolver.js.map