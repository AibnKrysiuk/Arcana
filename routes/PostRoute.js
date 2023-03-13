import  express  from "express";
import {
    getPosts,
    getPostById,
    savePost,
    updatePost,
    deletePost
} from "../controllers/PostController.js";

const router = express.Router();


router.get('/portal_aire', getPosts);
router.get('/portal_aire/:id', getPostById);
//router.post('/portal_aire', savePost);
//router.patch('/portal_aire/:id', updatePost);
//router.delete('/portal_aire/:id', deletePost);

export default router;