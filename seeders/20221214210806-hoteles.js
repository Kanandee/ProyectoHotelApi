'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels', [{
      nombreHotel: '',
      fechaEntrada: '2023-06-21',
      fechaSalida: '2023-06-24' ,
    },
    {
      nombreHotel: 'Candel Resort',
      fechaEntrada: '2022-12-14',
      fechaSalida: '2022-12-22' ,
    },
    {
      nombreHotel: 'Melia',
      fechaEntrada: '2023-04-03',
      fechaSalida: '2023-04-07' ,
    },
    {
      nombreHotel: 'Cachemir',
      fechaEntrada: '2024-10-11',
      fechaSalida: '2024-10-16' ,
    },
    ]);
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
