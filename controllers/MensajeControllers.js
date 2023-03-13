import Mensaje from "../models/Mensajes.js";
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const getMensaje = async(req, res) => {
    try {
        const response = await Mensaje.findAll();
        res.render('mensaje', { mensaje: response});
    } catch (error) {
        console.log(error.message);
    }
}

export const saveMensaje = async (req, res) => {
    const { nombre, mail, text } = req.body;
  
    try {
      await Mensaje.create({ nombre, mail, text });
      //res.status(201).json({ msg: "Post created successfully" });
      res.redirect('/contacto?msg=Mensaje+enviado+correctamente!');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};

export const deleteMensaje = async (req, res) => {
    const { id } = req.params;
  
    try {
      const mens = await Mensaje.findOne({ where: { id } });
      if (!mens) return res.status(404).json({ msg: "Post not found" });
  
      await Mensaje.destroy({ where: { id } });
      res.status(200).json({ msg: "Mensaje deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};