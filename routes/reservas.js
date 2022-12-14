var express = require("express");
var router = express.Router();

const ReservasController = require("../controller/reservasController.js");

/* GET reservas listing. */
router.get("/", ReservasController.getAll);

/* GET reserva by id. */
router.get("/:id", ReservasController.getById);

/* GET reservas by cliente. */
router.get("/cliente/:cliente", ReservasController.getByCliente);

/* GET reservas by hotel. */
router.get("/hotel/:hotel", ReservasController.getByHotel);

/* GET reservas by importe. */
router.get("/importe/:importe", ReservasController.getByImporte);



module.exports = router;
