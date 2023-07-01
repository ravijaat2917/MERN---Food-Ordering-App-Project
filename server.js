import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Config/db.js";
import path from 'path';
import { fileURLToPath } from "url";
import orderRoutes from './routes/order.Routes.js';

// Rest object
const app = express();

// Middlewares
dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Database Connection
connectDB(process.env.DATABASE_URL);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname,"./frontend/build")));


// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
// });

// Routes
app.use('/api/v1', orderRoutes);

const PORT = process.env.PORT;
// Listen Port
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});