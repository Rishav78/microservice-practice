import {Router} from "express";

const router = Router();

router.get("/ping", (req, res, next) => {
  return res.json({success: true, message: "authentication server is up"});
});

export default router;