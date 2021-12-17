const express = require('express')
const cors = require('cors')
let path = require('path')
const serverRoutes= require('../routes')

class Server {
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usersPathApi = '/api'
        this.middleware();
        this.routes();

    }

    middleware(){
        this.app.use(cors('*'))
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(express.static(path.join(__dirname,'public','lucas')))
    }
    routes(){
        serverRoutes(this.app)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        })
    }
}
module.exports = Server