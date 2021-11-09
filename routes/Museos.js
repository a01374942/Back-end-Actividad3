const router = require("express").Router();

//nos permite saber que camino tomar para llegar al controlador
const MuseosController = require('../controllers/Museos');

//metodos a ocupar para usar y probar la BD
router.post('/agregarMuseos',MuseosController.postAgregarMuseos)
router.get('/obtenerMuseos',MuseosController.getObtenerMuseos)
router.post('/actualizarMuseos',MuseosController.postActualizarMuseos)
router.post('/borrarMuseos',MuseosController.postBorrarMuseos)
//crear un modulo llamado router para ser consumido en otro lado 
module.exports = router