import { Router } from "express";

class IndexRoutes {
    public router: Router= Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',(req,res)=> res.send('Rutas'));
    }
}
const index_routes = new IndexRoutes();
export default index_routes.router;