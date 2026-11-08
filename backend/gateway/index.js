import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import proxy from 'express-http-proxy';
import cookieParser from 'cookie-parser';
import { getCurrentUser } from './controllers/user.controller.js';
import protect from './middleware/auth.middleware.js';


dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser());

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || process.env.AUTH_SERVICE || "http://localhost:8001";

app.use("/api/auth", proxy(AUTH_SERVICE_URL));
app.use("/api/me", protect, getCurrentUser)

app.get("/", (req, res) => {
    res.json({ message: "Hello from gateway" })
})

app.listen(PORT, () => {
    console.log(`✅ gateway started at port ${PORT}`)
})