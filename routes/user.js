import { Router } from "express";
import * as user from "../controllers/user.js"


const router = Router();

router.get("/", user.getAll);
router.post("/", user.create);
router.get("/:userId", user.get)
router.put("/:userId", user.replace)
router.patch("/:userId", user.update)
router.delete("/:userId", user.deleteOne)


export default router