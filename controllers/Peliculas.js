const Peliculas = require('../models/Peliculas')
const mongoose = require("mongoose")

//insertar nuevos elementos a la BD
exports.postAgregarPeliculas = async (req,res)=>{
    const peliculas = new Peliculas(req.body)
    peliculas._id = new mongoose.Types.ObjectId() //se le asigna un id al objeto 
        try{
            // Agregar documento a la coleccion y verifica que no se repitan el nombre de la pelicula
            const movieExists = await Peliculas.exists({Titulo: req.body.Titulo});
            if (!movieExists){
                await peliculas.save()
                console.log(peliculas)
                console.log("Pelicula registrada")
                res.send({operacion:"correcta"})
            }else{
                res.send({operacion:"incorrecta repetido"})
            }
    
        }catch(err){
            console.log(err)
            res.send({operacion:"incorrecta"})
        }
    }

//consultar el status de la BD
exports.getObtenerPeliculas = async (req,res)=>{
    const Pel = await Peliculas.find()
    console.log(Pel)
    res.json(Pel)
}
exports.postActualizarPeliculas = async (req,res)=>{
    // Filtro y cambio para actualizar info de las pelis
    try {
        await Peliculas.findOneAndUpdate({ Titulo: req.body.Titulo },req.body.actualizar)
        Peliculas.exists()
        console.log("Pelicula actualizada")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
        console.log("incorrecto verifica")
    }
}

exports.postBorrarPeliculas = async (req,res)=>{
    //Borramos de acuerdo al nombre de la pelicula
    try{
        const existe = await Peliculas.exists({ Titulo: req.body.Titulo })
        if (existe){
            await Peliculas.findOneAndRemove({ Titulo: req.body.Titulo })
            console.log("Pelicula eliminada")
            res.json({operacion:"correcto"})
        }else{
            console.log("Pelicula no encontrada")
            res.json({operacion:"incorrecto"})
        }
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}