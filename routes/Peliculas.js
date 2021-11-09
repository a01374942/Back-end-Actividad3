const router = require("express").Router();

//nos permite saber que camino tomar para llegar al controlador
const PeliculasController = require('../controllers/Peliculas');

//metodos a ocupar para usar y probar la BD
router.post('/agregarPeliculas',PeliculasController.postAgregarPeliculas)
router.get('/obtenerPeliculas',PeliculasController.getObtenerPeliculas)
router.post('/actualizarPeliculas',PeliculasController.postActualizarPeliculas)
router.post('/borrarPeliculas',PeliculasController.postBorrarPeliculas)
//crear un modulo llamado router para ser consumido en otro lado 
module.exports = router