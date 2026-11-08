import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || process.env.AUTH_SERVICE || "http://localhost:8001";

app.use("/auth", proxy(AUTH_SERVICE_URL));


app.get("/", (req, res) => {
    res.json({ message: "Hello from gateway" })
})

app.listen(PORT, () => {
    console.log(`✅ gateway started at port ${PORT}`)
})