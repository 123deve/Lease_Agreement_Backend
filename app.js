import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/rentRoutes.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URI;

mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas connected successfully"))
  .catch((err) => console.error("Connection error:", err));

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
