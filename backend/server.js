// const express = require("express")
import express from "express"
import helmet from "helmet";
import morgan from "morgan";

const app = express();
app.use(helmet()) //helmet is a secrity middleware that helps you to protect your app by setting various HTTP headers

app.get("/", (req, res) => {
    console.log(res.getHeader());
    res.send("Hello from the backend")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});