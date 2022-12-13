const DataTypes = require("sequelize").DataTypes;
const _Clientes = require("./Clientes");
const _Hotels = require("./Hotels");
const _Reservas = require("./Reservas");
const _SequelizeMeta = require("./SequelizeMeta");

function initModels(sequelize) {
  const Clientes = _Clientes(sequelize, DataTypes);
  const Hotels = _Hotels(sequelize, DataTypes);
  const Reservas = _Reservas(sequelize, DataTypes);
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);

  Reservas.belongsTo(Clientes, { as: "id_clientes_Cliente", foreignKey: "id_clientes"});
  Clientes.hasMany(Reservas, { as: "Reservas", foreignKey: "id_clientes"});
  Reservas.belongsTo(Hotels, { as: "id_hotel_Hotel", foreignKey: "id_hotel"});
  Hotels.hasMany(Reservas, { as: "Reservas", foreignKey: "id_hotel"});

  return {
    Clientes,
    Hotels,
    Reservas,
    SequelizeMeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
