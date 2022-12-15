var express = require("express");
var router = express.Router();

const ReservasController = require("../controller/reservasController.js");

/* GET reservas listing. */
router.get("/", ReservasController.getAll);

/* GET reserva by id. */
router.get("/id/:id", ReservasController.getById);

/* GET reservas by cliente. */
router.get("/cliente/:cliente", ReservasController.getByCliente);

/* GET reservas by hotel. */
router.get("/hotel/:hotel", ReservasController.getByHotel);


module.exports = router;
