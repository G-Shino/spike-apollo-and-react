import {getDB} from "../index"

(async () => {
  const db = await getDB();
  const users = db.users;
  await users.sync();
  //@ts-ignore
  await users.findOrCreate({where: {name: "user1"}});
  //@ts-ignore
  await users.findOrCreate({where: {name: "user2"}});
  console.log("done!")
})();