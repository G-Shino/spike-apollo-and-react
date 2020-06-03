"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = void 0;
const tslib_1 = require("tslib");
const sequelize_1 = tslib_1.__importDefault(require("sequelize"));
const defUser = (db) => db.define("user", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize_1.default.STRING,
    createdAt: sequelize_1.default.DATE,
    updatedAt: sequelize_1.default.DATE
});
exports.getDB = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const Op = sequelize_1.default.Op;
    const operatorsAliases = {
        $in: Op.in
    };
    const db = new sequelize_1.default.Sequelize("", "", "", {
        dialect: "sqlite",
        storage: "./db.sqlite",
        operatorsAliases,
        logging: false
    });
    const users = defUser(db);
    return { users };
});
//# sourceMappingURL=index.js.map