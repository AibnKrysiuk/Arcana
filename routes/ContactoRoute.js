import  express  from "express";

import { saveMensaje } from "../controllers/MensajeControllers.js";
import { contacto} from "../controllers/IndexControllers.js";

const router = express.Router();

router.post('/contacto', saveMensaje);
router.get('/contacto', contacto);

export default router;