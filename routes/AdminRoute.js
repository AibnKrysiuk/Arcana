import  express  from "express";

import {AdminGetAll, singIn} from "../controllers/AdminControllers.js";
import {savePost, deletePost, updatePost} from "../controllers/PostController.js";
import {deletePocion, deleteRitual,updateRitual,updatePocion, savePocion, saveRitual} from "../controllers/RitualesControllers.js";
import { saveCodigo, updateCodigo, deleteCodigo, buscarCodigo } from "../controllers/CodigoControllers.js";
import { buscarUsuario, saveUser } from "../controllers/UserControllers.js";
import { deleteMensaje} from "../controllers/MensajeControllers.js";


const router = express.Router();

router.get('/login', singIn);
router.post('/login/user', saveUser);
router.post('/login/ingresar', buscarUsuario);

router.get('/Admin', AdminGetAll);
router.delete('/Admin/mensaje/:id', deleteMensaje);

router.post('/Admin/post', savePost);
router.post('/Admin/post/:id', updatePost);
router.delete('/Admin/post/:id', deletePost);

router.post('/Admin/ritual', saveRitual);
router.post('/Admin/ritual/:id', updateRitual);
router.delete('/Admin/ritual/:id', deleteRitual);

router.post('/Admin/potion', savePocion);
router.post('/Admin/potion/:id', updatePocion);
router.delete('/Admin/potion/:id', deletePocion);

router.post('/Admin/codigo', saveCodigo);
router.post('/Admin/codigo/:id', updateCodigo);
router.delete('/Admin/codigo/:id', deleteCodigo);
router.post('/Admin/buscarCodigo/:codigo', buscarCodigo);
export default router;