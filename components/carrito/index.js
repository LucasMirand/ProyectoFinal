let {Router} = require("express")
let router = new Router();
const HandlerCarrito = require('./service/carritoService')
let handler = new HandlerCarrito('carrito.json')

function apiCarrito (app){
    app.use("/carrito", router)
    router.get('/',(req,res,next)=>{
        res.send('Todo OK desde Carrito')
    })
    router.post('/',(req,res,next)=>{
        console.log(req.body);
        res.send('Ok el put')
    })
}
module.exports= apiCarrito