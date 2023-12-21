import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import { Routes } from "./Routers.js";
import bodyParser from "body-parser";



const app = express();
app.use(cors());
app.use(Routes);


mongoose.connect(`mongodb://127.0.0.1:27017/quiz`).then( () => {
    try {
        console.log("app connected!!");
    } catch (error) {
        console.log("unable to connect");
    }
}).catch((e) => console.log("error while connecting to server"));


app.listen(8009, () => {
    try {
        console.log("App listening at port number 8000");
    } catch (error) {
        
        console.log("unable to listen");
    }
})  

app.use(bodyParser.json());
