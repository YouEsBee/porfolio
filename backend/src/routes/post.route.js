import { Router } from "express";
import { getPosts, deletePost, createPost, updatePost } from "../controllers/post.controller.js";

const router = Router();

router.route("").post(createPost);
router.route("").get(getPosts);
router.route("/update/:id").patch(updatePost);
router.route("/delete/:id").delete(deletePost);

export default router;