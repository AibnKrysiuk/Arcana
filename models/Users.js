import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

//Modelo del Ritual 
const User = db.define('user', {
  user: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  freezeTableName: true
});

export default User;

(async () => {
  await db.sync();
})();