import { Router } from "express";
import pingRouter from "./ping.routes";

const router = Router();

router.use(pingRouter);
router.use("/1.0", pingRouter);

export default router;