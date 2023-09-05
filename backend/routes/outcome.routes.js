import express from "express";
import { submitApplication } from "../controllers/outcome.controllers.js";
const router = express.Router();

router.post("/", submitApplication);

export default router;
