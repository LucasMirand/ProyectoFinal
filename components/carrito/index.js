const fs = require("fs")
let dataChart = fs.readFileSync('carrito.json')
let arrChart = JSON.parse(dataChart)
let dataProds = fs.readFileSync('prods.json')
let arrProds = JSON.parse(dataProds)


let {Router} = require("express")
let router = new Router();
const HandlerCarrito = require('./service/carritoService')
const res = require("express/lib/response")
let handler = new HandlerCarrito('carrito.json')




function apiCarrito(app){
    app.use("/carrito", router)
    //Recibir Carrito
    router.get('/',(req,res,next)=>{
        res.send(handler.getCarrito())
    })
    //CreaCarrito
    router.post('/',(req,res,next)=>{
        res.send(handler.crearCarrito())
    })
    //EliminaCarrito
    router.delete('/:id',(req,res,next)=>{
        console.log(req.params);
        let match=0
        arrChart.forEach(carrito => {
            if (carrito.id === Number(req.params.id)){
                match ++   
            }
        });
        if (match != 0){
                res.send(handler.deleteCarrito(req.params))    
            } res.send('No se encontró el ID')
    })
    router.get('/:id/productos',(req,res,next)=>{
        res.send(handler.getChartProds(req.params))
    })







}
module.exports= apiCarrito