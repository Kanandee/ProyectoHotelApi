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
         //include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
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
   const name = req.params.cliente;
   try {
      const data = await Reservas.findAll({
         //where: { Nombre: { [Op.like]: `%${name}%` } },
         include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });

      if (data.length > 0) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar la reserva del cliente=${name}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se puede encontrar la reserva del cliente=${name}.`,
      });
   }
};

ReservasController.getByHotel = async (req, res) => {
   const inDate = req.params.indate;
   try {
      const data = await Reservas.findAll({
         where: { hotel: { [Op.like]: `%${namehotel}%` } },
         include :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar la reserva del hotel=${namehotel}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se puede encontrar la reserva del hotel=${namehotel}`,
      });
   }
};

ReservasController.getByImporte = async (req, res) => {
   const outDate = req.params.outdate;
   try {
      const data = await Reservas.findAll({
         where: { importe: { [Op.like]: `%${importe}%` } },
         iinclude :[{ model:Hotels,as:"id_hotel_Hotel"},{model:Clientes,as:"id_clientes_Cliente"},]
      });
      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `No se puede encontrar la reserva con el importe=${importe}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Ha ocurrido un error y no se encuentra la reserva con el importe=${importe}`,
      });
   }
};

module.exports = ReservasController;