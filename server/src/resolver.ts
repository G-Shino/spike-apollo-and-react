import {User} from "./db/models/User"

export const resolvers = {
  Query: {
    /*
     {
       hello
     }
    */
    hello: (root: undefined, args: undefined, context: undefined) => "World!",
    /*
      {
        users {
          id
          name
        }
      }
    */
    users: async (root: undefined, args:undefined, {dataSources}:{dataSources: any}) => {
      console.log(dataSources);
      return await dataSources.User.findALL();
    }
  },
  Mutation:{
    /*
      mutation createUserTest {
        User: createUser(name: "hello"){
          id
        }
      }
    */
    createUser: async (root: undefined, {name}: {name: string}, {dataSources}:{dataSources: {User: User}}) => {
      await dataSources.User.findOrCreate({where: {name}});
      return await dataSources.User.findALL();
    }
  }
} 