import {ApolloServer} from "apollo-server";
import {typeDefs} from "./schema";
import {resolvers} from "./resolver";
import {User} from "./db/models/User";
import {getDB, DataBaseStore} from "./db";

const boot = async () =>  {
  // データベースインスタンを取得
  const store = await getDB();

  //apollo serverの初期化
  // typeDefs: schema定義、resolvers: リゾルバー、dataSources: リゾルバーとデータベースの紐付け
  const server = new ApolloServer({
    cors:{
      origin: "*",
      credentials: true
    },
    typeDefs,
    resolvers,
    dataSources: ()  => ({
      User: new User(store as DataBaseStore)
    })
  });

  //serverの指定ポートでの待ち受け開始
  server.listen({
    host: 'localhost',
    port: 4000,
  }).then(({url}: {url: string}) => {
    console.log(`server ready at ${url}`)
  })
}

boot();