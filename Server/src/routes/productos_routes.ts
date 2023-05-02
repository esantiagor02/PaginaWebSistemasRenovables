import { Router } from "express";

class ProductosRoutes {
    public router: Router= Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',(req,res)=> res.send('PRODUCTOS'));
    }
}
const Productos_routes = new ProductosRoutes();
export default Productos_routes.router;