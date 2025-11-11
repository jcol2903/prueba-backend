"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const dotenv_1 = require("dotenv");
const producto_entity_1 = require("../producto/producto.entity");
(0, dotenv_1.config)();
exports.typeOrmConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [producto_entity_1.Producto],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map