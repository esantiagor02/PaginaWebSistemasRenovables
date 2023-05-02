"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductosContoller {
    index(req, res) {
        database_1.default.query('DESCRIBE sistemasrenovables');
        res.json('sistemasrenovables');
        // res.send('Productos renovables')
    }
}
const productosController = new ProductosContoller();
exports.default = productosController;
