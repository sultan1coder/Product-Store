// const express = require("express")
import express from "express"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";


import productRoute from "./routes/productRoute.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT


app.use(express.json());
app.use(cors());
app.use(helmet()) //helmet is a secrity middleware that helps you to protect your app by setting various HTTP headers

app.use(morgan("dev")); //log the requests

app.use("/api/products", productRoute);

async function initDB() {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `;
        console.log("Database initialized successfully");
    } catch (error) {
        console.log("Error initDB", error);
    }
}
initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
});