import {Request, Response} from 'express';
import pool from '../database';
class ProductosContoller{
     public index (req:Request,res:Response){
        pool.query('DESCRIBE sistemasrenovables');
        res.json('sistemasrenovables')
        // res.send('Productos renovables')
    } 
}
 const productosController = new ProductosContoller();
 export  default productosController;