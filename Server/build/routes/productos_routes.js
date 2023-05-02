"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('PRODUCTOS'));
    }
}
const Productos_routes = new ProductosRoutes();
exports.default = Productos_routes.router;
