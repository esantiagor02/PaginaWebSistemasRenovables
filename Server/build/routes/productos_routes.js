"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoscontroller_1 = __importDefault(require("../controllers/productoscontroller"));
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productoscontroller_1.default.index);
    }
}
const Productos_routes = new ProductosRoutes();
exports.default = Productos_routes.router;
