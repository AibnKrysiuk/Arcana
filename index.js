import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import PostRoute from "./routes/PostRoute.js";
import IndexRoute from "./routes/IndexRoute.js";
import RitualesRoute from "./routes/RitualesRoutes.js";
import ExperienciaRoute from "./routes/ExperienciaRoute.js";
import Admin from "./routes/AdminRoute.js";
import Mensaje from "./routes/ContactoRoute.js";

const app = express();

//configuracion de EJS
app.set('views', './views');
app.set('view engine', 'ejs');


app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));

app.use(IndexRoute);
app.use(PostRoute);
app.use(RitualesRoute);
app.use(ExperienciaRoute);
app.use(Admin);
app.use(Mensaje);

app.listen(4000, () => console.log('Server Up and Running...'));