"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const resolver_1 = require("./resolver");
const User_1 = require("./db/models/User");
const db_1 = require("./db");
const boot = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // データベースインスタンを取得
    const store = yield db_1.getDB();
    //apollo serverの初期化
    // typeDefs: schema定義、resolvers: リゾルバー、dataSources: リゾルバーとデータベースの紐付け
    const server = new apollo_server_1.ApolloServer({
        cors: {
            origin: "*",
            credentials: true
        },
        typeDefs: schema_1.typeDefs,
        resolvers: resolver_1.resolvers,
        dataSources: () => ({
            User: new User_1.User(store)
        })
    });
    //serverの指定ポートでの待ち受け開始
    server.listen({
        host: 'localhost',
        port: 4000,
    }).then(({ url }) => {
        console.log(`server ready at ${url}`);
    });
});
boot();
//# sourceMappingURL=index.js.map