import  express  from "express";

import {experiencia, preparativos} from "../controllers/ExperienciaControllers.js";
import { getCodigo,
        getCodigoById,
        updateCodigo,
        deleteCodigo, 
        saveCodigo} from "../controllers/CodigoControllers.js";


const router = express.Router();


router.get('/portal_agua', preparativos);
//router.get('/experiencia', experiencia);
//router.get('/experiencia', getCodigo);
router.get('/experiencia/:id', getCodigoById);
router.post('/experiencia', saveCodigo);
router.patch('/experiencia/:id', updateCodigo);
router.delete('/experiencia/:id', deleteCodigo);

export default router;