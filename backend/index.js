import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.routes.js";
import balanceSheetRoutes from "./routes/balancesheet.routes.js";
import outcomeRoutes from "./routes/outcome.routes.js";
const app = express();

app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/balance_sheet", balanceSheetRoutes);
app.use("/user", userRouter);
app.use("/outcome", outcomeRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
