import { Router } from "express";
import * as user from "../controllers/rgstr.js"


const router = Router();

router.get("/", user.getAll);
router.post("/", user.create);

export default router