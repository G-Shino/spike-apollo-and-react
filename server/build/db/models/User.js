"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const apollo_datasource_1 = require("apollo-datasource");
class User extends apollo_datasource_1.DataSource {
    constructor(store) {
        super();
        this.store = store;
    }
    initialize(config) {
        this.context = config.context;
    }
    findALL() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            return this.store.users.findAll();
        });
    }
    findOrCreate({ where, defaults = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            return yield this.store.users.findOrCreate({ where, defaults });
        });
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map