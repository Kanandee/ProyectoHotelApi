'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert("Clientes", [{
      Nombre: "Laura",
      DNI: "55861236G",
      Telefono: 637191483 ,
      Email: "laura@gmail.com"
    },
    {
      Nombre: "Silvia",
      DNI: "65897452T",
      Telefono: 652330488 ,
      Email: "silvia@hotmail.es"
    },
    {
      Nombre: "Jonathan",
      DNI: "45826189R",
      Telefono: 641852895 ,
      Email: "jonathan@gmail.com"
    },
    {
      Nombre: "Raquel",
      DNI: "44247220G",
      Telefono: 789455602 ,
      Email: "raquelita@hotmail.es"
    },
    ],)
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("Clientes", [{
      Nombre: "Laura",
      DNI: "55861236G",
      Telefono: 637191483 ,
      Email: "laura@gmail.com"
    },
    {
      Nombre: "Silvia",
      DNI: "65897452T",
      Telefono: 652330488 ,
      Email: "silvia@hotmail.es"
    },
    {
      Nombre: "Jonathan",
      DNI: "45826189R",
      Telefono: 641852895 ,
      Email: "jonathan@gmail.com"
    },
    {
      Nombre: "Raquel",
      DNI: "44247220G",
      Telefono: 789455602 ,
      Email: "raquelita@hotmail.es"
    },
    ],)
     
  }
};
