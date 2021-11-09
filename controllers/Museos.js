const Museos = require('../models/Museos')
const mongoose = require("mongoose")

//insertar nuevos elementos a la BD
exports.postAgregarMuseos = async (req,res)=>{
    const museos = new Museos(req.body)
    museos._id = new mongoose.Types.ObjectId() //se le asigna un id al objeto 
        try{
            // Agregar documento a la coleccion y verifica que no se repitan los valores
            const userExists = await Museos.exists({Nombre: req.body.Nombre});
            if (!userExists){
                await museos.save()
                console.log(museos)
                console.log("Museo registrado")
                res.send({operacion:"Correcta"})
            }else{
                res.send({operacion:"El museo ya está registrado"})
            }
    
        }catch(err){
            console.log(err)
            res.send({operacion:"incorrecta verifica"})
        }
    }

//consultar el status de la BD
exports.getObtenerMuseos = async (req,res)=>{
    const Mus = await Museos.find()
    console.log(Mus)
    res.json(Mus)
}
exports.postActualizarMuseos = async (req,res)=>{
    // Filtro y cambio
    try {
        await Museos.findOneAndUpdate({ Nombre: req.body.Nombre },req.body.actualizar)
        Museos.exists()
        console.log("Museo Actualizado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
        console.log("incorrecto verifica")
    }
}

exports.postBorrarMuseos = async (req,res)=>{
    try{
        const existe = await Museos.exists({ Nombre: req.body.Nombre })
        if (existe){
            await Museos.findOneAndRemove({ Nombre: req.body.Nombre })
            console.log("Museo eliminado")
            res.json({operacion:"correcto"})
        }else{
            console.log("Museo no encontrado")
            res.json({operacion:"incorrecto"})
        }
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}
