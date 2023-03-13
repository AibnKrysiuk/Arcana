import { Sequelize } from "sequelize";

const db = new Sequelize('arcana_db', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;