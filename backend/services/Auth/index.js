import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
    res.json({ message: "Hello from Auth service" })
})

app.listen(PORT, async () => {
    await connectToDb();
    console.log(`✅ Auth service started at port ${PORT}`)
})