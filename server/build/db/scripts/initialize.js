"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../index");
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const db = yield index_1.getDB();
    const users = db.users;
    yield users.sync();
    //@ts-ignore
    yield users.findOrCreate({ where: { name: "user1" } });
    //@ts-ignore
    yield users.findOrCreate({ where: { name: "user2" } });
    console.log("done!");
}))();
//# sourceMappingURL=initialize.js.map