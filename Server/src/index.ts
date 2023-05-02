import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors' ;

import index_routes from './routes/index_routes';
import Productos_routes from './routes/productos_routes';
class Server {
    public app: Application;
    constructor() {
        this.app =express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use('/',index_routes)
        this.app.use('/api/productos',Productos_routes)
    }
    start():void{
    this.app.listen(this.app.get('port'),()=>{
        console.log('Serve on port',this.app.get('port'));
    });

    }
}
const server = new Server();
server.start();