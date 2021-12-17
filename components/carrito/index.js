let {Router} = require("express")
let router = new Router();

function apiCarrito (app){
    app.use("/carrito", router)
    router.get('/',(req,res,next)=>{
        res.send('Todo OK desde Carrito')
    })





}
module.exports= apiCarrito