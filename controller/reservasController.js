const { Reservas, Hotels, Clientes } = require("../models.js");
const { Op } = require("sequelize");

const ReservasController = {};

ReservasController.getAll = async (req, res) => {
   try {
      const data = await Reservas.findAll({
         include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se pueden encontrar las reservas`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: "Ha ocurrido un error en el servidor.",
      });
   }
};

ReservasController.getById = async (req, res) => {
   const id = req.params.id;
   try {
      const data = await Reservas.findByPk(id, {
         include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar la reserva con la id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra la reserva con la id=${id}.`,
      });
   }
};

ReservasController.getByCliente = async (req, res) => {
   const cliente = req.params.cliente;
   try {
      const data = await Reservas.findAll({
         where: { id_clientes: { [Op.like]: `%${cliente}%` } },
         include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar la reserva del cliente=${cliente}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se puede encontrar la reserva del cliente=${cliente}.`,
      });
   }
};

ReservasController.getByHotel = async (req, res) => {
   const hotel = req.params.hotel;
   try {
      const data = await Reservas.findAll({
         where: { id_hotel: { [Op.like]: `%${hotel}%` } },
         include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar la reserva del cliente=${hotel}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se puede encontrar la reserva del cliente=${hotel}.`,
      });
   }
};

module.exports = ReservasController;