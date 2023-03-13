import path from 'path';
import Codigo from "../models/Codigo.js";

const __dirname = path.resolve();

// Pagina principal de rituales y pociones

//obtener Rituales
export const getCodigo = async(req, res) => {
    try {
        const response = await Codigo.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const buscarCodigo = async (req, res) => {
  const { codigo } = req.body;

  try {
    const codigoEncontrado = await Codigo.findOne({ where: { codigo } });

    if (!codigoEncontrado) {
      res.status(404).json({ msg: "Código no encontrado" });
    } else if (!codigoEncontrado.estado || codigoEncontrado.usos <= 0) {
      res.status(400).json({ msg: "Código no válido" });
    } else {
      // actualizar usos y guardar la instancia actualizada
      codigoEncontrado.usos--;

      if (codigoEncontrado.usos === 0) {
        codigoEncontrado.estado = false;
      }

      await codigoEncontrado.save();

      // redirigir a la página correspondiente
      //res.redirect('/experiencia');
      res.render('experiencia');
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getCodigoById = async (req, res) => {
    try {
        const response = await Codigo.findOne({
            where : {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveCodigo = async (req, res) => {
    const { codigo, estado, usos } = req.body;
  
    try {
      await Codigo.create({ codigo, estado, usos });
      //res.status(201).json({ msg: "Post created successfully" });
      res.redirect('/Admin?msg=Codigo+created+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};


export const updateCodigo = async (req, res) => {
    const {codigo, estado, usos } = req.body;
    const { id } = req.params;

    console.log(codigo, estado, usos, id);
    try {
      const cod = await Codigo.findOne({ where: { id } });
      if (!cod) return res.status(404).json({ msg: "Post not found" });
  
      await Codigo.update({ codigo, estado, usos }, { where: { id } });
      //res.status(200).json({ msg: "Post updated successfully" });
      res.redirect('/Admin?msg=Codigo+Update+successfully');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
};


export const deleteCodigo = async (req, res) => {
    const { id } = req.params;
  
    try {
      const codigo = await Codigo.findOne({ where: { id } });
      if (!codigo) return res.status(404).json({ msg: "Post not found" });
  
      await Codigo.destroy({ where: { id } });
      res.status(200).json({ msg: "Post deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
  };