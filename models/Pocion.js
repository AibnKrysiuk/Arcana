import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

//Modelo del Ritual 
const Pocion = db.define('pocion', {
    title: DataTypes.STRING,
    text: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
    date: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Pocion;

(async() => {
    await db.sync();
})();

// (async() => {
//     await db.sync({ force: true }); // Borra y vuelve a crear la tabla
// })();