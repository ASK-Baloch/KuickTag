import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import adminRouter from "./routes/admin.routes.js"
dotenv.config();

 
const app=express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/v1/admin", adminRouter);

export {app}