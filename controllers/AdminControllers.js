import Post from "../models/Post.js";
import Ritual from "../models/Ritual.js";
import Pocion from "../models/Pocion.js";
import Codigo from "../models/Codigo.js";
import Mensaje from "../models/Mensajes.js";
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const singIn = async (req, res) => {
  res.render('sing-in');
}

export const AdminGetAll = async (req, res) => {
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