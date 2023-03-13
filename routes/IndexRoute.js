import  express  from "express";

import {index, contacto} from "../controllers/IndexControllers.js";


const router = express.Router();


router.get('/', index);
//router.get('/contacto', contacto);

export default router;