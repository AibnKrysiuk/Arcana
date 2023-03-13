import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

//Modelo del Ritual 
const Mensaje = db.define('mensaje', {
    nombre: DataTypes.STRING,
    mail: DataTypes.STRING,
    text: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    }
}, {
    freezeTableName: true
});

export default Mensaje;

(async() => {
    await db.sync();
})();