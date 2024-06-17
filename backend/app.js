import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import {
  routesNotFound,
  globalErrorHandler,
} from "./middlewares/errorHandler.js";
import tourRoutes from "./routes/tourRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", userRoutes);

app.all("*", routesNotFound);
app.use(globalErrorHandler);

export default app;
