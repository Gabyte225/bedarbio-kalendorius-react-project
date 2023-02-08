import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";
// import cors from "cors";

//DB connection
import connectDB from "./db/connect.js";

//routers

import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobsRoutes.js";

const app = express();

dotenv.config();

//middleware
notFoundMiddleware;
errorHandlerMiddleware;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
// app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.send({ msg: "API!" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
