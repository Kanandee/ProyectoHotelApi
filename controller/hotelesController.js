const { Hotels, Reservas, Clientes } = require("../models.js");
const { Op } = require("sequelize");

const HotelesController = {};

HotelesController.getAll = async (req, res) => {
   try {
      const data = await Hotels.findAll({
         include :[{ model:Reservas,as:"Reservas",include:{model:Clientes,as:"id_clientes_Cliente"}}]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se pueden encontrar los hoteles`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: "Ha ocurrido un error en el servidor.",
      });
   }
};

HotelesController.getById = async (req, res) => {
   const id = req.params.id;

   try {
      const data = await Hotels.findByPk(id, {
         include :[{ model:Reservas,as:"Reservas",include:{model:Clientes,as:"id_clientes_Cliente"}}]
      });

      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el hotel con la id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el hotel con la id=${id}.`,
      });
   }
};

HotelesController.getByName = async (req, res) => {
   const name = req.params.name;

   try {
      const data = await Hotels.findAll({
         where: { nombreHotel: { [Op.like]: `%${name}%` } },
         include :[{ model:Reservas,as:"Reservas",include:{model:Clientes,as:"id_clientes_Cliente"}}]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el hotel con el nombre=${name}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el hotel con el nombre=${name}.`,
      });
   }
};

HotelesController.getByInDate = async (req, res) => {
   const inDate = req.params.indate;
   try {
      const data = await Hotels.findAll({
         where: { fechaEntrada: { [Op.like]: `%${inDate}%` } },
         include :[{ model:Reservas,as:"Reservas",include:{model:Clientes,as:"id_clientes_Cliente"}}]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el hotel con la fecha de entrada=${inDate}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el hotel con la fecha de entrada=${inDate}`,
      });
   }
};

HotelesController.getByOutDate = async (req, res) => {
   const outDate = req.params.outdate;
   try {
      const data = await Hotels.findAll({
         where: { fechaSalida: { [Op.like]: `%${outDate}%` } },
         include :[{ model:Reservas,as:"Reservas",include:{model:Clientes,as:"id_clientes_Cliente"}}]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar el hotel con la fecha de salida=${outDate}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra el hotel con la fecha de salida=${outDate}`,
      });
   }
};

module.exports = HotelesController;