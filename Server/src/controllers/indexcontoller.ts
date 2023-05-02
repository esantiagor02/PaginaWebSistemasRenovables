import {Request, Response} from 'express';
class IndexController{
     public index (req:Request,res:Response){
        res.json({text:'hola que hace'})
    } 
}
export const indexController = new IndexController()