'use strict';




/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {




    await queryInterface.bulkInsert('Reservas', [{

      id_clientes: 18,

      id_hotel: 27,

      importe: 130 ,

    },

    {

      id_clientes: 19,

      id_hotel: 25,

      importe: 90 ,

    },

    {

      id_clientes: 20,

      id_hotel: 26,

      importe: 200 ,

    },

    {

      id_clientes: 17,

      id_hotel: 28,

      importe: 250 ,

    },

    ]);

  },




  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reservas', [{

      id_clientes: 18,

      id_hotel: 27,

      importe: 130 ,

    },

    {

      id_clientes: 19,

      id_hotel: 25,

      importe: 90 ,

    },

    {

      id_clientes: 20,

      id_hotel: 26,

      importe: 200 ,

    },

    {

      id_clientes: 17,

      id_hotel: 28,

      importe: 250 ,

    },

    ]);

  },

};


