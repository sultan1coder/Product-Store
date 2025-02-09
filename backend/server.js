// const express = require("express")
import express from "express"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import  dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT


app.use(express.json());
app.use(cors());
app.use(helmet()) //helmet is a secrity middleware that helps you to protect your app by setting various HTTP headers
app.use(morgan("dev")); //log the requests
app.get("/test", (req, res) => {
    res.send("Hello from the test route")
})

app.listen(PORT, () => {
    // console.log(res.getHeader());
    console.log(`Server running on port ${PORT}`)
});