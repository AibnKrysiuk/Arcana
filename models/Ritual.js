import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

//Modelo del Ritual 
const Ritual = db.define('ritual', {
    title: DataTypes.STRING,
    text: {
      type: DataTypes.STRING(10000),
      allowNull: false,
    },
    date: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Ritual;

// (async() => {
//     await db.sync({ force: true }); // Borra y vuelve a crear la tabla
// })();

(async () => {
  await db.sync();
})();