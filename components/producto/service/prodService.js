const { profileEnd } = require("console");
const fs = require("fs")

class HandlerProds{
    constructor(url) {
        this.url = url
    }
    getProds() {
        let showProds = fs.readFileSync(this.url)
        // let prods= JSON.parse(showProds)
        try {
            return showProds
        }       
        catch (error) {
           console.log('Error en getProd');
       } 
    }
    getXProds(param) {
        let showProds = fs.readFileSync(this.url)
        let prods= JSON.parse(showProds)
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
    addProd(newProd){
        let showProds = fs.readFileSync(this.url,jsonData)
        let prods= JSON.parse(showProds)
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
            let reescribir = fs.writeFileSync(this.url, jsonData)
            return prodAdd;
        } catch (error) {
            return 'Error en NewProd'
        }
    }
    modifProd(idMod, objMod){
        let showProds = fs.readFileSync(this.url,jsonData)
        let prods = JSON.parse(showProds)
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
            let escribe = fs.writeFileSync(this.url, jsonData)
            return arrayProds[posicion]

            if (status === false) {
                return 'No se encontró id'
            }
            
        } catch (error) {
            return console.log('Error en modificar CATCH');
        }
    }
    deleteProd(idDel){
        let showProds = fs.readFileSync(this.url,jsonData)
        let prods = JSON.parse(showProds)
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
            let escribe = fs.writeFileSync(this.url, jsonData)
            return eliminado
        } catch (error) {
            return error   
        }
    }
}



module.exports = HandlerProds


