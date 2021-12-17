const apiProducto=require('../components/producto/index')
const apiCarrito  = require("../components/carrito/index");
// let {Router} = require('express')
// let homeRouter = Router('/')

const serverRoutes = app =>{
    //PRODUCTO
    apiProducto(app)
    //CARRITO
    apiCarrito(app)

    // app.get('/',(req,res,next) =>{
    //     console.log('Hola desde Routes')
    //     res.send('Ok desde Routes')
    // })

}

module.exports = serverRoutes