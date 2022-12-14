var express = require("express");
var router = express.Router();

const ClientesController = require("../controller/clientesController.js");

/* GET clients listing. */
router.get("/", ClientesController.getAll);

/* GET client by id. */
router.get("/:id", ClientesController.getById);

/* GET client by name. */
router.get("/name/:name", ClientesController.getByName);

/* GET client by dni. */
router.get("/dni/:dni", ClientesController.getByDni);

/* GET client by email. */
router.get("/email/:email", ClientesController.getByEmail);

/* GET client by telefono. */
router.get("/telefono/:telefono", ClientesController.getByTelefono);


module.exports = router;
