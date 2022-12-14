const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Hotels.init(sequelize, DataTypes);
}

class Hotels extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreHotel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaEntrada: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechaSalida: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hotels',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
