const fs = require("fs")



class HandlerCarrito{
    constructor(url) {
        this.url = url
    }
    async getCarrito(){
        let showChart= await fs.readFile(this.url)
        let parsedChart = JSON.parse(showChart)
        try {
            return parsedChart
        } catch (error) {
            return 'Error get carrito'
        }
    }
    async crearCarrito(){
        try {    
            let arrayCarrito = await this.getCarrito()
            let id = arrayCarrito.length+1
            let pedido= {
                'id':id,
                'productos':[]
            }
            arrayCarrito.push(pedido)
            let jsonData = JSON.stringify(arrayCarrito,null,2)
            let reescribir = await fs.writeFile(this.url, jsonData)
            return arrayCarrito
        } catch (error) {
            return console.log('Error en crear carrito');
        }    
    }
    async deleteCarrito(idCarrito){
        try {
            let arrayCarrito = await this.getCarrito()
            let idCarr = Number(idCarrito.id)
            let borrar = arrayCarrito.filter(eliminarObj => eliminarObj.id != idCarr)
            let jsonData = JSON.stringify(borrar,null,2)
            await fs.promises.writeFile(this.ruta, jsonData);
            return borrar
        } catch (error) {
            return 'Error en Delete'
        }
    }
    async getChartProds(idChart){
        let arrayCarrito = await this.getCarrito()
        let id = Number(idChart.id)
        try {
            let match = arrayCarrito.filter(element => Number(element.id) === id) 
            if(match != ''){
                return match
            } else{
                return 'No se encontró el producto'
            }
        } catch (error) {
            return 'Error getCharProds'
        }
    }
    async deleteXprod(id, id_prod){
        let arrayCarrito = await this.getCarrito()
        arrayCarrito.forEach(element => {
            if(element.id === id){
                element.producto.id.forEach(prod => {
                   if(element.producto.id === id_prod){
                       
                   } 
                });
            }   else{
                return 'No se encontro el carrito'
            }        
        });
    }
}



module.exports = HandlerCarrito
