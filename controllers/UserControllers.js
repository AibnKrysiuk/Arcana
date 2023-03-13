import path from 'path';
import User from "../models/Users.js";
import Post from "../models/Post.js";
import Ritual from "../models/Ritual.js";
import Pocion from "../models/Pocion.js";
import Codigo from "../models/Codigo.js";
import Mensaje from '../models/Mensajes.js';

const __dirname = path.resolve();

export const saveUser = async (req, res) => {
    const { user, password } = req.body;
  
    try {
      await User.create({ user, password });
      res.status(201).json({ msg: "User created successfully" });
      //res.redirect('/Admin?msg=Codigo+created+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};

export const buscarUsuario = async (req, res) => {
    const { user, password } = req.body;
  
    try {
      const usuarioEncontrado = await User.findOne({ where: { user } });
  
      if (!usuarioEncontrado) {
        res.status(404).json({ msg: "Usuario no encontrado" });
      } else if (usuarioEncontrado.password !== password) {
        res.status(400).json({ msg: "Contraseña incorrecta" });
      } else {
        // Redirigir a la página correspondiente
        AdminGetAll(req, res);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Error interno del servidor" });
    }
  };

  const AdminGetAll = async (req, res) => {
    try {
      const posts = await Post.findAll();
      const rituals = await Ritual.findAll();
      const potions = await Pocion.findAll();
      const codigo = await Codigo.findAll();
      const mensaje = await Mensaje.findAll();
      res.render('Admin', { posts, rituals, potions, codigo, mensaje, successMsg: "Post created successfully" });
    } catch (error) {
      console.log(error.message);
    }
}