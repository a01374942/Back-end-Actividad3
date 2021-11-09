const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Peliculas = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Formato con el que se recibira el Json y se tendra la BD 
    Titulo:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    Anio:{
        type: String,
        required: false
    },Director:{
        type: String,
        required: false,
        minlength: 3,
        maxlength: 25
    },Duracion:{
        type: String,
        required: false
    }
},{collection:'Peliculas'})
//Modulo para exportar la base
module.exports = mongoose.model('Peliculas',Peliculas)