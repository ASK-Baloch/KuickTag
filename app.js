import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
dotenv.config();
import dotenv from "dotenv";

 
const app=express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api", routes);

export {app}