import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

//Modelo del Ritual 
const Codigo = db.define('codigo', {
  codigo: DataTypes.STRING,
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true // valor por defecto si no se especifica
  },
  usos: {
    type: DataTypes.INTEGER,
    defaultValue: 0 // valor por defecto si no se especifica
  }
}, {
  freezeTableName: true
});

export default Codigo;

(async () => {
  await db.sync();
})();