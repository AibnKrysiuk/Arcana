import  express  from "express";

import {rituales, 
        getRituals, 
        getRitualById,
        deleteRitual,
        updateRitual,
        saveRitual } from "../controllers/RitualesControllers.js";

import {getPociones, 
        getPocionById,
        deletePocion,
        updatePocion,
        savePocion } from "../controllers/RitualesControllers.js";        


const router = express.Router();

//portal principal de tierra
router.get('/portal_tierra', rituales);

//Parte de rituales

//obtener rituales
router.get('/rituales', getRituals);
//buscar un ritual por id
router.get('/rituales/:id', getRitualById);
//cargar ritual
router.post('/rituales', saveRitual);
//update ritual
router.patch('/rituales/:id', updateRitual);
//eliminar ritual
router.delete('/rituales/:id', deleteRitual);

//Parte de pociones

//obtener pociones
router.get('/pociones', getPociones);
//buscar una pocion por id
router.get('/pociones/:id', getPocionById);
//cargar una pocion
router.post('/pociones', savePocion);
//update pocion
router.patch('/pociones/:id', updatePocion);
//eliminar ritual
router.delete('/pociones/:id', deletePocion);



export default router;