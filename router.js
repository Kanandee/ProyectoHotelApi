const router = require("express").Router();

const indexRouter = require("./routes/index");
const clientesRouter = require("./routes/clientes");
const hotelesRouter = require("./routes/hoteles");
const reservasRouter = require("./routes/reservas");

// routes
router.use("/", indexRouter);
router.use("/clientes", clientesRouter);
router.use("/hoteles", hotelesRouter);
router.use("/reservas", reservasRouter);
module.exports = router;