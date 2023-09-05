import express from "express";
import {
  fetchBalanceSheet,
  fetchAccountingSoftwareList,
} from "../controllers/balanceSheet.controllers.js";

import auth from "../middleware/user.auth.js";

const router = express.Router();
// import auth from "../middleware/auth.js";

router.post("/", fetchBalanceSheet);
router.get("/fetch-list", fetchAccountingSoftwareList);

export default router;
