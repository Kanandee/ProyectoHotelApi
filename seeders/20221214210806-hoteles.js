'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels', [{
      nombreHotel: 'Realeza',
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
    await queryInterface.bulkDelete('People', [{
      id_Clientes: 5,
      id_hotel: 8,
      importe: 130 ,
    },
    {
      id_Clientes: 6,
      id_hotel: 7,
      importe: 90 ,
    },
    {
      id_Clientes: 7,
      id_hotel: 5,
      importe: 200 ,
    },
    {
      id_Clientes: 8,
      id_hotel: 6,
      importe: 250 ,
    },
    ]);
  },
}