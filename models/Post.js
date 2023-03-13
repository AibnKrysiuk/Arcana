import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

//Modelo del Post 
const Post = db.define('post', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    text: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
    autor: DataTypes.STRING,
    date: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Post;

(async() => {
    await db.sync();
})();
