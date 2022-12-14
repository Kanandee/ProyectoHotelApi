'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reservas', [{
      id_Clientes: 2,
      id_hotel: 1,
      importe: 150 ,
    },
    {
      id_Clientes: 3,
      id_hotel: 4,
      importe: 80 ,
    },
    {
      id_Clientes: 1,
      id_hotel: 3,
      importe: 60 ,
    },
    {
      id_Clientes: 4,
      id_hotel: 2,
      importe: 120 ,
    },
    ], 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
