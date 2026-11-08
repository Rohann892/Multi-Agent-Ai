import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';
import router from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
    res.json({ message: "Hello from Auth service" })
})

app.listen(PORT, async () => {
    await connectToDb();
    console.log(`✅ Auth service started at port ${PORT}`)
})