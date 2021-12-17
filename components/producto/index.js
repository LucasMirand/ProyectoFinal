let {Router} = require('express')
let router = Router();

const apiProducto= (app) =>{
    app.use("/productos", router)
    router.get('/',(req,res,next)=>{
        res.send('mostrar todo')
    })
    router.get('/:id',(req,res,next)=>{
        console.log(req.params);
        res.send('mostrar uno')
    })
    router.post('/',(req,res,next)=>{
        console.log(req.body);
        res.send('agregando')
    })
    router.put('/:id',(req,res,next) => {
    res.send('Modificando')
    })
    router.delete('/:id', (req,res,next)=>{
        res.send('Eliminando')
    })
}

module.exports = apiProducto