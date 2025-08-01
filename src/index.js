import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    connectDB();
})