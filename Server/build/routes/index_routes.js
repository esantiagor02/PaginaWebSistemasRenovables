"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontoller_1 = require("../controllers/indexcontoller");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexcontoller_1.indexController.index);
    }
}
const index_routes = new IndexRoutes();
exports.default = index_routes.router;
