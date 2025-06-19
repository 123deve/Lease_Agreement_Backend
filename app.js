import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/rentRoutes.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors())
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

const DB_OPTION = {
    user:'root',
    pass:'yourStrongPassword',
    dbName:'Rent_Agreement',
    authSource:'admin'
}

mongoose
.connect(MONGOURL,DB_OPTION)
.then(
    ()=>{console.log("DB connected successfully")}
)
.catch(err => console.log(err))

app.use("/api",route);

app.listen(PORT,()=>{console.log(`Listening at port http://localhost:${PORT}`)});

