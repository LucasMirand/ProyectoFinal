const { profileEnd } = require("console");
const fs = require("fs")

class HandlerProds{
    constructor(url) {
        this.url = url
    }
    async getProds() {
        let showProds = await fs.readFile(this.url)
        let prods= JSON.parse(showProds)
        try {
            return prods
        }       
        catch (error) {
           return 'Error en getProd';
       } 
    }
    async getXProds(param) {
        let prods = await this.getProds()
        try {
            let match = prods.filter(element => Number(element.id) === Number(param.id)) 
            if(match != ''){
                return match
            } else{
                return 'No se encontró el producto'
            }
        }       
        catch (error) {
           console.log('Error en getProd');
       } 
    }
    async addProd(newProd){
        let prods= await this.getProds()
        try {
            let mayorId=0
            //Encontrar ID a Asignar
            for (let i = 0; i < prods.length; i++) {
                const element = prods[i];
                if (mayorId <= element.id){
                    mayorId =  (element.id+1)
                }
            }
            //Asignar
            newProd.precio = Number(newProd.precio)
            let idNewProd = {id: Number(mayorId)}
            let prodAdd = Object.assign(idNewProd, newProd)
            console.log(prodAdd);
            showProds.push(prodAdd)
            let jsonData = JSON.stringify(showProds,null,2)
            let reescribir = await fs.writeFile(this.url, jsonData)
            return prodAdd;
        } catch (error) {
            return 'Error en NewProd'
        }
    }
    async modifProd(idMod, objMod){
        let prods = await this.getProds()
        let num = Number(idMod.id)
        let posicion
        try {
            let status = false
            for (let i = 0; i < prods.length; i++) {
                if(num === prods[i].id) {
                    let idEnco = {id: num}
                    let modificador = Object.assign(idEnco, objMod)
                    prods[i] = modificador
                    status = true 
                    console.log(prods[i]);
                    posicion = i
                }
            }

            let jsonData = JSON.stringify(prods,null,2)
            let escribe = await fs.writeFile(this.url, jsonData)
            return prods[posicion]

            if (status === false) {
                return 'No se encontró id'
            }
            
        } catch (error) {
            return console.log('Error en modificar CATCH');
        }
    }
    async deleteProd(idDel){
        let prods = await this.getProds()
        let num = Number(idDel.id)
        let posicion
        let eliminado
        try {
            for (let i = 0; i < prods.length; i++) {
            if (num === prods[i].id) {
                console.log(prods[posicion]);
                eliminado = prods.splice(i,1)
                posicion = i
            }
            
        }    
            let jsonData = JSON.stringify(prods,null,2)
            // console.log(jsonData);
            let escribe = await fs.writeFile(this.url, jsonData)
            return eliminado
        } catch (error) {
            return 'Error en Delete'   
        }
    }
}



module.exports = HandlerProds


