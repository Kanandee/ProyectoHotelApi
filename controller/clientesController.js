const { Clientes, Reservas, Hotels } = require("../models.js");
const { Op } = require("sequelize");

const ClientesController = {};

ClientesController.getAll = async (req, res) => {
   try {
      const data = await Clientes.findAll({
         include :[{ model:Reservas,as:"Reservas",include:{model:Hotels,as:"id_hotel_Hotel"}}]
       });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se pueden encontrar los clientes`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: "Ha ocurrido un error en el servidor.",
      });
   }
};

ClientesController.getById = async (req, res) => {
   const id = req.params.id;

   try {
      const data = await Clientes.findByPk(id, {
         include :[{ model:Reservas,as:"Reservas",include:{model:Hotels,as:"id_hotel_Hotel"}}]
      });

      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el cliente con la id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el cliente con la id=${id}.`,
      });
   }
};

ClientesController.getByName = async (req, res) => {
   const name = req.params.name;

   try {
      const data = await Clientes.findAll({
       where: { Nombre: { [Op.like]: `%${name}%` } },
       include :[{ model:Reservas,as:"Reservas",include:{model:Hotels,as:"id_hotel_Hotel"}}]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el cliente con el nombre=${name}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el cliente con el nombre=${name}.`,
      });
   }
};

ClientesController.getByEmail = async (req, res) => {
   const email = req.params.email;

   try {
      const data = await Clientes.findAll({
       
         where: { Email: { [Op.like]: `%${email}%` } },  
         include :[{ model:Reservas,as:"Reservas",include:{model:Hotels,as:"id_hotel_Hotel"}}]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el cliente con el email=${email}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el cliente con el email=${email}.`,
      });
   }
};

ClientesController.getByDni = async (req, res) => {
   const dni = req.params.dni;

   try {
      const data = await Clientes.findAll({
         where: { DNI: { [Op.like]: `%${dni}%` } },
         include :[{ model:Reservas,as:"Reservas",include:{model:Hotels,as:"id_hotel_Hotel"}}]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el cliente con el dni=${dni}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el cliente con el dni=${dni}.`,
      });
   }
};

ClientesController.getByTelefono = async (req, res) => {
   const telefono = req.params.telefono;

   try {
      const data = await Clientes.findAll({
         where: { Telefono: { [Op.like]: `%${telefono}%` } },
         include :[{ model:Reservas,as:"Reservas",include:{model:Hotels,as:"id_hotel_Hotel"}}]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el cliente con el telefono=${telefono}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el cliente con el telefono=${telefono}.`,
      });
   }
};

module.exports = ClientesController;