const express = require("express") 
const mongoose = require("mongoose")
const PeliculasRoutes = require("./routes/Peliculas")
const MuseosRoutes = require("./routes/Museos")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/Peliculas",PeliculasRoutes)
app.use("/Museos",MuseosRoutes)
//conectar con mongoose atraves de la maquina virtual establecida
mongoose.connect('mongodb://user6:root@54.227.9.233:27017/base6?authSource=admin')
    .then(()=>{
        app.listen(8081,()=>console.log("Servidor en linea"))
    })
    .catch(err=>console.log(err))

