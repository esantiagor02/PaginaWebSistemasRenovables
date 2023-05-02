import { Router } from "express";
import {indexController} from '../controllers/indexcontoller';

class IndexRoutes {
    public router: Router= Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',indexController.index);
    }
}
const index_routes = new IndexRoutes();
export default index_routes.router;