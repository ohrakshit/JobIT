import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
// db and auth
import "express-async-errors";
import morgan from "morgan";

import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware
import errorHandler from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js ";

// imp
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "api!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
