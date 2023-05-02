import { Router } from "express";
import productosController  from '../controllers/productoscontroller';
class ProductosRoutes {
    public router: Router= Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',productosController.index);
    }
}
const Productos_routes = new ProductosRoutes();
export default Productos_routes.router;