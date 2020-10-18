const { request } = require('express')
let path = require('path')
let heroes = require('../data/heroes.json')


let heroesController = {

    list: function(req, res) {
        let file = path.resolve('data/heroes.json')
        res.sendFile(file)
    },

    detalle: function(req, res) {
        let buscado = heroes.find(elemento => elemento.id == req.params.idHeroe)

        if (buscado) {
            res.send('Mi nombre es ' + buscado.nombre + ' y soy ' + buscado.profesion)
        }
        return res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id')
    },

    resenia: function(req, res) {
        let buscado = heroes.find(elemento => elemento.id == req.params.idHeroe)

        if (buscado) {
            res.send(buscado.nombre + ' : ' + buscado.resenia)
        }
        return res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id')
    }





}










module.exports = heroesController