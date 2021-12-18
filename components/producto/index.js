let {Router} = require('express')
let router = Router();
const HandlerDocs = require("./service/prodService")
let handler = new HandlerDocs('prods.json')

const apiProducto= (app) =>{
    app.use("/productos", router)
    //Obtener Todos los prods
    router.get('/',(req,res,next)=>{
        console.log('TODOS');
        res.send(handler.getProds())
    })
    //Obtener por ID req.params
    router.get('/:id',(req,res,next)=>{
        console.log(req.params);
        res.send(handler.getXProds(req.params))
    })
    //AgregarProds- req.body
    router.post('/',(req,res,next)=>{
        console.log(req.body);
        // res.send(handler.addProd(req.body))
        res.send(req.body)
    })
    //Modificar por ID: req.params y req.body datos del obj
    router.put('/:id',(req,res,next) => {
        console.log(req.body , req.params);
        res.send(handler.modifProd(req.params , req.body))
    })
    router.delete('/:id', (req,res,next)=>{
        res.send(handler.deleteProd(req.params))
    })
}

module.exports = apiProducto