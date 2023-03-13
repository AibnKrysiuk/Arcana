import Ritual from "../models/Ritual.js";
import Pocion from "../models/Pocion.js";
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

// Pagina principal de rituales y pociones
export const rituales = async (req, res) => {
    res.render('rituales');
}

//obtener Rituales
export const getRituals = async(req, res) => {
    try {
        const response = await Ritual.findAll();
        res.render('ritual', { ritual: response});
        //res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//obtener un ritual
export const getRitualById = async (req, res) => {
    try {
        const response = await Ritual.findOne({
            where : {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//guardar ritual
export const saveRitual = async (req, res) => {
    const { title, text, date } = req.body;
  
    try {
      await Ritual.create({ title, text, date });
      //res.status(201).json({ msg: "Post created successfully" });
      res.redirect('/Admin?msg=Ritual+created+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};

//actualizar ritual
export const updateRitual = async (req, res) => {
    const { title, text, date } = req.body;
    const { id } = req.params;
  
    try {
      const ritual = await Ritual.findOne({ where: { id } });
      if (!ritual) return res.status(404).json({ msg: "Post not found" });
  
      await Ritual.update({ title, text, date }, { where: { id } });
      //res.status(200).json({ msg: "Post updated successfully" });
      res.redirect('/Admin?msg=Ritual+Update+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
  };

//delete ritual
export const deleteRitual = async (req, res) => {
    const { id } = req.params;
  
    try {
      const ritual = await Ritual.findOne({ where: { id } });
      if (!ritual) return res.status(404).json({ msg: "Post not found" });
  
      await Ritual.destroy({ where: { id } });
      res.status(200).json({ msg: "Post deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
  };

// POCIONES

//obtener Pociones
export const getPociones = async(req, res) => {
    try {
        const response = await Pocion.findAll();
        res.render('pociones', { pocion: response});
        //res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//obtener un pocion
export const getPocionById = async (req, res) => {
    try {
        const response = await Pocion.findOne({
            where : {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//guardar Pocion
export const savePocion = async (req, res) => {
    const { title, text, date } = req.body;
  
    try {
      await Pocion.create({ title, text, date });
      //res.status(201).json({ msg: "Post created successfully" });
      res.redirect('/Admin?msg=Potion+created+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};

//actualizar ritual
export const updatePocion = async (req, res) => {
    const { title, text, date } = req.body;
    const { id } = req.params;
  
    try {
      const pocion = await Pocion.findOne({ where: { id } });
      if (!pocion) return res.status(404).json({ msg: "Post not found" });
  
      await Pocion.update({ title, text, date }, { where: { id } });
      //res.status(200).json({ msg: "Post updated successfully" });
      res.redirect('/Admin?msg=Potion+Update+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
  };

//delete ritual
export const deletePocion = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pocion = await Pocion.findOne({ where: { id } });
      if (!pocion) return res.status(404).json({ msg: "Post not found" });
  
      await Pocion.destroy({ where: { id } });
      res.status(200).json({ msg: "Post deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
  };
