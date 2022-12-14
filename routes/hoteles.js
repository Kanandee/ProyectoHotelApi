var express = require("express");
var router = express.Router();

const HotelesController = require("../controller/hotelesController.js");

/* GET hotels listing. */
router.get("/", HotelesController.getAll);

/* GET hotel by id. */
router.get("/:id", HotelesController.getById);

/* GET hotel by name. */
router.get("/name/:name", HotelesController.getByName);

/* GET hotel by indate. */
router.get("/fechaEntrada/:indate", HotelesController.getByInDate);

/* GET hotel by outdate. */
router.get("/fechaSalida/:outdate", HotelesController.getByOutDate);



module.exports = router;
