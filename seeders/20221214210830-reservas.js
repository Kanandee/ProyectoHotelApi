'use strict';




/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {




    await queryInterface.bulkInsert('Reservas', [{

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




  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reservas', [{

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

};


